import React, { Component } from 'react'
import {IonPage, IonContent, IonTitle, IonInput, IonItem, IonLabel} from '@ionic/react'
import "./PatientLogin.css"


class PatientLogin extends Component {
    
    state = {
        username: "",
        password: ""
    }
    
    render() {
        return (
            <IonPage>   
                <IonContent fullscreen className = "content">
                    <IonTitle className="title">UniHealth</IonTitle>
                    <IonItem className = "username">
                        <IonLabel color="primary">
                            Username
                        </IonLabel>
                        <IonInput>
                        </IonInput>
                    </IonItem>
                    <IonItem className = "password">
                        <IonLabel color="primary">
                            Password
                        </IonLabel>
                        <IonInput type="password" color = "primary">
                        </IonInput>
                    </IonItem>
                </IonContent>
            </IonPage>
        )
   }
}

export default PatientLogin;