import Button from "./Button";

interface VisualizacionProps {
    alt: string;
}

const Visualizacion = ({ alt }: VisualizacionProps) => {
    return (
        <div className="flex m-auto w-max mt-[4rem]">
            <img className="rounded-lg" src="https://placehold.co/500x350" alt={alt} />
            <div className="w-[30rem]  ml-[2rem] rounded-xl">
                <div className="p-3">
                    <h1 className="text-3xl">Aire tukesote</h1>
                    <p className="text-xl mt-6">Descripcion</p>
                    <p className="text-sm mt-2 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eaque natus porro esse dolorem repudiandae voluptatum fuga libero? Facere quisquam quod ducimus</p>
                    <p className="text-3xl mt-2 ">$15,000</p>
                    <p className="text-sm mt-2 mb-4">stock: 15 disponibles</p>

                </div>
                <div className="max-w-[80%] flex m-auto mb-2">
                    <Button variant="primary" className="mt-10">Apartar ahora</Button>
                </div>
                
            </div>
        </div>
    );
}

export default Visualizacion