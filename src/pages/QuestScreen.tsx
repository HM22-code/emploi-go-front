import { IonContent, IonPage, IonBadge, IonItem, IonLabel } from '@ionic/react';
import './QuestScreen.css';
import QuestCard from '../components/QuestCard';

/* Quest Screen */
const QuestScreen: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>

        <IonItem>
          <IonBadge slot="end">2</IonBadge>
          <IonLabel>Quotidiennes</IonLabel>
        </IonItem>

        <QuestCard
          label={'Sint ad incididunt eu tempor cillum officia ipsum tempor consequat irure esse non eiusmod.'}
          progressValue={0}
          progressGoal={2}
          disabled={true}
        />

        <QuestCard
          label={'Sint ad incididunt eu tempor cillum officia ipsum tempor consequat irure esse non eiusmod.'}
          progressValue={0}
          progressGoal={2}
          disabled={true}
        />

      </IonContent>
    </IonPage>
  );
};

export default QuestScreen;
