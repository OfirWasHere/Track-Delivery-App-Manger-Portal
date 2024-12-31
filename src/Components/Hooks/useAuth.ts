import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import useFirebase from "../../Firebase/useFirebase";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginServiceModal from "../Models/LoginServiceModal";

export default function useAuth() {
    const { firebaseAuth } = useFirebase();
    const [loader, setLoader] = useState<boolean>(false);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [authChecked, setAuthChecked] = useState(null);
    const location = useLocation();

    async function firebaseLogin({ email, password }: LoginServiceModal) {
        try {
            setLoader(true);
            const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
            setUser(userCredential.user);
            navigate("/dashboard");
        } catch (error) {
            console.error("Login failed:", error);
        } finally {
            setLoader(false);
        }
    }

    async function firebaseLogout() {
        try {
            await signOut(firebaseAuth);
            setUser(null);
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }

    async function firebaseSignUp({ email, password }: LoginServiceModal) {
        try {
            setLoader(true);
            const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
            setUser(userCredential.user);
            navigate("/dashboard");
        } catch (error) {
            console.error("Sign-up failed:", error);
        } finally {
            setLoader(false);
        }
    }

    async function firebaseGoogleAuthLogin() {
        const provider = await new GoogleAuthProvider();
        signInWithPopup(firebaseAuth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                navigate("/dashboard");
            }).catch((error) => {
                console.log(error)
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            setUser(user);
            setAuthChecked(true)
        });
        return () => unsubscribe();
    }, [firebaseAuth, location, user, navigate]);

    return { loader, user, authChecked, firebaseLogin, firebaseLogout, firebaseSignUp, firebaseGoogleAuthLogin };
}