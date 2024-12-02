import { IonContent, IonPage, IonBadge, IonItem, IonLabel } from '@ionic/react';
import './QuestScreen.css';
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

/* Quest Screen */
const QuestScreen: React.FC = () => {

  const [quests, setQuests] = useState<Quest[]>([]);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get('https://hm22-code.github.io/emploi-go-back/quests.json')
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
          <IonLabel>Quotidiennes</IonLabel>
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

        <QuestCard
          label={'Sint ad incididunt eu tempor cillum officia ipsum tempor consequat irure esse non eiusmod.'}
          progressValue={0}
          progressGoal={2}
          disabled={true}
        />

      </IonContent>
    </IonPage>
  );
};

export default QuestScreen;
