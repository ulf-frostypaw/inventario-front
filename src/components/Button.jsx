import '../index.css';

const styles = {
    succses: "bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 w-full",
    danger: "bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 w-full",
    default: "bg-secondary text-white hover:bg-gray-700 w-full",
    primary: "text-white bg-primary hover:bg-primary/80 disabled:bg-opacity-70 ",
    secondary: "text-white bg-secondary hover:bg-secondary/80 disabled:bg-opacity-70",
};

export const Button = ({ children, variant, onClick}) => {
    return (
        <button onClick={onClick} className={"w-full py-3 px-4 sm:py-3.5 sm:px-6 text-sm sm:text-base font-medium relative h-auto inline-flex items-center justify-center rounded-lg transition-colors outline-none " + styles[variant]}>{children}</button>
    );
};

export default Button;