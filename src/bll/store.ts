
import {combineReducers, createStore} from "redux";
import {counterReduser} from "./counter-reduser";
import {loadState, saveState} from "../util/ls-util";

const rootReduser = combineReducers({
    counter: counterReduser

})


export const store= createStore(rootReduser, loadState())



export type AppStateType=ReturnType<typeof rootReduser>


