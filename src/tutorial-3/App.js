import './App.css'
import TabsComponent from "./components/TabsComponent";
import tabs from './tabs'

function App() {
    return (
        <div className={'app-container'}>
            <h1 className={'app-title'}>FAQ</h1>
            <TabsComponent tabs={tabs}/>
        </div>
    )
}

export default App;