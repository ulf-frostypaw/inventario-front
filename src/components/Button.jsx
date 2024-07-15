import '../index.css';

const styles = {
    succses: "bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 w-full",
    danger: "bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 w-full",
    default: "bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-700 w-full",
    primary: "bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-full",
};

export const Button = ({ children, variant}) => {
    return (
        <button className={styles[variant]}>{children}</button>
    );
};

export default Button;