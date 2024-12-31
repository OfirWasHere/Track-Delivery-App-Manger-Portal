import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
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

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            setUser(user);
            setAuthChecked(true)
        });
        return () => unsubscribe();
    }, [firebaseAuth, location, user, navigate]);

    return { loader, user, authChecked, firebaseLogin, firebaseLogout, firebaseSignUp };
}

// useEffect(() => {
//     const urlsToBlockWithoutAuth = ['/dashboard', '/main']
//     const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
//         setUser(user);
//         if (user === null && urlsToBlockWithoutAuth.some(path => location.pathname.includes(path))) {
//             // Navigate to log in when login page is fixed, also add a toast
//             navigate("/");
//         }
//     });
//     return () => unsubscribe();
// }, [firebaseAuth, location, user, navigate]);
