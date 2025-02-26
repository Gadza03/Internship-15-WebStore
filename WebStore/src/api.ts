export async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Something went wrong while fetching!");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
