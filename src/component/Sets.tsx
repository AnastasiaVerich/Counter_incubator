import React, {ChangeEvent} from 'react';
import s from './counter.module.css';
import {Button} from "./Button";

type SetsType = StateSetsConteinerType & DispatchSetsConteinerType
export type StateSetsConteinerType={
    minC: number
    maxC: number
    min: number
    minInSets: number
    maxInSets: number
}
export type DispatchSetsConteinerType={
    onChangeMin: (e: ChangeEvent<HTMLInputElement>)=>void
    onChangeMax: (ee: ChangeEvent<HTMLInputElement>)=>void
    setInc: any
}

export function Sets(props: SetsType) {
    let disabled = props.maxInSets === props.maxC && props.minInSets === props.min


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
            </div>
        </div>
    )
}

