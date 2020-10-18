import React, { Component } from 'react'
import {IonPage, IonContent, IonTitle, IonInput, IonItem, IonLabel, IonButton} from '@ionic/react'
import "./DoctorLogin.css"

var DoctorID = "";

class DoctorLogin extends Component {
    
    render() {
        return (
            <IonPage>   
                <IonContent fullscreen className = "content">
                    <IonTitle className="title">UniHealth</IonTitle>
                    <IonItem className = "username">
                        <IonLabel color="primary">
                            Doctor ID
                        </IonLabel>
                        <IonInput type = "text">
                        </IonInput>
                        <IonButton className = "submit">
                        Submit
                    </IonButton>
                    </IonItem>  
                </IonContent>
            </IonPage>
        )
   }
}

export default DoctorLogin;
