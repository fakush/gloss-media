import { db } from "./Firebase";
const itemCollection = db.collection("test_db3");

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
  return itemCollection.where("Codigo", "==", `${id}`).get().then((snapshot) => {
    return snapshot.docs.map(doc => doc.data());
  });
}