import { IonContent, IonPage, IonBadge, IonItem, IonLabel } from '@ionic/react';
import './QuestPage.css';
import QuestCard from '../components/QuestCard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Quest = {
  userId: number,
  id: number,
  title: string,
  progressValue: number,
  progressGoal: number,
  completed: boolean
}

const QuestPage: React.FC = () => {

  const [quests, setQuests] = useState<Quest[]>([]);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get('http://localhost:3000/quest/')
      .then(response => {
        setQuests(response.data);
      })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonItem>
          <IonBadge slot="end">{quests.length}</IonBadge>
          <IonLabel>Quêtes</IonLabel>
        </IonItem>
        {
          quests.map((item, key) =>
            <QuestCard
              key={key}
              label={item.title}
              progressValue={item.progressValue}
              progressGoal={item.progressGoal}
              disabled={item.completed}
            />
          )
        }
      </IonContent>
    </IonPage>
  );
};

export default QuestPage;
