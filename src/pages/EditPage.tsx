import {
  IonAlert,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { CustomRedux } from "../types/CustomRedux";
import { Item, ItemType } from "../types/Item";

type Props = {} & CustomRedux;

const emptyCPUState = {
  photoURL: "",
  brand: "",
  model: "",
  baseClock: 0,
  boostClock: 0,
  cores: 0,
  thread: 0,
  price: 0,
  stock: 1,
};

const emptyRAMState = {
  photoURL: "",
  brand: "",
  model: "",
  speed: 0,
  size: 0,
  price: 0,
  stock: 1,
};

const emptyMotherboardState = {
  photoURL: "",
  brand: "",
  model: "",
  chipset: "",
  forProcessor: "",
  price: 0,
  stock: 1,
};

const emptyGPUState = {
  photoURL: "",
  brand: "",
  model: "",
  price: 0,
  stock: 1,
};

export default function EditPage(props: Props) {
  const { getItemFromStoreByIndex, editItemToStore } = props;
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const currentItem = useMemo(() => getItemFromStoreByIndex(Number(id)), [
    getItemFromStoreByIndex,
    id,
  ]);

  const [cpuState, setCPUState] = useState(
    currentItem.type === "cpu" ? currentItem : emptyCPUState
  );
  const [ramState, setRAMState] = useState(
    currentItem.type === "ram" ? currentItem : emptyRAMState
  );
  const [gpuState, setGPUState] = useState(
    currentItem.type === "gpu" ? currentItem : emptyGPUState
  );
  const [motherboardState, setMotherboardState] = useState(
    currentItem.type === "motherboard" ? currentItem : emptyMotherboardState
  );

  const editItem = (type: ItemType) => {
    if (type === "cpu") {
      editItemToStore(Number(id), {
        type,
        ...cpuState,
      });
    } else if (type === "ram") {
      editItemToStore(Number(id), {
        type,
        ...ramState,
      });
    } else if (type === "motherboard") {
      editItemToStore(Number(id), {
        type,
        ...motherboardState,
      });
    } else if (type === "gpu") {
      editItemToStore(Number(id), {
        type,
        ...gpuState,
      });
    }
    history.goBack();
  };

  const pageContent = () => {
    switch (currentItem.type) {
      case "cpu": {
        return (
          <IonList>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="fixed">Photo URL</IonLabel>
              <IonInput
                value={cpuState.photoURL}
                onIonChange={(e) =>
                  setCPUState({
                    ...cpuState,
                    photoURL: String(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="fixed">Brand</IonLabel>
              <IonInput
                value={cpuState.brand}
                onIonChange={(e) =>
                  setCPUState({
                    ...cpuState,
                    brand: String(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="fixed">Model</IonLabel>
              <IonInput
                value={cpuState.model}
                onIonChange={(e) =>
                  setCPUState({
                    ...cpuState,
                    model: String(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="stacked">Base Clock</IonLabel>
              <IonInput
                value={cpuState.baseClock}
                onIonChange={(e) =>
                  setCPUState({
                    ...cpuState,
                    baseClock: Number(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="stacked">Boost Clock</IonLabel>
              <IonInput
                value={cpuState.boostClock}
                onIonChange={(e) =>
                  setCPUState({
                    ...cpuState,
                    boostClock: Number(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="stacked">Cores</IonLabel>
              <IonInput
                value={cpuState.cores}
                onIonChange={(e) =>
                  setCPUState({
                    ...cpuState,
                    cores: Number(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="stacked">Thread</IonLabel>
              <IonInput
                value={cpuState.thread}
                onIonChange={(e) =>
                  setCPUState({
                    ...cpuState,
                    thread: Number(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="stacked">Price</IonLabel>
              <IonInput
                value={cpuState.price}
                onIonChange={(e) =>
                  setCPUState({
                    ...cpuState,
                    price: Number(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="stacked">Stock</IonLabel>
              <IonInput
                value={cpuState.stock}
                onIonChange={(e) =>
                  setCPUState({
                    ...cpuState,
                    stock: Number(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>

            <IonButton
              expand="block"
              style={{ marginTop: 32 }}
              onClick={() => editItem("cpu")}
            >
              Save
            </IonButton>
          </IonList>
        );
      }
      case "ram": {
        return (
          <IonList>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="fixed">Photo URL</IonLabel>
              <IonInput
                value={ramState.photoURL}
                onIonChange={(e) =>
                  setRAMState({
                    ...ramState,
                    photoURL: String(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="fixed">Brand</IonLabel>
              <IonInput
                value={ramState.brand}
                onIonChange={(e) =>
                  setRAMState({
                    ...ramState,
                    brand: String(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="fixed">Model</IonLabel>
              <IonInput
                value={ramState.model}
                onIonChange={(e) =>
                  setRAMState({
                    ...ramState,
                    model: String(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="stacked">Speed</IonLabel>
              <IonInput
                value={ramState.speed}
                onIonChange={(e) =>
                  setRAMState({
                    ...ramState,
                    speed: Number(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="stacked">Size</IonLabel>
              <IonInput
                value={ramState.size}
                onIonChange={(e) =>
                  setRAMState({
                    ...ramState,
                    size: Number(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="stacked">Price</IonLabel>
              <IonInput
                value={ramState.price}
                onIonChange={(e) =>
                  setRAMState({
                    ...ramState,
                    price: Number(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="stacked">Stock</IonLabel>
              <IonInput
                value={ramState.stock}
                onIonChange={(e) =>
                  setRAMState({
                    ...ramState,
                    stock: Number(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>

            <IonButton
              expand="block"
              style={{ marginTop: 32 }}
              onClick={() => editItem("ram")}
            >
              Save
            </IonButton>
          </IonList>
        );
      }
      case "motherboard": {
        return (
          <IonList>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="fixed">Photo URL</IonLabel>
              <IonInput
                value={motherboardState.photoURL}
                onIonChange={(e) =>
                  setMotherboardState({
                    ...motherboardState,
                    photoURL: String(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="fixed">Brand</IonLabel>
              <IonInput
                value={motherboardState.brand}
                onIonChange={(e) =>
                  setMotherboardState({
                    ...motherboardState,
                    brand: String(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="fixed">Model</IonLabel>
              <IonInput
                value={motherboardState.model}
                onIonChange={(e) =>
                  setMotherboardState({
                    ...motherboardState,
                    model: String(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="stacked">Chipset</IonLabel>
              <IonInput
                value={motherboardState.chipset}
                onIonChange={(e) =>
                  setMotherboardState({
                    ...motherboardState,
                    chipset: String(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="stacked">For Processor</IonLabel>
              <IonInput
                value={motherboardState.forProcessor}
                onIonChange={(e) =>
                  setMotherboardState({
                    ...motherboardState,
                    forProcessor: String(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="stacked">Price</IonLabel>
              <IonInput
                value={motherboardState.price}
                onIonChange={(e) =>
                  setMotherboardState({
                    ...motherboardState,
                    price: Number(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="stacked">Stock</IonLabel>
              <IonInput
                value={motherboardState.stock}
                onIonChange={(e) =>
                  setMotherboardState({
                    ...motherboardState,
                    stock: Number(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>

            <IonButton
              expand="block"
              style={{ marginTop: 32 }}
              onClick={() => editItem("motherboard")}
            >
              Save
            </IonButton>
          </IonList>
        );
      }
      case "gpu": {
        return (
          <IonList>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="fixed">Photo URL</IonLabel>
              <IonInput
                value={gpuState.photoURL}
                onIonChange={(e) =>
                  setGPUState({
                    ...gpuState,
                    photoURL: String(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="fixed">Brand</IonLabel>
              <IonInput
                value={gpuState.brand}
                onIonChange={(e) =>
                  setGPUState({
                    ...gpuState,
                    brand: String(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="fixed">Model</IonLabel>
              <IonInput
                value={gpuState.model}
                onIonChange={(e) =>
                  setGPUState({
                    ...gpuState,
                    model: String(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="stacked">Price</IonLabel>
              <IonInput
                value={gpuState.price}
                onIonChange={(e) =>
                  setGPUState({
                    ...gpuState,
                    price: Number(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>
            <IonItem style={{ marginBottom: 12 }}>
              <IonLabel position="stacked">Stock</IonLabel>
              <IonInput
                value={gpuState.stock}
                onIonChange={(e) =>
                  setGPUState({
                    ...gpuState,
                    stock: Number(e.detail.value),
                  })
                }
              ></IonInput>
            </IonItem>

            <IonButton
              expand="block"
              style={{ marginTop: 32 }}
              onClick={() => editItem("gpu")}
            >
              Save
            </IonButton>
          </IonList>
        );
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
          <IonTitle>Edit Item</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Edit Item</IonTitle>

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
          <p style={{ color: "#aaaaaa" }}>
            Note: Ada bug dimana kalau pencet save akan terjadi sesuatu tetapi
            Statenya sudah benar (lihat di console log). Anehnya hal ini tidak
            terjadi di Add New Page
          </p>
          {pageContent()}
        </div>
      </IonContent>
    </IonPage>
  );
}
