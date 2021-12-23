import FormComponent from "./components/FormComponent";
import './App.css'

function App() {
    return (
        <>
            <h1 style={{textAlign: 'center'}}>Домашнее задание №2</h1>
            <p style={{textAlign: 'center'}}>Блок: Базовая информация. Урок №11</p>
            <div className={'container'}>
                <FormComponent/>
            </div>
        </>
    );
}

export default App;