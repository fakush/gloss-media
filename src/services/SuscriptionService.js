import { db } from './Firebase';
import firebase from 'firebase';

export function sendSuscriptionService(email) {
  return db
    .collection('suscripciones')
    .doc('listado')
    .update({
      mail: firebase.firestore.FieldValue.arrayUnion(email),
    })
    .then(function (docRef) {
      console.log('CorreoAñadido: ', docRef.id);
      return docRef.id;
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
      return 'error cargado orden';
    });
}
