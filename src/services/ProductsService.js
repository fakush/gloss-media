import { db } from "./Firebase";
const itemCollection = db.collection("test_db2");

export function getItems() {
  return itemCollection.get().then((snapshot) => {
    return snapshot.docs.map((doc) => doc.data());
  });
}

export function getItemsByCategory(subCategory) {
  return itemCollection.where("campoCategoria", "==", `${subCategory}`).get().then((snapshot) => {
    return snapshot.docs.map((doc) => doc.data());
  });
}

export function getItemById(id) {
  return itemCollection.where("CODIGO", "==", `${id}`).get().then((snapshot) => {
    return snapshot.docs.map(doc => doc.data());
  });
}