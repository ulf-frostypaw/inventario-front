import '../index.css';
interface InputProps{
    placeholder: any;
    type: string;
}

export const Input = ({ placeholder, type}: InputProps) => {
    return (
    <input className="w-96 px-3 py-2 text-base rounded-md border-solid border-2 border-gray-400 outline-gray-600" type={type} placeholder={placeholder} required={true}/>
    );
};

export default Input;