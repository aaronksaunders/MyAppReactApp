import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonCard,
} from "@ionic/react";
import { camera, close } from "ionicons/icons";
import React from "react";

import { CameraResultType } from "@capacitor/core";
import { useCamera, availableFeatures } from "@ionic/react-hooks/camera";

const Home: React.FC = () => {
  // camera hook!!
  const { photo, getPhoto } = useCamera();

  const takePicture = () => {
    if (availableFeatures.getPhoto) {
      getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.DataUrl
      });
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>

          <IonButtons slot="end">
            <IonButton onClick={() => takePicture()}>
              <IonIcon icon={camera}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {photo ? (
          <div>
            <pre>{JSON.stringify(photo, null, 2)}</pre>
            <IonCard>
              <img src={photo.dataUrl || photo.webPath} />
            </IonCard>
          </div>
        ) : null}
      </IonContent>
    </IonPage>
  );
};

export default Home;
