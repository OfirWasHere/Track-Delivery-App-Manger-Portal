import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { FirebaseApp } from "firebase/app";
import { useMemo } from "react";
import { Auth, connectAuthEmulator, getAuth } from "firebase/auth";

export default function useFireBase() {
    const firebaseApp: FirebaseApp = useMemo(() => (
        initializeApp({
            apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
            authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
            storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
            appId: process.env.REACT_APP_FIREBASE_APP_ID,
            measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
        })
    ), []);

    const firebaseAnalytics: Analytics = useMemo(() => getAnalytics(firebaseApp), [firebaseApp]);
    const firebaseAuth: Auth = useMemo(() => {
        const auth = getAuth(firebaseApp);
        if (process.env.NODE_ENV === "development" && !auth.emulatorConfig) {
            // connectAuthEmulator(auth, "http://localhost:9099");
        }
        return auth;
    }, [firebaseApp]);
    return { firebaseApp, firebaseAnalytics, firebaseAuth }
}