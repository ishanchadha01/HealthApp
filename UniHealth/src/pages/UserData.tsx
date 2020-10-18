import React, { Component } from 'react'
import {IonPage, IonContent, IonTitle, IonItem, IonLabel, IonInput, IonButton} from '@ionic/react'
import "./UserData.css"
import Patient from './Patient'


class UserData extends Component {
    
    state = {
        username: "",
        password: ""
    }
    patient = new Patient()
    setText() {
        
    }
    saveInformation() {
        
    }
    render() {
        return (
            <IonPage>   
                <IonContent fullscreen className = "content">
                    <IonTitle className="title">UniHealth</IonTitle>
                    <IonItem class = "head">
                        <IonLabel color="black">
                            UniHealth
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel color="black">
                            UserID
                        </IonLabel>
                        <IonInput placeholder="Enter UserID" onIonChange={e => this.setText()} clearInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel color="black">
                            Password
                        </IonLabel>
                        <IonInput placeholder="Enter Password" onIonChange={e => this.setText()} clearInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel color="black">
                            Name
                        </IonLabel>
                        <IonInput placeholder="Patient Name" onIonChange={e => this.setText()} clearInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel color="black">
                            Email
                        </IonLabel>
                        <IonInput placeholder="Enter Email" onIonChange={e => this.setText()} clearInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel color="black">
                            Phone Number
                        </IonLabel>
                        <IonInput placeholder="Phone Number" onIonChange={e => this.setText()} clearInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel color="black">
                            SSN
                        </IonLabel>
                        <IonInput placeholder="Enter SSN" onIonChange={e => this.setText()} clearInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel color="black">
                            (Insurance) Primary Holder
                        </IonLabel>
                        <IonInput placeholder="Primary Holder" onIonChange={e => this.setText()} clearInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel color="black">
                            (Insurance) Provider
                        </IonLabel>
                        <IonInput placeholder="Insurance Provider" onIonChange={e => this.setText()} clearInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel color="black">
                            (Insurance) Policy Number
                        </IonLabel>
                        <IonInput placeholder="Enter Policy Number" onIonChange={e => this.setText()} clearInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel color="black">
                            (Insurance) Group Number
                        </IonLabel>
                        <IonInput placeholder="Enter Group Number" onIonChange={e => this.setText()} clearInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel color="black">
                            Appointments Date
                        </IonLabel>
                        <IonInput placeholder="Date" onIonChange={e => this.setText()} clearInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel color="black">
                            Appointment Time
                        </IonLabel>
                        <IonInput placeholder="Time" onIonChange={e => this.setText()} clearInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel color="black">
                            Appointment Information
                        </IonLabel>
                        <IonInput placeholder="Information" onIonChange={e => this.setText()} clearInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonButton color="primary" onClick = {this.saveInformation}>Save</IonButton>
                    </IonItem>
                </IonContent>
            </IonPage>
        )
   }
}

export default UserData;