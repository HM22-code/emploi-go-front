import { IonContent, IonPage, IonAvatar, IonCard, IonCardContent, IonItem, IonLabel } from '@ionic/react';
import accountCircle from '../assets/account-circle.svg'
import './ProfileScreen.css';

/* Profile Screen */
const ProfileScreen: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>

        <IonCard>
          <IonCardContent>
            <IonItem>
              <IonAvatar aria-hidden="true" slot="start">
                <img src={accountCircle} alt="Silhouette of avatar"/>
              </IonAvatar>
              <IonLabel>
                Pseudo
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default ProfileScreen;