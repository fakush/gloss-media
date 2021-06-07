import { db } from "./Firebase";
const itemCollection = db.collection("gloss_db");
let filteredCollection = itemCollection;

export function getItems() {
  return itemCollection.get().then((snapshot) => {
    filteredCollection = itemCollection;
    return snapshot.docs.map((doc) => doc.data());
  });
}

export function getFilteredItems(data) {
  console.log(data);
  data[0] !== "Referencias" ? (filteredCollection = filteredCollection.where(
    `${data[0]}`, "==", `${data[1]}`)
        ) : (filteredCollection = filteredCollection.where(
        "references", "array-contains", `${data[1]}`
      ));
  console.log(filteredCollection)
  return filteredCollection.get().then((snapshot) => {
    return snapshot.docs.map((doc) => doc.data());
  });
}

export function getItemById(id) {
  return itemCollection.where("id", "==", `${id}`).get().then((snapshot) => {
      return snapshot.docs.map((doc) => doc.data());
    });
}
