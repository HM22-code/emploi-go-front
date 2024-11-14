import { IonButton, IonCard, IonCardContent, IonIcon, IonItem, IonLabel, IonProgressBar, IonThumbnail } from '@ionic/react';
import { checkmarkOutline } from 'ionicons/icons';
import trophy from '../assets/trophy.svg'
import './QuestCard.css';

interface Props {
  label: string;
  progressValue: number;
  progressGoal: number;
  disabled: boolean;
}

const QuestCard: React.FC<Props> = ({ label, progressValue, progressGoal, disabled }) => {
  return (
    <IonCard>
      <IonCardContent>
        <IonItem>
          <IonThumbnail slot="start">
            <img src={trophy} alt="Silhouette of trophy" height={50} width={50}/>
          </IonThumbnail>
          <IonLabel>{label}</IonLabel>
        </IonItem>
        <IonItem>
          <IonButton disabled={disabled} slot="end" size="small">
            <IonIcon slot="icon-only" icon={checkmarkOutline}></IonIcon>
          </IonButton>
          <IonProgressBar value={progressValue / progressGoal}></IonProgressBar>
          <IonLabel>{'[' + progressValue + '/' + progressGoal + ']'}</IonLabel>
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

export default QuestCard;