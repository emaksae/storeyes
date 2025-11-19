export async function fetchProducts(): Promise<any[]> {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return data.map((item: any) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    image: item.image,
    liked: false,
  }))
}