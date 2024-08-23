import { Link, Form, useActionData } from "react-router-dom"
import ErrorMessage from "../components/ErrorMessage"

export default function NewProduct() {
    const error = useActionData() as string

    return (
        <>
            <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full">
                <h2 className="text-2xl font-bold text-slate-500 mb-4 sm:mb-0">Registrar Producto</h2>
                <Link
                    to="/"
                    className="rounded-md bg-slate-700 p-3 text-xs font-medium text-white shadow-sm hover:bg-slate-500 tracking-wide"
                >
                    Volver a Productos
                </Link>
            </div>


            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Form className="mt-10 w-full sm:w-2/4 mx-auto" method="POST">
                <div className="mb-4">
                    <input
                        id="name"
                        type="text"
                        className="mt-2 block w-full p-3 bg-bg-input placeholder-small rounded-sm"
                        placeholder="Nombre del producto"
                        name="name"
                    />
                </div>
                <div className="mb-4">
                    <input
                        id="price"
                        type="number"
                        className="mt-2 block w-full p-3 bg-bg-input placeholder-small rounded-sm"
                        placeholder="Precio del producto. ej. 200, 300"
                        name="price"
                    />
                </div>
                <div className="flex justify-center">
                    <input
                        type="submit"
                        className="mt-5 w-full sm:w-1/3 bg-add p-2 text-black font-medium text-lg cursor-pointer rounded border-2 border-header-bg"
                        value="Registrar Producto"
                    />
                </div>
            </Form>
        </>
    )
}
