import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab5.css';

/* Menu Screen */
const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>

        <ExploreContainer name="Components" />

      </IonContent>
    </IonPage>
  );
};

export default Tab5;