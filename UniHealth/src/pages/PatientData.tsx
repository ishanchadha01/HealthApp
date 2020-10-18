import React, { Component } from 'react'
import {IonPage, IonContent, IonTitle, IonItem, IonLabel, IonList, IonListHeader, IonButton} from '@ionic/react'
import "./PatientData.css"


class PatientData extends Component {
    
    state = {
        username: "",
        password: ""
    }

    handlePatientClick1() {
        window.location.href = "/healthcare/vitals"
    }
    handlePatientClick2() {
        window.location.href = "/healthcare/vitals"
    }
    handlePatientClick3() {
        window.location.href = "/healthcare/vitals"
    }
    handlePatientClick4() {
        window.location.href = "/healthcare/vitals"
    }
    handlePatientClick5() {
        window.location.href = "/healthcare/vitals"
    }
    handlePatientClick6() {
        window.location.href = "/healthcare/vitals"
    }
    handlePatientClick7() {
        window.location.href = "/healthcare/vitals"
    }
    handlePatientClick8() {
        window.location.href = "/healthcare/vitals"
    }
    handlePatientClick9() {
        window.location.href = "/healthcare/vitals"
    }
    handlePatientClick10() {
        window.location.href = "/healthcare/vitals"
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
                                <IonButton onClick = {this.handlePatientClick1}>Patient 1</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton onClick = {this.handlePatientClick2}>Patient 2</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton onClick = {this.handlePatientClick3}>Patient 3</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton onClick = {this.handlePatientClick4}>Patient 4</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton onClick = {this.handlePatientClick5}>Patient 5</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton onClick = {this.handlePatientClick6}>Patient 6</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton onClick = {this.handlePatientClick7}>Patient 7</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton onClick = {this.handlePatientClick8}>Patient 8</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton onClick = {this.handlePatientClick9}>Patient 9</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton onClick = {this.handlePatientClick10}>Patient 10</IonButton>
                            </IonItem>
                        </IonList>
                    </IonItem>
                </IonContent>
            </IonPage>
        )
   }
}

export default PatientData;