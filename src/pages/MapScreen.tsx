import { IonContent, IonFab, IonFabButton, IonFabList, IonIcon, IonPage } from '@ionic/react';
import officeBuilding from '../assets/office-building.svg'
import './MapScreen.css';
import Map, {Marker} from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import React from 'react';
import { chevronUp, giftOutline, calendarOutline } from 'ionicons/icons';

/* Map Screen */
const MapScreen: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>

        <Map
          initialViewState={{
            longitude: 5.04650,
            latitude: 47.31781,
            zoom: 18,
            pitch: 50
          }}
          minZoom={18}
          maxZoom={18}
          minPitch={50}
          maxPitch={50}
          maplibreLogo={false}
          mapStyle={import.meta.env.VITE_MAPSTYLE_URL}
        >

          <Marker longitude={5.04650} latitude={47.31781}>
            <img src={officeBuilding} alt="Office building icon" height={50} width={50}/>
          </Marker>

        </Map>

        <IonFab slot="fixed" vertical="bottom" horizontal="start">
          <IonFabButton>
            <IonIcon icon={chevronUp}></IonIcon>
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton>
              <IonIcon icon={calendarOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={giftOutline}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default MapScreen;