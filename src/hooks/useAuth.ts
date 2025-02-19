import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginServiceModal } from "../utils/types";
import { useToasty } from "../components/common/ToastNotification";
import useFirebase from "./useFirebase";

export default function useAuth() {
    const { firebaseAuth } = useFirebase();
    const [loader, setLoader] = useState<boolean>(false);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [authChecked, setAuthChecked] = useState(null);
    const location = useLocation();
    const showToast = useToasty();


    async function firebaseLogin({ email, password }: LoginServiceModal) {
        try {
            setLoader(true);
            const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
            setUser(userCredential.user);
            navigate("/dashboard");
            showToast({ type: 'success', message: 'Welcome!' + userCredential.user })
        } catch (error) {
            console.error("Login failed:", error);
            showToast({ type: 'warning', message: "Login failed:" + error })
        } finally {
            setLoader(false);
        }
    }

    async function firebaseLogout() {
        try {
            await signOut(firebaseAuth);
            setUser(null);
            navigate("/");
            showToast({
                type: "info",
                message: "You have logged out successfully!",
            });
        } catch (error) {
            console.error("Logout failed:", error);
            showToast({ type: 'warning', message: "Logout failed:" + error })
        }
    }

    async function firebaseSignUp({ email, password }: LoginServiceModal) {
        try {
            setLoader(true);
            const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
            setUser(userCredential.user);
            navigate("/dashboard");
            showToast({ type: 'success', message: 'user has registered successfully!' })
        } catch (error) {
            showToast({ type: 'warning', message: "Sign-up failed:" + error })
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
                navigate("/dashboard");
                showToast({ type: 'success', message: 'Welcome!' })
            }).catch((error) => {
                console.log(error)
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                showToast({ type: 'warning', message: "Sign-up failed:" + errorMessage, toastOptions: { autoClose: 10000 } })
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
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