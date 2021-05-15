import {ChangeEvent} from "react";

type OnChangeMaxType = {
    type: "onChangeMax"
    newMaxSet: number
}
type OnChangeMinType = {
    type: "OnChangeMin"
    newMinSet: number
}
type SetIncACType = {
    type: "SetInc"
}
type SetNumberCounerType = {
    type: "setNumberCouner"
    setMinSet: number
}
type MinIncType = {
    type: "minInc"
}
type ActionType = OnChangeMaxType | OnChangeMinType
    | SetIncACType | SetNumberCounerType | MinIncType
const initionState: InitialStateType = {

    maxSets: 5,
    minSets: 0,
    maxCounter: 5,
    minCounter: 0,
    min: 0

}
export type InitialStateType = {
    maxSets: number
    minSets: number
    maxCounter: number
    minCounter: number
    min: number
}


export const counterReduser = (state: InitialStateType = initionState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case "onChangeMax":
            return {
                ...state,
                maxSets: action.newMaxSet
            }
        case "OnChangeMin":
            return {
                ...state,
                minSets: action.newMinSet
            }
        case "SetInc":
            return {
                ...state,
                minCounter:  state.minSets,
                maxCounter: state.maxSets,
                min: state.minSets
            }
        case "setNumberCouner":
            return {
                ...state,
                minCounter: action.setMinSet
            }
        case "minInc":
            return {
                ...state,
                minCounter: state.minCounter < state.maxSets
                    ? state.minCounter + 1
                    : state.minCounter
            }

        default:
            return state
    }
}


export const onChangeMaxAC = (e: ChangeEvent<HTMLInputElement>): OnChangeMaxType => {
    return {type: "onChangeMax", newMaxSet: JSON.parse(e.currentTarget.value)}
}
export const onChangeMinAC = (e: ChangeEvent<HTMLInputElement>): OnChangeMinType => {
    return {type: "OnChangeMin", newMinSet: JSON.parse(e.currentTarget.value)}
}
export const setIncAC = (): SetIncACType => {
    return {type: "SetInc"}
}
export const setNumberCounerAC = (setMinSet: number): SetNumberCounerType => {
    return {type: "setNumberCouner", setMinSet}
}
export const minIncAC = (): MinIncType => {
    return {type: "minInc"}
}


