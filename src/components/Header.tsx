import Navigation from "./Navigation.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

const Header = () => {
    const {name} = useContext(SWContext);
    return (
        <header className="rounded-t-3xl bg-gray">
            <Navigation/>
            <h1 className="text-center text-4xl py-6">{name}</h1>
        </header>
    )
}

export default Header;