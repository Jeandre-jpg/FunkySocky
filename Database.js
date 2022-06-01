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

    let avatar = snap.data()
    return avatar;

}