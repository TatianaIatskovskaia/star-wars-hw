export interface SWContextValue {
    name: string;
    changeName: (hero: string) => void;
}

export interface Hero {
    name: string;
    img: string;
    url: string;
}

// export interface Characters { [key: string]: Hero }
export type Characters = Record<string, Hero>;