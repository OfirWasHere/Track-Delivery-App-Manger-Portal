import { AuthModalAction, AuthModalActionType } from "./reducers/AuthModalReducer";

export const openModal = (): AuthModalAction => ({ type: AuthModalActionType.OpenModal });
export const closeModal = (): AuthModalAction => ({ type: AuthModalActionType.CloseModal });