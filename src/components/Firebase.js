import firebase from "firebase";
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCb_NfIHrC0Y46JAZqsdqBGrWdxfgR4bmg",
    authDomain: "borrowme-vuhvp.firebaseapp.com",
    databaseURL: "https://borrowme-vuhvp.firebaseio.com",
    projectId: "borrowme-vuhvp",
    storageBucket: "borrowme-vuhvp.appspot.com",
    messagingSenderId: "930446309567"
};

export default class Firebase {
    static authentication;
    static db;

    static init() {
        firebase.initializeApp(config);
        db = firebase.firestore();
    }

    static isLoggedIn() {
        firebase.auth().onAuthStateChanged(user => {
            return user ? true : false
        })
    }

    static create(collection, data) {
        db.collection(collection).add(data)
    }

    static getData(collection, dataState) {
        return new Promise((resolve, reject) => {
            db.collection(collection).orderBy('name').onSnapshot(snapshot => {
                var data = []
                console.log(snapshot.docChanges(), 'snapshot')
                var changes = snapshot.docChanges();
                changes.forEach(change => {
                    if (change.type === 'added') {
                        data.push({
                            id: change.doc.id,
                            item: change.doc.data()
                        })
                    } else if (change.type === 'modified') {
                        data = dataState.slice()
                        const index = dataState.findIndex(item => item.id === change.doc.id)
                        data[index].item = change.doc.data()
                    }

                })
                resolve(data)
            })
        })
        // return db.collection(collection).orderBy('name').onSnapshot(snapshot => {
        //     var data = []
        //     console.log(snapshot.docChanges(), 'snapshot')
        //     var changes = snapshot.docChanges();
        //     changes.forEach(change => {
        //         if (change.type === 'added') {
        //             data.push({
        //                 id: change.doc.id,
        //                 item: change.doc.data()
        //             })
        //         } else if (change.type === 'modified') {
        //             data = dataState.slice()
        //             const index = dataState.findIndex(item => item.id === change.doc.id)
        //             data[index].item = change.doc.data()
        //         }

        //     })
        //     return data
        // })
    }
}