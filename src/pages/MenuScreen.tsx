import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './MenuScreen.css';

/* Menu Screen */
const MenuScreen: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>

        <ExploreContainer name="Components" />

      </IonContent>
    </IonPage>
  );
};

export default MenuScreen;