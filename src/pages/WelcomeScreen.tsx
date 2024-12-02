import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonIcon, IonInput, IonItem, IonList, IonPage, IonRow } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import './WelcomeScreen.css';

const WelcomeScreen: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
              <IonRow>
                <IonCol className='logo-center'>
                  <IonIcon className='logo' icon={logoIonic} color='primary'></IonIcon>
                </IonCol>
              </IonRow>
            <IonCardTitle className='title'>Emploi-go</IonCardTitle>
            <IonCardSubtitle className='subtitle'>Welcome</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonRow>
              <IonCol className='button-column'>
                <IonButton expand="block" shape="round" fill="solid">Login</IonButton>
                <IonButton expand="block" shape="round" fill="clear">Signup</IonButton>
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default WelcomeScreen;