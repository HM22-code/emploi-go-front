import { IonCol, IonGrid, IonRow } from '@ionic/react';
import './ItemGrid.css';
import ItemCard from './ItemCard';

/*
TODO: Define item props
type DataItem = {
  id: number;
};
*/

type Props = {
  data: number[];
};

const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const ItemGrid: React.FC<Props> = ({ data }) => {

  const chunks = chunkArray(data, 3);

  return (
    <IonGrid fixed={true}>
      {
        chunks.map((chunk, chunkIndex) =>
        <IonRow key={chunkIndex}>
          {chunk.map((item) =>
          <IonCol key={item} size="4" size-md="4" size-lg="4">
            <ItemCard key={item}/>
          </IonCol>
          )}
        </IonRow>
        )
      }
    </IonGrid>
  );
};

export default ItemGrid;