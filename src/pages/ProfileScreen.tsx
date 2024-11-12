import { IonContent, IonPage, IonAvatar, IonCard, IonCardContent } from '@ionic/react';
import accountCircle from '../assets/account-circle.svg'
import './ProfileScreen.css';

/* Profile Screen */
const ProfileScreen: React.FC = () => {
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

export default ProfileScreen;