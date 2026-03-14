import Button from "./ui/Button.tsx";
import {NavLink} from "react-router";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

const NavItem = ({itemTitle}: { itemTitle: string }) => {
    const {name} = useContext(SWContext);

    return (
        <NavLink to ={`/${itemTitle.toLowerCase()}/${name}`}>
            <Button>{itemTitle}</Button>
        </NavLink>
    )
}

export default NavItem;