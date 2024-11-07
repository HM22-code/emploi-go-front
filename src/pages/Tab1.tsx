import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Map, {Marker} from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Map
          initialViewState={{
            longitude: 5.04631,
            latitude: 47.31777,
            zoom: 18
          }}
          maplibreLogo={false}
          mapStyle={'https://api.maptiler.com/maps/a0db1c96-3ec8-4109-b151-8bf92b1fb916/style.json?key='+import.meta.env.VITE_MAPTILER_KEY}
        >
          <Marker longitude={5.04631} latitude={47.31777}>
          </Marker>
        </Map>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
