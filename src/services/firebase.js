import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile, setPersistence, browserLocalPersistence, onAuthStateChanged, sendEmailVerification} from "firebase/auth";
import { getFirestore, collection, addDoc, query, where, getDocs, updateDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measuramentId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Persistencia en las sesiones
setPersistence(getAuth(app), browserLocalPersistence)
.then(() => {
    console.log("Persistencia establecida")
})
.catch((error) => {
    console.log(error)
})

// Cambios de autenticación y tokens
onAuthStateChanged(getAuth(app), async (user) => {
    if (user) {
        try{
            const token = await user.getIdToken();
            localStorage.setItem("token", token);
        } catch (error) {
            console.log(error)
        }
    } else {
        localStorage.removeItem("token")
        console.log("Usuario no autenticado, token eliminado")
    }
})

// Registrarse
export const registerUser = async (nombre, telefono, direccion, email, password) => {

    // Configuramos el email de verificación
    const actionCodeSettings = {
        url: "https://sporty-maxx.vercel.app",
        handleCodeInApp: true
    }

    try {
        // Creamos el usuario con los datos recibidos
        const userCredential = await createUserWithEmailAndPassword(getAuth(app), email, password)
        // Enviamos el email de verificación
        await sendEmailVerification(userCredential.user, actionCodeSettings)
        console.log("Verifique su correo electronico para activar su cuenta")
        // Actualizamos el nombre
        await updateProfile(userCredential.user, {displayName: nombre})
        // Luego actualizamos el usuario en Firestore
        const collectionRef = collection(db, "users")
        const idUser = userCredential.user.uid
        await addDoc(collectionRef, {idUser, nombre, telefono, direccion, email})
        console.log("Usuario registrado correctamente")
        return userCredential.user;
        
    } catch (error) {
        console.log(error)
        throw error
    }
}

// Iniciar sesion
export const signInUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(getAuth(app),email, password)
        console.log("Sesion iniciada correctamente")
        return userCredential.user
    } catch (error) {
        console.log("Error al inicial sesión: ", error)
        throw error
    }
}

// Cerrar sesion
export const signOutUser = async () => {
    try {
        await getAuth(app).signOut()
        localStorage.removeItem("token")
        console.log("Sesion cerrada correctamente")
    } catch (error) {
        console.log("Error al cerrar sesión: ", error)
        throw error
    }
}

// Obtener el usuario actual from Firebase Auth
export const getCurrentUser = () => {
    return getAuth(app).currentUser
}

// Obtener el usuario actual from Firestore
export const getCurrentUserFirestore = async (userFromAuth) => {
    try{
        if (!userFromAuth) return null
        const userRef = collection(db, "users")
        const q = query(userRef, where("idUser", "==", userFromAuth.uid))
        const querySnapshot = await getDocs(q)
        return querySnapshot.docs[0].data()
    } catch (error) {
        console.log(error)
        throw error
    }
}

// Actualizar el usuario
export const updateUser = async (uid, data) => {
    try {
        // Primero actualizo el usuario de Auth
        const user = getAuth(app).currentUser
        if (data.nombre !== user.displayName){
            console.log("Actualizando nombre")
            await updateProfile(user, {displayName: data.nombre})
        }
        
        // Luego actualizo el usuario en Firestore
        const userRef = collection(db, "users")
        const q = query(userRef, where("idUser", "==", uid))
        const querySnapshot = await getDocs(q)
        const docRef = querySnapshot.docs[0].ref
        await updateDoc(docRef, data)

    } catch (error) {
        console.log(error)
        throw error
    }
}

// Obtener el rol del usuario
export const getCurrentUserRole = async () => {
    try{
        const user = getAuth(app).currentUser
        if (!user) return null
        else return (await user.getIdTokenResult()).claims.role
    } catch (error) {
        console.log(error)
    }
}