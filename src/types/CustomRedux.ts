import { Item, ItemType } from "./Item";

export type CustomRedux = {
  getItemFromStore: (type: ItemType) => unknown;
  getAllItemFromStore: () => Array<Item>;
  addNewItemToStore: (newItem: Item) => void;
  deleteItemFromStore: (itemModel: string) => void;
  getItemFromStoreByIndex: (id: number) => Item;
  editItemToStore: (id: number, newItem: Item) => void;
};
