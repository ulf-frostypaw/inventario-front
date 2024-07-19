import React from "react";
import Input from "../Inputs";
import Button from "../Button";

const FormCliente = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-8 rounded-lg shadow-xl border-slate-300 border-2 shadow-slate-300 w-full max-w-md">
                <h1 className="text-3xl font-semibold mb-6 text-center text-gray-700">Registrar Usuario</h1>
                <label className="block mb-4">
                    Nombre:
                    <Input type="text" placeholder="Nombre" className="mt-1 block w-full p-3 border rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200" />
                </label>
                <label className="block mb-4">
                    Nombre De Usuario:
                    <Input type="email" placeholder="Email" className="mt-1 block w-full p-3 border rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200" />
                </label>
                <label className="block mb-4">
                    Contraseña:
                    <Input type="password" placeholder="Contraseña" className="mt-1 block w-full p-3 border rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200" />
                </label>
                <label className="block mb-4">
                    Telefono:
                    <Input type="tel" placeholder="Telefono" className="mt-1 block w-full p-3 border rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200" />
                </label>
                <label className="block mb-6">
                    Tipo de usuario:
                    <select name="tipo_usr" id="tipo_usr" className="mt-1 block border-2 w-full p-3 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200">
                        <option value="1" className="bg-gray-200 hover:bg-gray-300">Secretari@ De Compras</option>
                        <option value="2" className="bg-gray-200 hover:bg-gray-300">Secretari@ De Ventas</option>
                        <option value="3" className="bg-gray-200 hover:bg-gray-300">Tecnico</option>
                    </select>
                </label>
                <Button variant="primary" type="submit" children="Enviar" className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200" />
            </form>
        </div>
    )
}

export default FormCliente;
