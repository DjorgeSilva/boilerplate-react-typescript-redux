import { Dispatch } from "react"
import { entradaInterface } from "../interfaceActions"

export const depositAction = (entrada: number) => {
    return (dispatch: Dispatch<entradaInterface>) => {
        dispatch({
            type: 'input',
            payload: entrada
        })
    }
}
