import { Item } from "../types/Item";

export const items: Array<Item> = [
  {
    type: "cpu",
    photoURL:
      "https://www.powerplanetonline.com/cdnassets/procesador_intel_core_i9-9900k_3_6ghz_box_02_ad_l.jpg",
    brand: "Intel",
    model: "i9-9900K",
    baseClock: 2.8,
    boostClock: 4,
    cores: 8,
    thread: 8,
    price: 1500000,
    stock: 2,
  },
  {
    type: "cpu",
    photoURL:
      "https://www.powerplanetonline.com/cdnassets/procesador_intel_core_i9-9900k_3_6ghz_box_02_ad_l.jpg",
    brand: "Intel",
    model: "i9-9800K",
    baseClock: 2.8,
    boostClock: 4,
    cores: 8,
    thread: 8,
    price: 1500000,
    stock: 3,
  },
  {
    type: "ram",
    photoURL:
      "https://images-na.ssl-images-amazon.com/images/I/71Kkm5nIRKL._AC_SL1500_.jpg",
    brand: "Corsair",
    model: "Warna Warni",
    speed: 3200,
    size: 64,
    price: 1200000,
    stock: 1,
  },
  {
    type: "motherboard",
    photoURL:
      "https://www.startech.com.bd/image/cache/catalog/motherboard/msi/h310m-pro-m2-plus/h310m-pro-m2-plus-1-500x500.jpg",
    brand: "MSI",
    model: "Motherboard murah",
    chipset: "Gatau",
    forProcessor: "Intel",
    price: 500000,
    stock: 1,
  },
  {
    type: "gpu",
    photoURL:
      "https://assets.pikiran-rakyat.com/crop/66x0:1189x618/x/photo/2020/09/02/1102419101.jpg",
    brand: "Nvidia",
    model: "RTX 3080",
    price: 20000000,
    stock: 1,
  },
];
