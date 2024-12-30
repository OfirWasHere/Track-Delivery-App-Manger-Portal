import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import useFirebase from "../../Firebase/useFirebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginServiceModal from "../Models/LoginServiceModal";

export default function useAuth() {
    const { firebaseAuth } = useFirebase();
    const [loader, setLoader] = useState<boolean>(false);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    async function firebaseLogin({ email, password }: LoginServiceModal) {
        try {
            setLoader(true);
            const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
            setUser(userCredential.user);
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
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }

    async function firebaseSignUp({ email, password }: LoginServiceModal) {
        try {
            setLoader(true);
            const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
            setUser(userCredential.user);
        } catch (error) {
            console.error("Sign-up failed:", error);
        } finally {
            setLoader(false);
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            setUser(user);
            if (user) {
                // navigate("/dashboard");
            }
        });
        return () => unsubscribe();
    }, [firebaseAuth]);

    return { loader, user, firebaseLogin, firebaseLogout, firebaseSignUp };
}
