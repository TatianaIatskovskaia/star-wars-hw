import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {defaultHero} from "./utils/constants.ts";
import {SWContext} from "./utils/context.ts";
import HeroManager from "./components/HeroManager.tsx";
import {useState} from "react";

function App() {
    const [name, setName] = useState(defaultHero);

    return (
        <div className={'mx-2'}>
            <SWContext value={{name, changeName: setName}}>
                <Header/>
                <HeroManager/>
                <Main/>
                <Footer/>
            </SWContext>
        </div>
    )
}

export default App