import Menu from "./components/Menu";
import Page from "./pages/Page";
import React, { useState } from "react";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { items } from "./fixtures/item";
import { Item, ItemType } from "./types/Item";
import AddNewPage from "./pages/AddNewPage";
import EditPage from "./pages/EditPage";
import DetailPage from "./pages/DetailPage";

const App: React.FC = () => {
  const [store, setStore] = useState(items);

  const getItemFromStore = (type: ItemType) => {
    return store.filter((value) => value.type === type);
  };

  const getItemFromStoreByIndex = (id: number) => {
    return store[id];
  };

  const getAllItemFromStore = () => {
    return store;
  };

  const addNewItemToStore = (newItem: Item) => {
    let newStore = store;
    newStore.push(newItem);
    setStore(newStore);
  };

  const deleteItemFromStore = (itemModel: string) => {
    let newStore = store.filter((item) => item.model !== itemModel);
    setStore(newStore);
  };

  const editItemToStore = (id: number, newItem: Item) => {
    let newStore = store.map((item, i) => {
      if (i === id) {
        return newItem;
      } else {
        return item;
      }
    });
    console.log("Store baru: ", newStore);
    setStore(newStore);
  };

  const dispatcherProps = {
    getItemFromStore,
    getAllItemFromStore,
    addNewItemToStore,
    deleteItemFromStore,
    getItemFromStoreByIndex,
    editItemToStore,
  };

  return (
    <IonApp title="Toko Mario">
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route
              path="/page/:name"
              component={() => Page(dispatcherProps)}
              exact
            />
            <Route
              path="/addNew"
              component={() => AddNewPage(dispatcherProps)}
              exact
            />
            <Route
              path="/edit/:id"
              component={() => EditPage(dispatcherProps)}
              exact
            />
            <Route
              path="/detail/:id"
              component={() => DetailPage(dispatcherProps)}
              exact
            />
            <Redirect from="/page" to="/page/Home" exact />
            <Redirect from="/" to="/page/Home" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
