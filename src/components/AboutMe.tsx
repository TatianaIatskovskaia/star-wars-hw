import {characters, defaultHero, period_month} from "../utils/constants.ts";
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router";
import ErrorPage from "./ErrorPage.tsx";
import {SWContext} from "../utils/context.ts";

interface Hero {
    name: string;
    gender: string;
    birth_year: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
}

const AboutMe = () => {
    const {heroId = defaultHero} = useParams();
    const [hero, setHero] = useState<Hero | null>();
    const {changeName} = useContext(SWContext);

    console.log(useParams());

    useEffect(() => {
            if (!(heroId in characters)) {
                return
            }

            const saved = localStorage.getItem(heroId);

            if (saved) {
                const {payload, timestamp} = JSON.parse(saved);
                if (Date.now() - timestamp < period_month) {
                    setHero(payload as Hero);
                    return;
                }
            }

            fetch(`${characters[heroId as keyof typeof characters].url}`)
                .then(response => response.json())
                .then(data => {
                    const info = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    }
                    setHero(info);
                    localStorage.setItem(heroId, JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }
        , [heroId])

    useEffect(() => {
        if (hero) {
            changeName(hero.name);
        }
    }, [hero, changeName]);

    return (heroId in characters) ? (
        <>
            {(!!hero) &&
                <div className={'text-3xl text-justify tracking-widest leading-14 ml-8'}>
                    {Object.entries(hero).map(([key, value]) => (
                        <p key={key}>
                            <span className={'text-3xl capitalize'}>{key.replace('_', ' ')}</span>: {value}
                        </p>
                    ))}
                </div>
            }
        </>) : <ErrorPage/>
}

export default AboutMe;