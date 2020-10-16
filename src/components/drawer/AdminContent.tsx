import {
  IonButtons,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonThumbnail,
} from "@ionic/react";
import { listSharp, gridSharp, addOutline } from "ionicons/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CustomRedux } from "../../types/CustomRedux";
import "./AdminContent.css";

type Props = {} & CustomRedux;

export default function AdminContent(props: Props) {
  let { getAllItemFromStore, deleteItemFromStore } = props;

  let items = getAllItemFromStore();

  return (
    <div style={{ flex: 1 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <IonButtons>
          <Link to="/addNew">
            <IonIcon ios={addOutline} md={addOutline} size="large" />
          </Link>
        </IonButtons>
      </div>

      <IonList>
        {items.map((item, i) => {
          return item.stock > 0 ? (
            <IonItemSliding key={i}>
              <IonItem routerLink={`/edit/${i}`}>
                <IonThumbnail style={{ marginRight: 20 }}>
                  <img src={item.photoURL} alt="Loading" />
                </IonThumbnail>

                <div style={{ flexDirection: "column" }}>
                  <IonLabel style={{ marginBottom: 10, marginTop: 10 }}>
                    {item.brand} {item.model}
                  </IonLabel>
                  <IonLabel style={{ marginBottom: 10 }}>
                    Rp. {item.price}
                  </IonLabel>
                  <IonLabel style={{ marginBottom: 10 }}>
                    Stock: {item.stock}
                  </IonLabel>
                </div>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption
                  onClick={() => {
                    deleteItemFromStore(item.model);
                  }}
                  style={{ backgroundColor: "#ff6961" }}
                >
                  Delete
                </IonItemOption>
              </IonItemOptions>
              <IonItemOptions side="start">
                <IonItemOption routerLink={`/edit/${i}`}>Edit</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ) : null;
        })}
      </IonList>
    </div>
  );
}
