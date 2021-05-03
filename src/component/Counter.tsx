import React from 'react';
import s from './counter.module.css';
import {Button} from "./Button";


type CounterType = {
    minInCounter: number
    minDefoult: number
    maxDefoult: number
    setNumber: any
}

export function Counter(props: CounterType) {

    function setInc() {
        return props.minInCounter < props.maxDefoult ? props.setNumber(props.minInCounter + 1) : props.minInCounter
    }

    function setReset() {
        props.setNumber(props.minDefoult)
    }

    let disabledInc = props.minInCounter === props.maxDefoult
    let disabledReset = props.minInCounter === props.minDefoult

    const numStyle = {
        color: props.minInCounter < props.maxDefoult ? "black" : "red"
    }

    return (
        <div className={s.timer}>
            <div className={s.content}>
                <div className={s.num}>
                    <h1 style={numStyle}>{props.minInCounter}</h1>
                </div>
                <div className={s.buttons}>
                    <Button text={"Inc"}
                            disabled={disabledInc}
                            onClickCollback={setInc}/>
                    <Button text={"Reset"}
                            disabled={disabledReset}
                            onClickCollback={setReset}/>
                </div>
            </div>
        </div>
    )
}


