// 1. App State - application level state:
export interface AuthModalState {
    isOpen: boolean;
}

// 2. Define the initial state using that type
export const initialState: AuthModalState = {
    isOpen: false, 
};

// 3. Action Type - list of actions needed on the data:
export enum AuthModalActionType {
    OpenModal = "OpenModal",
    CloseModal = "CloseModal",
}

export interface AuthModalAction {
    type: AuthModalActionType;
}

// 4. Reducer
export function authModalReducer(state = initialState, action: AuthModalAction) {    
    switch (action.type) {
        case AuthModalActionType.OpenModal:
            return { ...state, isOpen: true };
        case AuthModalActionType.CloseModal:
            return { ...state, isOpen: false };
        default:
            return state;
    }
}