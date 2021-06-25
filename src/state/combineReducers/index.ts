import { reducer } from "../reducers/entrada";
import { combineReducers } from "redux";

export const reducers = combineReducers({
    entrada: reducer,
})

export type stateInterface = ReturnType<typeof reducers>