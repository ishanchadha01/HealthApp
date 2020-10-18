import React, { Component } from 'react'
import {IonPage, IonContent, IonTitle, IonInput, IonItem, IonLabel, IonButton} from '@ionic/react'
import "./DoctorLogin.css"

var DoctorID = "";

class DoctorLogin extends Component {
    
    handleChange = (e) => {
        [e.target.name] = e.target.value;
        console.log(DoctorID);
    }


    handleSubmit() {
        window.location.href = "/healthcare/home"
    }

    render() {
        return (
            <IonPage>   
                <IonContent fullscreen className = "content">
                    <IonTitle className="title">UniHealth</IonTitle>
                    <IonItem className = "username">
                        <IonLabel color="primary">
                            Doctor ID
                        </IonLabel>
                        <IonInput type = "text" name = "DoctorID" value = {DoctorID} onInput = {this.handleChange}>
                        </IonInput>
                        <IonButton className = "submit" onClick = {this.handleSubmit}>
                        Submit
                    </IonButton>
                    </IonItem>  
                </IonContent>
            </IonPage>
        )
   }
}

export default DoctorLogin;
