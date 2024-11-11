import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonCard, IonCardContent, IonButton } from '@ionic/react';
import accountCircle from '../assets/account-circle.svg'
import './Tab4.css';

const Tab4: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Profil</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <IonCardContent>
                        <IonAvatar>
                            <img src={accountCircle} alt="Silhouette of avatar"/>
                        </IonAvatar>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Tab4;