import { db } from "./Firebase";
const itemCollection = db.collection("db_06_2021");
let filteredCollection = itemCollection;

export function getItems() {
  return itemCollection.get().then((snapshot) => {
    return snapshot.docs.map((doc) => doc.data());
  });
}

export function getFilteredItems(data) {
  console.log(data);
  data[0] !== "Referencias" ? (filteredCollection = filteredCollection.where(
    `${data[0]}`, "==", `${data[1]}`)
        ) : (filteredCollection = filteredCollection.where(
        "Referencias", "array-contains", `${data[1]}`
      ));
  return filteredCollection.get().then((snapshot) => {
    return snapshot.docs.map((doc) => doc.data());
  });
}

export function getItemById(id) {
  return itemCollection.where("Codigo", "==", `${id}`).get().then((snapshot) => {
      return snapshot.docs.map((doc) => doc.data());
    });
}
