import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useContext, useEffect, useState} from "react";
import {characters, defaultHero} from "./utils/constants.ts";
import {SWContext} from "./utils/context.ts";
import {useLocation} from "react-router";

function App() {
    const [hero, setHero] = useState(defaultHero);

    return (
        <div className={'mx-2'}>
            <SWContext value={{hero, changeHero: setHero}}>
                <Header/>
                <HeroManager/>
                <Main/>
                <Footer/>
            </SWContext>
        </div>
    )
}

const HeroManager = () => {
    const {changeHero} = useContext(SWContext);
    const {pathname} = useLocation();

    useEffect(() => {
        const segments = pathname.split('/');
        const heroId = segments.find(segment => segment in characters) || defaultHero;
        changeHero(heroId);
    }, [pathname, changeHero]);

    return null;
}

export default App