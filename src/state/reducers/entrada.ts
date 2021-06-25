import { entradaInterface } from "../interfaceActions"

export const initialState = 0;

export const reducer = (state: number = initialState, action: entradaInterface) => {
    switch (action.type) {

        case 'input':
            return state + action.payload;

        default:
            return state

    }
}