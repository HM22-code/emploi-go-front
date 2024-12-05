import { IonContent, IonPage, IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView} from '@ionic/react';
import './InventoryPage.css';
import ItemGrid from '../components/ItemGrid';

const InventoryPage: React.FC = () => {
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
            <div>
              <ItemGrid />
            </div>
          </IonSegmentContent>
          <IonSegmentContent id="second">
            <div></div>
          </IonSegmentContent>
        </IonSegmentView>
      </IonContent>
    </IonPage>
  );
};

export default InventoryPage;
