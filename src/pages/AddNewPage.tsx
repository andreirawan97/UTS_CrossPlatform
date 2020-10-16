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
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CustomRedux } from "../types/CustomRedux";
import { ItemType } from "../types/Item";

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

export default function AddNewPage(props: Props) {
  const { addNewItemToStore } = props;
  const history = useHistory();

  const [isAlertVisible, setAlertVisibility] = useState(false);
  const [itemType, setItemType] = useState<ItemType>("cpu");
  const [cpuState, setCPUState] = useState(emptyCPUState);
  const [ramState, setRAMState] = useState(emptyRAMState);
  const [gpuState, setGPUState] = useState(emptyGPUState);
  const [motherboardState, setMotherboardState] = useState(
    emptyMotherboardState
  );

  const addNewItem = (type: ItemType) => {
    if (type === "cpu") {
      addNewItemToStore({
        type,
        ...cpuState,
      });
    } else if (type === "ram") {
      addNewItemToStore({
        type,
        ...ramState,
      });
    } else if (type === "motherboard") {
      addNewItemToStore({
        type,
        ...motherboardState,
      });
    } else if (type === "gpu") {
      addNewItemToStore({
        type,
        ...gpuState,
      });
    }
    setAlertVisibility(true);
  };

  const onDidDismissAlert = () => {
    setCPUState(emptyCPUState);
    setRAMState(emptyRAMState);
    setAlertVisibility(false);
    history.goBack();
  };

  const pageContent = () => {
    switch (itemType) {
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
              onClick={() => addNewItem("cpu")}
            >
              Add New
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
              onClick={() => addNewItem("ram")}
            >
              Add New
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
              onClick={() => addNewItem("motherboard")}
            >
              Add New
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
              onClick={() => addNewItem("gpu")}
            >
              Add New
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
          <IonTitle>Add New</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Add New</IonTitle>

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
          <IonList>
            <IonLabel>Item Type</IonLabel>
            <IonSelect
              value={itemType}
              placeholder="Select One"
              onIonChange={(e) => setItemType(e.detail.value)}
            >
              <IonSelectOption value="cpu">CPU</IonSelectOption>
              <IonSelectOption value="ram">RAM</IonSelectOption>
              <IonSelectOption value="motherboard">Motherboard</IonSelectOption>
              <IonSelectOption value="gpu">GPU</IonSelectOption>
            </IonSelect>
          </IonList>
          <div
            style={{
              height: 2,
              width: "100%",
              backgroundColor: "grey",
            }}
          />
          {pageContent()}
        </div>

        <IonAlert
          isOpen={isAlertVisible}
          onDidDismiss={onDidDismissAlert}
          header={"Success!"}
          message={
            "The item successfully added! Note: Belum ada pengecekan empty field."
          }
          buttons={["OK"]}
        />
      </IonContent>
    </IonPage>
  );
}
