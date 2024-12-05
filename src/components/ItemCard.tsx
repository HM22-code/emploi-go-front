import { IonCard, IonCardContent } from '@ionic/react';
import tshirtCrew from '../assets/tshirt-crew.svg'
import './ItemCard.css';

type Props = {
  thumbnailUrl: string,
  title: string;
};

const ItemCard: React.FC<Props> = (thumbnailUrl, title) => {
  return (
    <IonCard>
      <IonCardContent >
        <img src={tshirtCrew} alt={title}/>
      </IonCardContent>
    </IonCard>
  );
};

export default ItemCard;