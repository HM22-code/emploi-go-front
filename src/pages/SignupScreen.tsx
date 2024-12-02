import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonIcon, IonInput, IonItem, IonList, IonPage, IonRow } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import './SignupScreen.css';

const SignupScreen: React.FC = () => {
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
            <IonCardSubtitle className='subtitle'>Signup</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem className='item' lines='none'>
                <IonInput
                  label="Username"
                  labelPlacement="stacked"
                  type='text'
                  fill='solid'
                ></IonInput>
              </IonItem>
              <IonItem className='item' lines='none'>
                <IonInput
                  label="Email"
                  labelPlacement="stacked"
                  type='email'
                  fill='solid'
                ></IonInput>
              </IonItem>
              <IonItem className='item' lines='none'>
                <IonInput
                  label="Password"
                  labelPlacement="stacked"
                  type="password"
                  fill='solid'
                ></IonInput>
              </IonItem>
              <IonItem className='item' lines='none'>
                <IonInput
                  label="Confirm password"
                  labelPlacement="stacked"
                  type="password"
                  fill='solid'
                ></IonInput>
              </IonItem>
              <IonRow>
                <IonCol className='button-column'>
                  <IonButton expand="block" shape="round" fill="solid">Signup</IonButton>
                  <IonButton expand="block" shape="round" fill="clear">Login</IonButton>
                </IonCol>
              </IonRow>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default SignupScreen;