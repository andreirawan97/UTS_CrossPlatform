import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import React from "react";
import { useLocation } from "react-router-dom";
import {
  homeOutline,
  homeSharp,
  personOutline,
  personSharp,
  helpCircleOutline,
  helpCircleSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/page/Home",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: "Admin",
    url: "/page/Admin",
    iosIcon: personOutline,
    mdIcon: personSharp,
  },
  {
    title: "About App",
    url: "/page/About",
    iosIcon: helpCircleOutline,
    mdIcon: helpCircleSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Toko Mario</IonListHeader>
          <IonNote>mariopunyatoko@mail.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
