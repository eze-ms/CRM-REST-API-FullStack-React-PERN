import React from "react"
import { Link, useLoaderData } from "react-router-dom"
import { getProducts } from "../services/ProductServices"
import ProductDetails from "../components/ProductDetails"
import { Product } from "../types"


export async function loader() {
  const products = await getProducts()
  return products
}

export default function Products() {

  const products = useLoaderData() as Product[]
  

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

      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
              <tr>
                  <th className="p-2">Producto</th>
                  <th className="p-2">Precio</th>
                  <th className="p-2">Disponibilidad</th>
                  <th className="p-2">Acciones</th>
              </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <ProductDetails 
                key={product.id}
                product={product}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
