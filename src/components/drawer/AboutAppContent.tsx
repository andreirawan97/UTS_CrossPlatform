import { IonLabel, IonSlide, IonSlides, IonThumbnail } from "@ionic/react";
import React from "react";

export default function AboutAppContent() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <IonThumbnail style={{ width: "100%", height: "auto", marginBottom: 20 }}>
        <img
          src="https://s.keepmeme.com/files/en_posts/20200821/59fb58e3a469e13d5d588c298813b4c6jerry-mouse-crying-in-tears.jpg"
          alt="Loading"
        />
      </IonThumbnail>
      <IonLabel style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
        Andre Julian Irawan
      </IonLabel>
      <IonLabel style={{ fontSize: 18, marginBottom: 20 }}>
        AL - 00000022705
      </IonLabel>

      <p style={{ marginBottom: 20 }}>
        Saya mengerjakan aplikasi ini sendirian di kos. <br /> Saya tidak
        menggunakan Library luar.
      </p>

      <p style={{ width: "100%" }}>
        Sumber yang digunakan:
        <br />- Stack Overflow
        <br />- Dokumentasi resmi dari Ionic
        <br />- Foto produk dari Google Image
      </p>

      <p style={{ marginTop: 40 }}>
        Semoga habis UTS boleh menggunakan React Native. Amin.
      </p>
    </div>
  );
}
