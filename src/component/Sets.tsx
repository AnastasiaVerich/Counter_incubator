import React from 'react';
import s from './counter.module.css';
import {Button} from "./Button";

type SetsType = {
    minInSets: number
    maxInSets: number
    onChangeMin: any
    onChangeMax: any
    setInc: any
    minC: number
    maxC: number

}

export function Sets(props: SetsType) {
    let disabled = props.maxInSets === props.maxC && props.minInSets === props.minC


    return (
        <div className={s.timer}>
            <div className={s.content}>
                <div className={s.num}>
                    <input type="number"
                           value={props.maxInSets}
                           onChange={props.onChangeMax}/>
                    <input type="number"
                           value={props.minInSets}
                           onChange={props.onChangeMin}/>
                </div>
                <div className={s.buttons}>
                    <Button
                        onClickCollback={props.setInc}
                        disabled={disabled}
                        text={"Set"}/>
                </div>
                {console.log(props.minInSets)}
            </div>
        </div>
    )
}

