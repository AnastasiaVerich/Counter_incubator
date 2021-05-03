import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./component/Counter";
import {Sets} from "./component/Sets";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incAC} from "./bll/counter-reduser";

let render = () => {
}
export function RENDER(all: any) {
    render = all
}

function App() {

    const value =useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    const incValue =()=> {
        dispatch(incAC())
    }

//даем значения для мин и макс в настройках
    const [maxSets, setMaxSets] = useState(5)
    const [minSets, setMinSets] = useState(0)
    //копируем значения из настроек в счетчик
    const [maxCounter, setMaxCounter] = useState(maxSets)
    const [minCounter, setMinCounter] = useState(minSets)


//max
    useEffect(() => {
        let valueInLS = localStorage.getItem('MAX in Sets')
        if (valueInLS) {
            let newMax = JSON.parse(valueInLS)
            setMaxCounter(newMax)
            setMaxSets(newMax)
            //если убрать, то после перезагрузки уйдет в 5 счеткик
            // если убрать, то не сохраняются данный в ЛС

        }
    }, [])
    useEffect(() => {
        localStorage.setItem('MAX in Sets', JSON.stringify(maxSets))
    }, [maxSets])

//////min
    useEffect(() => {
        let valueInLS = localStorage.getItem('Min in Sets')
        if (valueInLS) {
            let newMin = JSON.parse(valueInLS)
            setMinCounter(newMin) //если убрать, то после перезагрузки уйдет в ноль счетчик
            setMinSets(newMin)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('Min in Sets', JSON.stringify(minSets))
    }, [minSets])


    function collbackMAX(e: ChangeEvent<HTMLTextAreaElement>) {
        setMaxSets(JSON.parse(e.currentTarget.value))
        render()
    }

    function collbackMIN(e: ChangeEvent<HTMLInputElement>) {
        setMinSets(JSON.parse(e.currentTarget.value))
        render()
    }

    function setInc() {
        setMinCounter(minSets)
        setMaxCounter(maxSets)
        render()
    }


    return <div>
        <Sets maxInSets={maxSets}
              minInSets={minSets}
              minC={minCounter}
              maxC={maxCounter}
              onChangeMax={collbackMAX}
              onChangeMin={collbackMIN}
              setInc={setInc}/>

        <Counter minInCounter={minCounter}
                 minDefoult={minSets}
                 maxDefoult={maxSets}
                 setNumber={setMinCounter}/>
    </div>

}

export default App;
