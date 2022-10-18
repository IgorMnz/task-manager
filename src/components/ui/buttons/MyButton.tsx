import React, {ButtonHTMLAttributes, FC} from 'react';
import styles from "./myButton.module.scss"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
};

const MyButton: FC<ButtonProps> = ({type = 'button', onClick, variant, children, ...props}) => {

    const buttonStyle = (variant: string | undefined) => {
        switch (variant) {
            case "primary":

                return styles.primary;
            case "secondary":
                return styles.secondary
            default:
                return styles.primary;
        }
    }

    return (
        <button
            type={type}
            className={buttonStyle(variant)}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default MyButton;