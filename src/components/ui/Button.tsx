import type {ReactNode} from "react";

interface Props {
    onClick?: () => void;
    children: ReactNode;
    className?: string;
}

const Button = ({children, onClick, className}: Props) => {
    return (
        <div className={`bg-danger rounded-md px-3 border cursor-pointer hover:bg-red-500 hover:text-white ${className ?? ''}`} onClick={onClick}>{children}</div>
    );
};

export default Button;