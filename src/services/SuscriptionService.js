import { db } from './Firebase';

export function sendSuscriptionService(email) {
  return db
    .collection('suscripciones')
    .doc('ListaSuscriptores')
    .set({
      mail: email,
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
