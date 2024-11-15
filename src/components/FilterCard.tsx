import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip } from '@ionic/react';
import './FilterCard.css';

/*
TODO: Define item props
type DataItem = {
  id: number;
  label: string;
};
*/

type Props = {
  data: string[];
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
            <IonChip key={key}><p className='truncate'>{item}</p></IonChip>
          )
        }
      </IonCardContent>
      <IonButton fill="clear">Editer</IonButton>
    </IonCard>
  );
};

export default FilterCard;