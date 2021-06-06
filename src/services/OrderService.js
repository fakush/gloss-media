import { db } from "./Firebase";

export function sendOrderService(buyer, items, total) {
    return db.collection("orders")
      .add({
        buyer: { name: buyer.name, phone: buyer.phone, email: buyer.email },
        items: items,
        date: Date.now(),
        total: total,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
        return "error cargado orden";
      });
    }