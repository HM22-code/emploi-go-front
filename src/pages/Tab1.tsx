import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import officeBuilding from '../assets/office-building.svg'
import './Tab1.css';
import Map, {Marker} from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import React from 'react';

const Tab1: React.FC = () => {

  const [viewState, setViewState] = React.useState({
    longitude: 5.04631,
    latitude: 47.31777,
    zoom: 18,
    pitch: 50
  });

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
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
