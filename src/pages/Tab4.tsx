import { IonContent, IonPage, IonAvatar, IonCard, IonCardContent } from '@ionic/react';
import accountCircle from '../assets/account-circle.svg'
import './Tab4.css';

/* Profile Screen */
const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>

        <IonCard>
          <IonCardContent>
            <IonAvatar>
              <img src={accountCircle} alt="Silhouette of avatar"/>
            </IonAvatar>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab4;