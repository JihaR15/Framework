import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();

  return data;
}

export async function signUp(
  userData: {
    email: string;
    fullName: string;
    password: string;
  },
  callback: Function,
) {
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email),
  );
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // if (data.length > 0) {
  //   callback({
  //     status: "success",
  //     message: "User Registered Successfully",
  //   })
  // } else {
  //   callback({
  //     status: "error",
  //     message: "User already exists",
  //   })
  // }
  setTimeout(() => {
    callback({
      status: "success",
      message: "User Registered Successfully",
    });
  }, 500);
}
