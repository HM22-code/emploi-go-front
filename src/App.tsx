import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  personCircleOutline,
  albumsOutline,
  compassOutline,
  menuOutline,
  newspaperOutline
} from 'ionicons/icons';

import MapScreen from './pages/MapScreen';
import InventoryScreen from './pages/InventoryScreen';
import QuestScreen from './pages/QuestScreen';
import ProfileScreen from './pages/ProfileScreen';
import MenuScreen from './pages/MenuScreen';
import LoginScreen from './pages/LoginScreen';
import WelcomeScreen from './pages/WelcomeScreen';
import SignupScreen from './pages/SignupScreen';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <MapScreen />
          </Route>
          <Route exact path="/tab2">
            <InventoryScreen />
          </Route>
          <Route path="/tab3">
            <QuestScreen />
          </Route>
          <Route path="/tab4">
            <ProfileScreen />
          </Route>
          <Route path="/tab5">
            <MenuScreen />
          </Route>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/signup">
            <SignupScreen />
          </Route>
          <Route path="/welcome">
            <WelcomeScreen />
          </Route>
          <Route exact path="/">
            <Redirect to="/welcome" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={compassOutline} />
            <IonLabel>Carte</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={albumsOutline} />
            <IonLabel>Inventaire</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={newspaperOutline} />
            <IonLabel>Quêtes</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon aria-hidden="true" icon={personCircleOutline} />
            <IonLabel>Profil</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab5" href="/tab5">
            <IonIcon aria-hidden="true" icon={menuOutline} />
            <IonLabel>Menu</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
