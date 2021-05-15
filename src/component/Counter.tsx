import React, {ChangeEvent} from 'react';
import s from './counter.module.css';
import {Button} from "./Button";


type CounterType = StateCounterConteinerType & DispatchCounernteinerType
export type StateCounterConteinerType = {
    minInCounter: number
    maxInCounter: number
    minDefoult: number
    maxDefoult: number
    min: number
}
export type DispatchCounernteinerType = {
    setNumber: (x: number) => void
    minInc: any
}

export function Counter(props: CounterType) {


    let disabledInc = props.minInCounter === props.maxDefoult
        || props.maxDefoult !== props.maxInCounter
        || props.minDefoult !== props.min
        || props.minDefoult < 0
        || props.maxDefoult <= props.minDefoult
    let disabledReset = props.minInCounter === props.minDefoult
        || props.maxDefoult !== props.maxInCounter
        || props.minDefoult !== props.min
        || props.minDefoult < 0
        || props.maxDefoult <= props.minDefoult

    const numStyle = {
        
        color: props.minInCounter < props.maxDefoult
            ? "black"
            : "red"
    }

    const counterDisplay = () => {
        if (props.minDefoult < 0) {
            return "error min"
        }
        if (props.maxDefoult <= props.minDefoult) {
            return "error max"
        }
        if (props.maxDefoult !== props.maxInCounter || props.minDefoult !== props.min) {
            return "click 'Set'"
        }
        return props.minInCounter
    }

    return (
        <div className={s.timer}>
            <div className={s.content}>
                <div className={s.num}>
                    <h1 style={numStyle}>{counterDisplay()}</h1>
                </div>
                <div className={s.buttons}>
                    <Button text={"Inc"}
                            disabled={disabledInc}
                            onClickCollback={props.minInc}/>
                    <Button text={"Reset"}
                            disabled={disabledReset}
                            onClickCollback={() => props.setNumber(props.minDefoult)}/>
                </div>
            </div>
        </div>
    )
}


