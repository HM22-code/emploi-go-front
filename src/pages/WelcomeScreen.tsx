import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonIcon, IonInput, IonItem, IonList, IonPage, IonRow } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import './WelcomeScreen.css';
import { Link } from 'react-router-dom';

const WelcomeScreen: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='full-center'>
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
                  <Link to="/login">
                    <IonButton expand="block" shape="round" fill="solid">Login</IonButton>
                  </Link>
                  <Link to="/signup">
                    <IonButton expand="block" shape="round" fill="clear">Signup</IonButton>
                  </Link>
                </IonCol>
              </IonRow>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default WelcomeScreen;