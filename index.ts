import {initializeApp} from '@firebase/app';
import {getStorage,ref,uploadBytes,getDownloadURL,uploadBytesResumable} from '@firebase/storage';
import {getFirestore,doc,setDoc,setLogLevel,initializeFirestore,enableIndexedDbPersistence} from '@firebase/firestore';


const app = initializeApp({
    apiKey: "AIzaSyAWmMIPWNAlJ3n9xyRcpfKaUCmnLgTZnMw",
    authDomain: "its-april.firebaseapp.com",
    databaseURL: "https://its-april.firebaseio.com",
    projectId: "its-april",
    storageBucket: "its-april.appspot.com",
    messagingSenderId: "984636993069",
    appId: "1:984636993069:web:ba87f2195f38a997c392a4"
  });
  
  
async function storage() {
const storage = getStorage();
const path = ref(storage, 'foo')
 await uploadBytes(path, new Uint8Array([1,2,3]));
 console.log("Upload done");
 await uploadBytesResumable(path, new Uint8Array([1,2,3,4]));
 console.log("Resumable upload done");
 const url = await  getDownloadURL(path);
 console.log(url);
}

  
async function firestore() {
const db = initializeFirestore(app,{useFetchStreams:true} as any);
enableIndexedDbPersistence(db);
setLogLevel('debug');
const path = doc(db, 'foo/bar')
try {
 await setDoc(path, {foo:42});
 document.getElementById('status').innerHTML = 'OK';
} catch (e) {
    document.getElementById('status').innerHTML = 'FAIL';
}
}

firestore();

