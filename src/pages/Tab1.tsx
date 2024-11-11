import { IonContent, IonFab, IonFabButton, IonFabList, IonIcon, IonPage } from '@ionic/react';
import officeBuilding from '../assets/office-building.svg'
import './Tab1.css';
import Map, {Marker} from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import React from 'react';
import { checkmark, chevronUp, colorPalette, globe } from 'ionicons/icons';

const Tab1: React.FC = () => {
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
              <IonIcon icon={checkmark}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={colorPalette}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={globe}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
