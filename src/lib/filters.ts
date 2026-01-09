export const filterProducts = (products: any[], searchParams: any) => {
  let filtered = [...products];

  const category = searchParams.get("category");
  const price = searchParams.get("price");
  const search = searchParams.get("search");

  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (price) {
    const [min, max] = price.split("-").map(Number);
    filtered = filtered.filter((p) => p.price >= min && p.price <= max);
  }

  if (search) {
    filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  return filtered;
};
