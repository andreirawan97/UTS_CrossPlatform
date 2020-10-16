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
import "./HomeContent.css";

type Props = {} & CustomRedux;

export default function HomeContent(props: Props) {
  let { getAllItemFromStore, deleteItemFromStore } = props;

  const [homeMode, setHomeMode] = useState<"grid" | "list">("list");

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
        {homeMode === "list" ? (
          <IonButtons
            style={{ marginRight: 8 }}
            onClick={() => setHomeMode("grid")}
          >
            <IonIcon
              ios={listSharp}
              md={listSharp}
              size="large"
              style={{ color: "#498aff" }}
            />
          </IonButtons>
        ) : (
          <IonButtons
            style={{ marginRight: 8 }}
            onClick={() => setHomeMode("list")}
          >
            <IonIcon
              ios={gridSharp}
              md={gridSharp}
              size="large"
              style={{ color: "#498aff" }}
            />
          </IonButtons>
        )}
      </div>

      {homeMode === "grid" ? (
        <div
          style={{
            flex: 1,
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          {items.map((item, i) => {
            return item.stock > 0 ? (
              <Link
                key={i}
                to={`/detail/${i}`}
                style={{
                  width: "42%",
                  height: 250,
                  margin: 12,
                  marginBottom: 20,
                  color: "black",
                }}
              >
                <div>
                  <IonThumbnail style={{ width: "100%", height: 150 }}>
                    <img src={item.photoURL} alt="Loading" />
                  </IonThumbnail>
                  <IonLabel style={{ marginBottom: 10, fontWeight: 700 }}>
                    {item.brand} {item.model}
                  </IonLabel>
                  <br />
                  <IonLabel style={{ marginBottom: 10 }}>
                    Rp. {item.price}
                  </IonLabel>
                  <br />
                  <IonLabel style={{ marginBottom: 10 }}>
                    Stock: {item.stock}
                  </IonLabel>
                </div>
              </Link>
            ) : null;
          })}
        </div>
      ) : (
        <IonList>
          {items.map((item, i) => {
            return item.stock > 0 ? (
              <IonItemSliding key={i}>
                <IonItem routerLink={`/detail/${i}`}>
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
                  <IonItemOption routerLink={`/detail/${i}`}>
                    Edit
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ) : null;
          })}
        </IonList>
      )}
    </div>
  );
}
