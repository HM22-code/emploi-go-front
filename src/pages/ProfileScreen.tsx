import { IonContent, IonPage, IonAvatar, IonCard, IonCardContent, IonItem, IonLabel } from '@ionic/react';
import accountCircle from '../assets/account-circle.svg'
import './ProfileScreen.css';
import FilterCard from '../components/FilterCard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  filters: []
}

/* Profile Screen */
const ProfileScreen: React.FC = () => {

  const [user, setUser] = useState<User>(
    {
      id: 0,
      name: "",
      username: "",
      email: "",
      filters: []
    }
  );

  useEffect(() => {
    axios.get('https://hm22-code.github.io/emploi-go-back/user.json')
      .then(response => {
        setUser(response.data);
      })
    .catch(error => {
      console.log(error);
    });
  }, []);

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
                {user.username}
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>

        <FilterCard
          data={
            user.filters
          }
        />

      </IonContent>
    </IonPage>
  );
};

export default ProfileScreen;