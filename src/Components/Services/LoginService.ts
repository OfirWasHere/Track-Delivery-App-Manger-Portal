import LoginServiceModal from "../Models/LoginServiceModal";

function loginService({ email, password }: LoginServiceModal) {
    return email;
}

export default { loginService }