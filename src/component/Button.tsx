import s from "./counter.module.css";
import React from "react";

type ButtonType = {
    onClickCollback: any
    disabled: boolean
    text: string
}

export function Button(props: ButtonType) {
    return <button className={s.button1}
                   disabled={props.disabled}
                   onClick={props.onClickCollback}>{props.text}</button>

}