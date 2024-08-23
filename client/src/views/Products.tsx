import { Link } from "react-router-dom"

export default function Products() {
  return (
    <>
        <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full">
            <h2 className="text-2xl font-bold text-slate-500 mb-4 sm:mb-0">Productos</h2>
            <Link
                to="productos/nuevo"
                className="rounded-md bg-slate-700 p-3 text-xs font-medium text-white shadow-sm hover:bg-slate-500 tracking-wide"
            >
                Agregar Producto
            </Link>
        </div>
    </>
  )
}
