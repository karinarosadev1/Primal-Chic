
const URL = "https://693a1dffc8d59937aa09daac.mockapi.io/api/productos";

export async function getProducts() {
  const res = await fetch(URL);
  if (!res.ok) throw new Error("Error al cargar productos");
  return await res.json();
}

export async function getProductById(id) {
  const res = await fetch(`${URL}/${id}`);
  if (!res.ok) throw new Error("Producto no encontrado");
  return await res.json();
}
