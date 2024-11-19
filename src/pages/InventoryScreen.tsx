import { IonContent, IonPage, IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView} from '@ionic/react';
import './InventoryScreen.css';
import ItemGrid from '../components/ItemGrid';

/* Inventory Screen */
const InventoryScreen: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>

        <IonSegment value="first">
          <IonSegmentButton value="first" contentId="first">
            <IonLabel>Tenues</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="second" contentId="second">
            <IonLabel>Accessoires</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        <IonSegmentView>
          <IonSegmentContent id="first">
            <ItemGrid />
          </IonSegmentContent>
          <IonSegmentContent id="second">

          </IonSegmentContent>
        </IonSegmentView>

      </IonContent>
    </IonPage>
  );
};

export default InventoryScreen;
