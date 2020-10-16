import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { addOutline } from "ionicons/icons";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import ExploreContainer from "../components/ExploreContainer";
import { CustomRedux } from "../types/CustomRedux";
import "./Page.css";

type Props = {} & CustomRedux;

const Page: React.FC<Props> = (props) => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} {...props} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
