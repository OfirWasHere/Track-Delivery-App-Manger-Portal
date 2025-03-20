import React, { lazy } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxStore";
import { closeAuthModal } from "../../store/reducers/AuthModalReducer";

const AuthModalV2 = lazy(() => import("./AuthModalV2/AuthModalV2"));
const AuthModal = lazy(() => import("./AuthModal/AuthModal"));

export default function ModalProvider() {
  const dispatch = useAppDispatch();
  const appState = useAppSelector((state) => state.authModal.isOpen);

  return (
    <>
      <AuthModalV2 />
      <AuthModal open={appState} onClose={() => dispatch(closeAuthModal())} />
    </>
  );
}
