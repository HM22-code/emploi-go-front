import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';

const Tab4: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Quêtes</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <ExploreContainer name="Tab 4 page" />
            </IonContent>
        </IonPage>
    );
};

export default Tab4;