import React, { Component } from 'react'
import {IonPage, IonContent, IonTitle, IonItem, IonLabel, IonInput, IonButton, IonImg, IonThumbnail} from '@ionic/react'
import "./Vitals.css"
import Patient from './Patient'


class Vitals extends Component {
    
    state = {
        username: "",
        password: ""
    }
    patient = new Patient()
    userID1: string = "";
    setText() {
        let patient = new Patient();
        {/*e.target.value for setText if needed*/}
        patient.userID = this.userID1;
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
                            Patient Vitals
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel color="black">
                            Blood Pressure      
                        </IonLabel>
                        <IonLabel></IonLabel> {/*You can delete either this or the input*/}
                        <IonInput placeholder="120 / 80" onIonInput={(e: any) => this.setText()} clearInput></IonInput>
                    </IonItem> 
                    <IonItem>
                        <IonLabel color="black">
                            Pulse
                        </IonLabel>
                        <IonInput placeholder="75 BPM" onIonChange={e => this.setText()} clearInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel color="black">
                            Temperature
                        </IonLabel>
                        <IonInput placeholder="98.6 Degrees" onIonChange={e => this.setText()} clearInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel color="black">
                            EKG
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonImg class = "img" src={"https://thumbs.gfycat.com/ChiefHeftyBasil-small.gif"} />
                    </IonItem>
                </IonContent>
            </IonPage>
        )
   }
}

export default Vitals;