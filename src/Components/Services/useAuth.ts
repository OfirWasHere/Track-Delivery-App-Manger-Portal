import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import useFirebase from "../../Firebase/useFirebase";
import LoginServiceModal from "../Models/LoginServiceModal";
import { useState } from "react";

export default function useAuth() {
    const { firebaseAuth } = useFirebase();
    const [loader, setLoader] = useState<boolean>(false);

    async function firebaseLogin({ email, password }: LoginServiceModal) {
        try {
            setLoader(true)
            const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password)
            console.log(userCredential.user);
        } catch (error) {
            console.error("Login failed:", error);
        } finally {
            setTimeout(() => {
                setLoader(false)
            }, 1000);
        }
    }


    async function firebaseSignUp({ email, password }: LoginServiceModal) {
        try {
            setLoader(true)
            const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password)
            console.log(userCredential.user);
        } catch (error) {
            console.error("account creation failed:", error);
        }
        finally {
            setTimeout(() => {
                setLoader(false)
            }, 1000);
        }
    }
    return { firebaseLogin, firebaseSignUp, loader };

}