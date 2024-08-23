import { safeParse } from "valibot"
import axios from "axios"
import { DraftProductSchema } from "../types"

// Define FormDataEntryValue si no está disponible en tu entorno
type FormDataEntryValue = string | File

type ProductData = {
  [k: string]: FormDataEntryValue
}

export async function addProduct(data: ProductData) {
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name as string, // Convertir a string explícitamente
      price: +data.price // Convertir a número
    })

    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/products`
      await axios.post(url, {
        name: result.output.name,
        price: result.output.price
      })
    } else {
      throw new Error("Datos no válidos")
    }
  } catch (error) {
    console.error("Error al agregar el producto:", error)
    throw error
  }
}
