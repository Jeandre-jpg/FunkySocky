import { auth, db } from "./firebase";
import  {doc, setDoc, Timestamp, collection, query, getDoc,addDoc, where} from 'firebase/firestore';
import { async, querystring } from '@firebase/util';


export const createUserOnRegister = (user, username) => {
  //document reference : doc(firestore init, collection name , optional -- id of the document name/id)
    const userRef = doc(db, 'avatars', user.uid);

  //create data
    const userData = {
        email: user.email,
        username: username,
        uid: user.uid,
        role: 'student',
        dateCreated: Timestamp.fromDate(new Date())
    }
//set a doc : setDoc(docRef, data we want to set, any additional option like merge)
    return setDoc(userRef, userData);
}

//returns our collection reference that we want to listen for real updates
export const getAvatar = async () => {

    const ref = doc(db, "avatars", auth.currentUser.uid);
    const snap = await getDoc(ref);

    let avatar = snap.data()
    return avatar;

}


export const getAllAvatars = async () => {

    const avatars = [];
  
    //get snapshot of our avatars collection
    const querySnapshot = await getDocs(collection(db, 'avatars'));
  
  
    //need to loop through snapshot
    querySnapshot.forEach((doc) => {
      let avatar = { ...doc.data(), uid: doc.id }
      avatars.push(avatar);
    })
  
    return avatars;
}
  
//set our profiles data
// export const updatecompetitionUsersCount = (id, data) => {
//     const userRef = doc(db, 'comps', id);
//     return updateDoc(userRef, data, { merge: true });//option to merge and not overrite
  
//   }

export const updateProfile = (uid, data) => {
    const userRef = doc(db, 'avatars', uid)
    return setDoc(userRef, data, {merge: true}) 
}

//new competition
export const newComp = (comp) => {
    return addDoc( collection(db, 'comps'), comp )
}

export const getAllComp = () => {
    return collection(db, "comps");
}

//enter a competition and get scorecard
// export const addEntryToComp = async(id, titlecomp) => {
//     const collectionRef = collection(db, 'comps/' + id + '/entries')
    
//     const addentry = {
//         uid: auth.currentUser.uid,
//         title: titlecomp,
//         description: "description",
//         mode: "mode",
//         image: "Image",
//         score: '0'
//     }
    
//     return addDoc(collectionRef, addentry);
    
//   }

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
   
    // return addDoc(collection(db, 'comps/' + id + '/entries'), data)
    return addDoc(collection(db, 'yoda'), data)
}
