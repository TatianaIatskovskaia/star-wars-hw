import Navigation from "./Navigation.tsx";
import {characters} from "../utils/constants.ts";
import {useValidHero} from "../hooks/customHook.ts";

const Header = () => {

    const {isHeroValid, heroId} = useValidHero();

    const headerTitle = isHeroValid ? characters[heroId].name : 'Error';

    return (
        <header className="rounded-t-3xl bg-gray">
            <Navigation/>
            <h1 className="text-center text-4xl py-6">{headerTitle}</h1>
        </header>
    )
}

export default Header;