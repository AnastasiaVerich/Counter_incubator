import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../bll/store";
import {minIncAC,  setNumberCounerAC} from "../bll/counter-reduser";
import {Counter, DispatchCounernteinerType, StateCounterConteinerType} from "./Counter";


let mapSttateToprops = (state: AppStateType): StateCounterConteinerType => {
    return {
        minInCounter: state.counter.minCounter,
        maxInCounter: state.counter.maxCounter,
        minDefoult: state.counter.minSets,
        maxDefoult: state.counter.maxSets,
        min: state.counter.min


    }
}
let mapDispatchToToprops = (dispatch: Dispatch): DispatchCounernteinerType => {
    return {
        setNumber: (x:number)=>{dispatch(setNumberCounerAC(x))},
        minInc: ()=>{dispatch(minIncAC())}
    }
}
export const CountConteiner = connect(mapSttateToprops, mapDispatchToToprops)(Counter);