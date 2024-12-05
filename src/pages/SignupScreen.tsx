import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonIcon, IonInput, IonItem, IonList, IonPage, IonRow } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import React, { useState } from "react";
import axios from "axios";
import './SignupScreen.css';
import { Link } from 'react-router-dom';

const SignupScreen: React.FC = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/signup", { username, email, password });
      // Storing token in localStorage
      if (response.data) {
        alert("Signup successful!");
      }
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

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
              <IonCardSubtitle className='subtitle'>Signup</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <form onSubmit={handleSubmit}>
                <IonList>
                  <IonItem className='item' lines='none'>
                    <IonInput
                      label="Username"
                      labelPlacement="stacked"
                      type='text'
                      fill='solid'
                      onIonInput={(e: any) => setUsername(e.target.value)}
                    ></IonInput>
                  </IonItem>
                  <IonItem className='item' lines='none'>
                    <IonInput
                      label="Email"
                      labelPlacement="stacked"
                      type='email'
                      fill='solid'
                      onIonInput={(e: any) => setEmail(e.target.value)}
                    ></IonInput>
                  </IonItem>
                  <IonItem className='item' lines='none'>
                    <IonInput
                      label="Password"
                      labelPlacement="stacked"
                      type="password"
                      fill='solid'
                      onIonInput={(e: any) => setPassword(e.target.value)}
                    ></IonInput>
                  </IonItem>
                  <IonItem className='item' lines='none'>
                    <IonInput
                      label="Confirm password"
                      labelPlacement="stacked"
                      type="password"
                      fill='solid'
                      onIonInput={(e: any) => setConfirmPassword(e.target.value)}
                    ></IonInput>
                  </IonItem>
                  <IonRow>
                    <IonCol className='button-column'>
                      <IonButton expand="block" shape="round" fill="solid" type="submit">Signup</IonButton>
                      <Link to="/login">
                        <IonButton expand="block" shape="round" fill="clear">Login</IonButton>
                      </Link>
                    </IonCol>
                  </IonRow>
                </IonList>
              </form>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignupScreen;