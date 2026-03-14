import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {characters} from "../utils/constants.ts";

const Hero = () => {
    const {name} = useContext(SWContext)

    return (
        <section className="float-left w-1/4 mt-2 mr-4">
            <img className="w-full shadow-hero" src={characters[name].img} alt={characters[name].name}/>
        </section>
    )
}

export default Hero;