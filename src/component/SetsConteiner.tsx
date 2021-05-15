import React, {ChangeEvent} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {DispatchSetsConteinerType, Sets, StateSetsConteinerType} from "./Sets";
import {AppStateType} from "../bll/store";
import {onChangeMaxAC, onChangeMinAC, setIncAC} from "../bll/counter-reduser";


let mapSttateToprops = (state: AppStateType): StateSetsConteinerType => {
    return {
        minC: state.counter.minCounter,
        maxC: state.counter.maxCounter,
        min: state.counter.min,
        minInSets: state.counter.minSets,
        maxInSets: state.counter.maxSets,


    }
}
let mapDispatchToToprops = (dispatch: Dispatch): DispatchSetsConteinerType => {
    return {
        onChangeMin: (e: ChangeEvent<HTMLInputElement>)=>{dispatch(onChangeMinAC(e))},
        onChangeMax: (e: ChangeEvent<HTMLInputElement>)=>{dispatch(onChangeMaxAC(e))},
        setInc: ()=>{dispatch(setIncAC())},
    }
}
export const SersConteiner = connect(mapSttateToprops, mapDispatchToToprops)(Sets);