import { IonCard, IonCardContent } from '@ionic/react';
import tshirtCrew from '../assets/tshirt-crew.svg'
import './ItemCard.css';

const ItemCard: React.FC = () => {
  return (
    <IonCard>
      <IonCardContent >
        <img src={tshirtCrew} alt="Silhouette of a tshirt"/>
      </IonCardContent>
    </IonCard>
  );
};

export default ItemCard;