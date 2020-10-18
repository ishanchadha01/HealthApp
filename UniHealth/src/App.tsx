import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import DoctorLogin from './pages/DoctorLogin';

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

/* Theme variables */
import './theme/variables.css';
import PatientLogin from './pages/PatientLogin';
import PatientData from './pages/PatientData';
import UserData from './pages/UserData';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" component={Home} exact={true} />
        <Route path="/healthcare/login" component={DoctorLogin}  />
        <Route path="/patient/login" component={PatientLogin} />
        <Route path="/patient/data" component={PatientData} />
        <Route path="/patient/userdata" component={UserData} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;