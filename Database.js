import { auth, db } from "./firebase";
import  {doc, setDoc, Timestamp, collection, getDoc, getDocs,addDoc, onSnapshot} from 'firebase/firestore';
import { async, querystring } from '@firebase/util';


export const createUserOnRegister = (user, username) => {

    const userRef = doc(db, 'avatars', user.uid);

    const userData = {
        email: user.email,
        username: username,
        uid: user.uid
    }//add own for app

    return setDoc(userRef, userData);
}

export const getAvatar = async () => {

    const ref = doc(db, "avatars", auth.currentUser.uid);
    const snap = await getDoc(ref);


  
    let avatar = {...doc.data(), uid: doc.id}
    avatars.push(avatar);

}

export const updateProfile = (uid, data) => {
    const userRef = doc(db, 'avatars', uid)
    return setDoc(userRef, data, {merge: true}) 
}

export const newComp = (comp) => {
    return addDoc( collection(db, 'comps'), comp )
}

export const getAllComps = () => {
    return collection(db, "comps");
}

export const getEntryOffComp = async(id) => {
    let entries = []

    const collectionRef = collection(db, 'comps/' + id + '/entries')
    const collectionSnapshot = await getDocs(collection(db, 'entries'))

    collectionSnapshot.forEach((doc) => {
        entries.push(doc.data());
    })

    return entries

}

export const addEntryToComp = (data, id) => {
    const collectionRef = collection(db, 'comps/' + id + '/entries')

    return addDoc(collectionRef, data)

}