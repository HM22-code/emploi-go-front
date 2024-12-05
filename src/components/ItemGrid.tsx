import { IonCol, IonGrid, IonRow } from '@ionic/react';
import './ItemGrid.css';
import ItemCard from './ItemCard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Item = {
  userId: number,
  id: number,
  title: string,
  url: string
  thumbnailUrl: string
}

const chunkArray = <Item,>(array: Item[], chunkSize: number): Item[][] => {
  const chunks: Item[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const ItemGrid: React.FC = () => {

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get('http://localhost:3000/item/')
      .then(response => {
        setItems(response.data);
        console.log(response.data)
      })
    .catch(error => {
      console.log(error);
    });
  }, []);

  const chunks = chunkArray(items, 3);
  console.log(chunks)

  return (
    <IonGrid fixed={true}>
      {
        chunks.map((chunk, chunkIndex) =>
        <IonRow key={chunkIndex}>
          {chunk.map((item) =>
          <IonCol key={item.id} size="4" size-md="4" size-lg="4">
            <ItemCard key={item.id} thumbnailUrl={item.thumbnailUrl} title={item.title}/>
          </IonCol>
          )}
        </IonRow>
        )
      }
    </IonGrid>
  );
};

export default ItemGrid;