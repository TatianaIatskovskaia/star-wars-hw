import type {ReactNode} from "react";

interface Props {
    children: ReactNode;
    className?: string;
    }

const Text = ({children, className}: Props) => {
    return (
        <div className={`text-3xl text-justify tracking-widest leading-normal ${className ?? ''}`}>
            {children}
        </div>
    );
};

export default Text;