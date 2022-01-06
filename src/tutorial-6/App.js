import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";

function App() {
    const { pathname } = window.location;
    const postId = pathname.split('/').at(-1);


    return (
        <div className={'App'}>
            <Header/>
            { pathname === "/" && (
                <Home/>
            )}
            { pathname === "/about" && (
                <About/>
            )}
            {pathname === `/post/${postId}` && (
                <Article id={postId} />
            )}
            <Footer/>
        </div>
    )
}

export default App;