// src/app/component/reusable/Button.tsx

import React from 'react';

interface ButtonProps {
    onClick?: () => void; // Optional onClick handler
    title?: string; // Optional title to display on the button
    className?: string; // Optional additional class names for styling
    children?: React.ReactNode; // Optional children to allow custom content
    textColor?: string; // Optional text color
}

const Button: React.FC<ButtonProps> = ({ onClick, title, className = '', children, textColor = 'text-white' }) => {
    return (
        <div
            className={`Button px-4 py-3 rounded-lg flex justify-center items-center cursor-pointer ${className}`}
            onClick={onClick} // Attach the onClick handler
        >
            {title ? (
                <div className={`${textColor} Title text-center text-sm sm:text-base font-medium leading-snug`}>
                    {title} {/* Display the title prop */}
                </div>
            ) : (
                children // Display children if title is not provided
            )}
        </div>
    );
};

export default Button;