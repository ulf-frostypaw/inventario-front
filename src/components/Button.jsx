import '../index.css';

const styles = {
    succses: "bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700",
    danger: "bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700",
    default: "bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700",
    primary: "bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700",
};

export const Button = ({ children, variant}) => {
    return (
        <button className={styles[variant]}>{children}</button>
    );
};

export default Button;