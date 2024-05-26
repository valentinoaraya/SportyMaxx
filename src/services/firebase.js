import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile, setPersistence, browserLocalPersistence } from "firebase/auth";

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

// Persistencia en las sesiones
setPersistence(getAuth(app), browserLocalPersistence)
.then(() => {
    console.log("Persistencia establecida")
})
.catch((error) => {
    console.log(error)
})

// Registrarse
export const registerUser = async (nombre, email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(getAuth(app),email, password)
        await updateProfile(userCredential.user, {displayName: nombre})
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

// Obtener el usuario actual
export const getCurrentUser = () => {
    return getAuth(app).currentUser
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