const { initializeApp, applicationDefault } = require('firebase-admin/app');

// qué servicios de firebase se requieren
const { getFirestore } = require('firebase-admin/firestore');

require('dotenv').config();

/*
    configuración para establecer conexión con firebase.

    'applicationDefault' busca la variaable de entorno que ya se
     configuró: GOOGLE_APPLICATION_CREDENTIALS, en el .env
    
    esto se puede revisar desde la documentación de firebase
*/
initializeApp({
    credential: applicationDefault()
});

const db = getFirestore();

module.exports = {
    db
};