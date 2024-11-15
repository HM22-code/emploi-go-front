import { IonContent, IonPage, IonAvatar, IonCard, IonCardContent, IonItem, IonLabel, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonChip, IonGrid, IonRow, IonCol } from '@ionic/react';
import accountCircle from '../assets/account-circle.svg'
import './ProfileScreen.css';
import FilterCard from '../components/FilterCard';

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

        <FilterCard
          data={[
            "In velit voluptate sint",
            "In velit voluptate sint",
            "In velit voluptate sint",
            "In velit voluptate sint",
            "In velit voluptate sint",
            "In velit voluptate sint",
            "In velit voluptate sint",
            "In velit voluptate sint",
          ]}
        />

      </IonContent>
    </IonPage>
  );
};

export default ProfileScreen;