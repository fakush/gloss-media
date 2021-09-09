import { db } from './Firebase';
const itemCollection = db.collection('glossmedia_db');

export function getItems() {
  //todo: En próxima etapa implementar que levante de una segunda db.
  const itemCollectionOfertas = itemCollection.limit(4);
  return itemCollectionOfertas.get().then((snapshot) => {
    return snapshot.docs.map((doc) => doc.data());
  });
}
