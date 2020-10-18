import React, { Component } from 'react'
import {IonPage, IonContent, IonTitle, IonItem, IonLabel, IonList, IonListHeader, IonButton} from '@ionic/react'
import "./DoctorHome.css"


class DoctorHome extends Component {
    
    handleClick = () => {
        window.location.href = "/healthcare/patients/patientinformation";
    }


    state = {
        username: "",
        password: ""
    }
    
    render() {
        return (
            <IonPage>   
                <IonContent fullscreen className = "content">
                    <IonTitle className="title">UniHealth</IonTitle>
                    <IonItem className = "patientList">
                        <IonList className = "list">
                            <IonListHeader>
                                <IonLabel class = "header">
                                    Patient List
                                </IonLabel>
                            </IonListHeader>
                            <IonItem>
                                <IonButton onClick = {this.handleClick}>Patient 1</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton>Patient 2</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton>Patient 3</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton>Patient 4</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton>Patient 5</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton>Patient 6</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton>Patient 7</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton>Patient 8</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton>Patient 9</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton>Patient 10</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton>Patient 11</IonButton>
                            </IonItem>
                        </IonList>
                    </IonItem>
                </IonContent>
            </IonPage>
        )
   }
}

export default DoctorHome;