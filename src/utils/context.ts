import {createContext} from "react";
import {defaultHero} from "./constants.ts";
import type {SWContextValue} from "./type";

export const SWContext = createContext<SWContextValue>({
    name: defaultHero,
    changeName: (name: string) => console.log(name)
});