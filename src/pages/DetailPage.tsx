import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSlide,
  IonSlides,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useParams } from "react-router";
import { CustomRedux } from "../types/CustomRedux";

type Props = {} & CustomRedux;

export default function DetailPage(props: Props) {
  const { id } = useParams<{ id: string }>();
  const item = props.getItemFromStoreByIndex(Number(id));

  const pageContent = () => {
    switch (item.type) {
      case "cpu": {
        return (
          <IonList>
            <IonItem>
              <IonLabel style={{ marginBottom: 12 }}>
                Base Clock: {item.baseClock}
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel style={{ marginBottom: 12 }}>
                Boost Clock: {item.boostClock}
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel style={{ marginBottom: 12 }}>
                Cores: {item.cores}
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel style={{ marginBottom: 12 }}>
                Thread: {item.thread}
              </IonLabel>
            </IonItem>
          </IonList>
        );
      }
      case "ram": {
        return (
          <IonList>
            <IonItem>
              <IonLabel style={{ marginBottom: 12 }}>
                Speed: {item.speed}
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel style={{ marginBottom: 12 }}>
                Size: {item.size}
              </IonLabel>
            </IonItem>
          </IonList>
        );
      }
      case "motherboard": {
        return (
          <IonList>
            <IonItem>
              <IonLabel style={{ marginBottom: 12 }}>
                Chipset: {item.chipset}
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel style={{ marginBottom: 12 }}>
                For Processor: {item.forProcessor}
              </IonLabel>
            </IonItem>
          </IonList>
        );
      }
      case "gpu": {
        return <p>No info for this type of product</p>;
      }
      default: {
        return <></>;
      }
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Detail</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Detail</IonTitle>

            <IonButtons slot="end">
              <IonBackButton />
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div
          style={{
            display: "flex",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
            flexDirection: "column",
          }}
        >
          <IonSlides pager={true} style={{ width: "100%" }}>
            <IonSlide>
              <IonThumbnail
                style={{ width: "100%", height: "auto", marginBottom: 20 }}
              >
                <img src={item.photoURL} alt="Loading" />
              </IonThumbnail>
            </IonSlide>
            <IonSlide>
              <IonThumbnail
                style={{ width: "100%", height: "auto", marginBottom: 20 }}
              >
                <img
                  src="https://img.okezone.com/content/2012/03/07/408/588674/YCd7IjHiG2.jpg"
                  alt="Loading"
                />
              </IonThumbnail>
            </IonSlide>
          </IonSlides>

          <IonLabel style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
            {item.brand} {item.model}
          </IonLabel>
          <IonLabel style={{ fontSize: 16, marginBottom: 8 }}>
            Rp. {item.price}
          </IonLabel>
          <IonLabel style={{ fontSize: 16, marginBottom: 8 }}>
            Stock: {item.stock}
          </IonLabel>

          <div
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "grey",
              marginTop: 10,
              marginBottom: 12,
            }}
          />

          <IonLabel style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
            More Info
          </IonLabel>
          {pageContent()}
        </div>
      </IonContent>
    </IonPage>
  );
}
