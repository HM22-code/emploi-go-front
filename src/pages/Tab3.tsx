import { IonContent, IonPage, IonBadge, IonItem, IonLabel, IonProgressBar, IonThumbnail, IonCard, IonCardContent, IonButton, IonIcon } from '@ionic/react';
import { checkmarkOutline } from 'ionicons/icons';
import trophy from '../assets/trophy.svg'
import './Tab3.css';

/* Quest Screen */
const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>

        <IonItem>
          <IonBadge slot="end">2</IonBadge>
          <IonLabel>Quotidiennes</IonLabel>
        </IonItem>

        <IonCard>
          <IonCardContent>
            <IonItem>
              <IonThumbnail slot="start">
                <img src={trophy} alt="Silhouette of trophy" height={50} width={50}/>
              </IonThumbnail>
              <IonLabel>Sint ad incididunt eu tempor cillum officia ipsum tempor consequat irure esse non eiusmod.</IonLabel>
            </IonItem>
            <IonItem>
              <IonButton disabled={true} slot="end" size="small">
                <IonIcon slot="icon-only" icon={checkmarkOutline}></IonIcon>
              </IonButton>
              <IonProgressBar value={0}></IonProgressBar>
              <IonLabel>[0/2]</IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent>
            <IonItem>
              <IonThumbnail slot="start">
                <img src={trophy} alt="Silhouette of trophy" height={50} width={50}/>
              </IonThumbnail>
              <IonLabel>Sint ad incididunt eu tempor cillum officia ipsum tempor consequat irure esse non eiusmod.</IonLabel>
            </IonItem>
            <IonItem>
              <IonButton disabled={true} slot="end" size="small">
                <IonIcon slot="icon-only" icon={checkmarkOutline}></IonIcon>
              </IonButton>
              <IonProgressBar value={0}></IonProgressBar>
              <IonLabel>[0/2]</IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
