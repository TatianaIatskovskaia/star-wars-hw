import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {SWContext} from "./utils/context.ts";

function App() {
    const [name, setName] = useState('Luke Skywalker');

    return (
        <div className={'mx-2'}>
            <SWContext value={{name, changeName: setName}}>
                <Header/>
                <Main/>
                <Footer/>
            </SWContext>
        </div>
    )
}

export default App