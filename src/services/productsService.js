
const API_URL = import.meta.env.VITE_API_URL;
console.log("API_URL:", import.meta.env.VITE_API_URL);


// Obtener todos los productos
export async function getProducts() {
  const res = await fetch(`${API_URL}/productos`);
   console.log("STATUS:", res.status);
  console.log("URL:", res.url);

    const text = await res.text();
  console.log("RESPONSE:", text);

  if (!res.ok) {
    throw new Error("Error al cargar productos"); 
}
  return JSON.parse(text);
 }

// Obtener un producto por ID
export async function getProductById(id) {
  const res = await fetch(`${API_URL}/productos/${id}`);

  if (!res.ok) { 
    throw new Error("Producto no encontrado"); 
}
 return await res.json();
}

// Crear un nuevo producto
export async function createProduct(producto) {
   const res = await fetch(`${API_URL}/productos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });

  if (!res.ok) {
    throw new Error("Error al crear el producto");
  }

  return await res.json();
}
