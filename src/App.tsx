import Main from "./components/Main.tsx";
import {defaultHero} from "./utils/constants.ts";
import {SWContext} from "./utils/context.ts";
import {useState} from "react";

function App() {
    const [hero, setHero] = useState(defaultHero);

    return (
        <div>
            <SWContext value={{hero, changeHero: setHero}}>
                <Main/>
            </SWContext>
        </div>
    )
}

export default App