import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

import appF from './config';

class Firebase {
    constructor() {
        if(!app.apps.length) {
            app.initializeApp(appF)
        }
        this.db = app.firestore();
        this.storage = app.storage();
    }
}


const firebase = new Firebase();
export default firebase;