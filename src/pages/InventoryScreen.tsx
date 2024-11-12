import { IonContent, IonPage, IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonCol, IonGrid, IonRow, IonCardContent, IonCard } from '@ionic/react';
import tshirtCrew from '../assets/tshirt-crew.svg'
import wrench from '../assets/wrench.svg'
import './InventoryScreen.css';

/* Inventory Screen */
const InventoryScreen: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>

        <IonSegment value="first">
          <IonSegmentButton value="first" contentId="first">
            <IonLabel>Tenues</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="second" contentId="second">
            <IonLabel>Accessoires</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        <IonSegmentView>

          <IonSegmentContent id="first">

            <IonGrid fixed={true}>
              <IonRow>
                <IonCol>
                  <IonCard>
                    <IonCardContent>
                      <img src={tshirtCrew} alt="Silhouette of a tshirt" height={50} width={50}/>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol>
                  <IonCard>
                    <IonCardContent>
                      <img src={tshirtCrew} alt="Silhouette of a tshirt" height={50} width={50}/>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol>
                  <IonCard>
                    <IonCardContent>
                      <img src={tshirtCrew} alt="Silhouette of a tshirt" height={50} width={50}/>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonCard>
                    <IonCardContent>
                      <img src={tshirtCrew} alt="Silhouette of a tshirt" height={50} width={50}/>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol>
                  <IonCard>
                    <IonCardContent>
                      <img src={tshirtCrew} alt="Silhouette of a tshirt" height={50} width={50}/>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol>
                  <IonCard>
                    <IonCardContent>
                      <img src={tshirtCrew} alt="Silhouette of a tshirt" height={50} width={50}/>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>

          </IonSegmentContent>

          <IonSegmentContent id="second">

            <IonGrid fixed={true}>
              <IonRow>
                <IonCol>
                  <IonCard>
                    <IonCardContent>
                      <img src={wrench} alt="Silhouette of a wrench" height={50} width={50}/>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol>
                  <IonCard>
                    <IonCardContent>
                      <img src={wrench} alt="Silhouette of a wrench" height={50} width={50}/>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol>
                  <IonCard>
                    <IonCardContent>
                      <img src={wrench} alt="Silhouette of a wrench" height={50} width={50}/>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonCard>
                    <IonCardContent>
                      <img src={wrench} alt="Silhouette of a wrench" height={50} width={50}/>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol>
                  <IonCard>
                    <IonCardContent>
                      <img src={wrench} alt="Silhouette of a wrench" height={50} width={50}/>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol>
                  <IonCard>
                    <IonCardContent>
                      <img src={wrench} alt="Silhouette of a wrench" height={50} width={50}/>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>

          </IonSegmentContent>

        </IonSegmentView>

      </IonContent>
    </IonPage>
  );
};

export default InventoryScreen;
