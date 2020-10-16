import React from "react";
import { CustomRedux } from "../types/CustomRedux";
import AboutAppContent from "./drawer/AboutAppContent";
import AdminContent from "./drawer/AdminContent";
import HomeContent from "./drawer/HomeContent";

import "./ExploreContainer.css";

type Props = {
  name: string;
} & CustomRedux;

const ExploreContainer: React.FC<Props> = (props) => {
  const { name } = props;

  return (
    <div className="container">
      {name === "Home" ? (
        <HomeContent
          getItemFromStore={props.getItemFromStore}
          getAllItemFromStore={props.getAllItemFromStore}
          addNewItemToStore={props.addNewItemToStore}
          deleteItemFromStore={props.deleteItemFromStore}
          getItemFromStoreByIndex={props.getItemFromStoreByIndex}
          editItemToStore={props.editItemToStore}
        />
      ) : name === "Admin" ? (
        <AdminContent
          getItemFromStore={props.getItemFromStore}
          getAllItemFromStore={props.getAllItemFromStore}
          addNewItemToStore={props.addNewItemToStore}
          deleteItemFromStore={props.deleteItemFromStore}
          getItemFromStoreByIndex={props.getItemFromStoreByIndex}
          editItemToStore={props.editItemToStore}
        />
      ) : (
        <AboutAppContent />
      )}
    </div>
  );
};

export default ExploreContainer;
