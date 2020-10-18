import { IonButton, IonContent,IonPage, IonTitle} from '@ionic/react';
import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
  
  handleDoctorClick() {
    window.location.href = "/healthcare/login"
  }

  handlePatientClick() {
    window.location.href = "/patient/login"
  }

  render() {
    return (
      <IonPage>
        <IonContent fullscreen className = "content">
        <IonTitle class="title">UniHealth</IonTitle>
        <IonContent className='patientButton' onClick = {this.handlePatientClick}>
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