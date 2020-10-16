export type ItemType = "cpu" | "ram" | "motherboard" | "gpu";

export type Item =
  | {
      type: "cpu";
      photoURL: string;
      brand: string;
      model: string;
      baseClock: number;
      boostClock: number;
      cores: number;
      thread: number;
      price: number;
      stock: number;
    }
  | {
      type: "ram";
      photoURL: string;
      brand: string;
      model: string;
      speed: number;
      size: number;
      price: number;
      stock: number;
    }
  | {
      type: "motherboard";
      photoURL: string;
      brand: string;
      model: string;
      chipset: string;
      forProcessor: string;
      price: number;
      stock: number;
    }
  | {
      type: "gpu";
      photoURL: string;
      brand: string;
      model: string;
      price: number;
      stock: number;
    };
