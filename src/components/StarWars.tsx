import {characters, defaultHero, starWarsInfo} from "../utils/constants.ts";
import Text from "./ui/Text.tsx";
import {useParams} from "react-router";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "./ErrorPage.tsx";

const StarWars = () => {
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        if (!(heroId in characters)) {
            return
        }
        changeHero(heroId);
    }, []);

    return (heroId in characters) ? (
        <Text>
            {starWarsInfo}
        </Text>
    ) : <ErrorPage/>
}

export default StarWars;