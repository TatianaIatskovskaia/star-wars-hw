import {createContext} from "react";


export const SWContext = createContext({
    name: '',
    changeName: (name: string) => console.log(name)
});