import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip } from '@ionic/react';
import './FilterCard.css';

type Filter = {
  id: number,
  label: string
}

type Props = {
  data: Filter[];
};

const FilterCard: React.FC<Props> = ({ data }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Filtres de recherche</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {
          data.map((item, key) =>
            <IonChip key={key}><p className='truncate'>{item.label}</p></IonChip>
          )
        }
      </IonCardContent>
      <IonButton fill="clear">Editer</IonButton>
    </IonCard>
  );
};

export default FilterCard;