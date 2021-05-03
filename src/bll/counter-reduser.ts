


const initionState: InitialStateType = {

   value: 10

}
type InitialStateType = {
    value: number
}


export const counterReduser = (state: InitialStateType = initionState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case "SetMin":
            return {...state}
        case "IncMin":
            return {...state, value: state.value+1}

        default:
            return state
    }
}

export const incAC = () => ({type: "IncMin"} as const)
export type IncValueAT = ReturnType<typeof incAC>

export const setAC = (value: number) => ({type: "SetMin", value: value} as const)
export type SetValueAT = ReturnType<typeof setAC>

type ActionType = IncValueAT | SetValueAT

