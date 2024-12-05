import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './MenuPage.css';

const MenuPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <ExploreContainer name="Components" />
      </IonContent>
    </IonPage>
  );
};

export default MenuPage;