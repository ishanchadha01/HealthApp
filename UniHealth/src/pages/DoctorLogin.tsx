import React, { Component } from 'react'
import {IonPage, IonContent, IonTitle} from '@ionic/react'


class DoctorLogin extends Component {
    render() {
        return (
                  <IonPage>
                    <IonContent fullscreen className = "content">
                    <IonTitle className="title">UniHealth</IonTitle>
                    </IonContent>
                    </IonPage>
        )
   }
}

export default DoctorLogin;
