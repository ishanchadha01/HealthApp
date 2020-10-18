import { IonButton, IonContent,IonPage, IonTitle} from '@ionic/react';
import React, {Component} from 'react';
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
