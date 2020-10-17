import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
      <IonTitle className="title">UniHealth</IonTitle>
      <IonContent className='patientButton'>
        {/*-- Default --*/}
        <IonButton>Patient</IonButton>
      </IonContent>
      <IonContent className='doctorButton'>
        {/*-- Default --*/}
        <IonButton>Healthcare Professional</IonButton>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
