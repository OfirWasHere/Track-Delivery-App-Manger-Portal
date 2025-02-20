import { AuthModalAction, AuthModalActionType } from "./reducers/AuthModalReducer";

export const openAuthModal = (): AuthModalAction => ({ type: AuthModalActionType.OpenModal });
export const closeAuthModal = (): AuthModalAction => ({ type: AuthModalActionType.CloseModal });