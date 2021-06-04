import { db } from "./Firebase";
const itemCollection = db.collection("test_db3");

export function getItems() {
    //todo: En próxima etapa implementar que filtro por fecha (Últimos 6)
    const itemCollectionOfertas = itemCollection.limit(4);
    return itemCollectionOfertas.get().then((snapshot) => {
    return snapshot.docs.map((doc) => doc.data());
  });
}