import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { render } from '@testing-library/react';
import React, {Component} from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import './Home.css';

class Home extends Component {
  
  handleDoctorClick() {
    window.location.href = "/healthcare/login"
  }

  render() {
    return (
      <IonPage>
        <IonContent fullscreen className = "content">
        <IonTitle className="title">UniHealth</IonTitle>
        <IonContent className='patientButton'>
          {/*-- Default --*/}
          <IonButton>Patient</IonButton>
        </IonContent>
        <IonContent className='doctorButton' onClick = {this.handleDoctorClick}>
          {/*-- Default --*/}
          <IonButton>Healthcare Professional</IonButton>
          </IonContent>
        </IonContent>
      </IonPage>
    );
  }
  
};

export default Home;
