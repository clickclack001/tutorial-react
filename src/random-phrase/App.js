import './App.css'
import EmptyBlock from "./components/EmptyBlock";
import Phrase from "./components/Phrase";
import {useState} from "react";
import {adjectiveArr, nounsArr} from "./store";

function App() {

const [mainState, setMainState] = useState([]);

const randomPhrase = () => {
    let nounRndIdx = Math.floor(Math.random() * nounsArr.length);
    let adjRndIdxFirst = Math.floor(Math.random() * adjectiveArr.length);
    let adjRndIdxSecond = Math.floor(Math.random() * adjectiveArr.length);
    setMainState((prev) => [...prev, `${adjectiveArr[adjRndIdxFirst]} ${adjectiveArr[adjRndIdxSecond]} ${nounsArr[nounRndIdx]}`])
}

    return (
        <div className={'wrapper'}>
            <div className={'list'}>
                {mainState && mainState.map((phrase, index) => (
                    <Phrase
                        key={index}
                        text={phrase}
                    />
                ))}
            </div>
            {!mainState.length && <EmptyBlock/>}
            <button onClick={randomPhrase} className="btn btn_generate">Сгенерировать</button>
            <button onClick={() => setMainState([])} className="btn btn_clear">Очистить</button>
        </div>
    )
}

export default App