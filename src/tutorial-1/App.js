import './App.css'
import ProfileFuncComponent from "./components/ProfileFuncComponent";
import ProfileClassComponent from "./components/ProfileClassComponent";

function App() {
    return (
        <>
            <ProfileFuncComponent registredAt={new Date(2021, 6, 22)} name={'Иван Иванович'}/>,
            <ProfileClassComponent registredAt={new Date(2021, 7, 21)} name={'Петр Петрович'}/>
        </>
    );
}

export default App;
