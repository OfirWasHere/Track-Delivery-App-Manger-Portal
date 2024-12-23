import { signInWithEmailAndPassword } from "firebase/auth";
import useFirebase from "../../Firebase/useFirebase";
import LoginServiceModal from "../Models/LoginServiceModal";
import { useState } from "react";

export default function useAuth() {
    const { firebaseAuth } = useFirebase();
    const [loader, setLoader] = useState<boolean>(false);

    async function firebaseLogin({ email, password }: LoginServiceModal) {
        try {
            setLoader(true)

            // const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password)
            // console.log(userCredential.user);
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        } finally {
            setTimeout(() => {
                setLoader(false)
            }, 10000);
        }
    }
    return { firebaseLogin, loader };

}