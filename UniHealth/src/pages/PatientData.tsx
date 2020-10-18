import React, { Component } from 'react'
import {IonPage, IonContent, IonTitle, IonItem, IonLabel, IonList, IonListHeader, IonButton} from '@ionic/react'
import "./PatientData.css"


class PatientData extends Component {
    
    state = {
        username: "",
        password: ""
    }

    handlePatientClick() {
        
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
                                <IonButton onClick = {this.handlePatientClick}>Patient 1</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton onClick = {this.handlePatientClick}>Patient 2</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton onClick = {this.handlePatientClick}>Patient 3</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton onClick = {this.handlePatientClick}>Patient 4</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton onClick = {this.handlePatientClick}>Patient 5</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton onClick = {this.handlePatientClick}>Patient 6</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton onClick = {this.handlePatientClick}>Patient 7</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton onClick = {this.handlePatientClick}>Patient 8</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton onClick = {this.handlePatientClick}>Patient 9</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonButton onClick = {this.handlePatientClick}>Patient 10</IonButton>
                            </IonItem>
                        </IonList>
                    </IonItem>
                </IonContent>
            </IonPage>
        )
   }
}

export default PatientData;