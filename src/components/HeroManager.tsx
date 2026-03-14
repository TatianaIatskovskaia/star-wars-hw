import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import {useLocation} from "react-router";
import {characters, defaultHero} from "../utils/constants.ts";

const HeroManager = () => {
    const {changeHero} = useContext(SWContext);
    const {pathname} = useLocation();

    useEffect(() => {
        const segments = pathname.split('/');
        const heroId = segments.find(segment => segment in characters) || defaultHero;
        changeHero(heroId);
    }, [pathname, changeHero]);
    return null;
};

export default HeroManager;