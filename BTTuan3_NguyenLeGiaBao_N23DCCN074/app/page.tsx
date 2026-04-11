export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface ProductsResponse {
  products: Product[];
}

async function fetchRandomMensShirt(): Promise<Product | null> {
  const res = await fetch(
    "https://dummyjson.com/products/category/mens-shirts",
    { cache: "no-store" }
  );

  if (!res.ok) {
    return null;
  }

  const data = (await res.json()) as ProductsResponse;
  const products = data.products ?? [];

  if (products.length === 0) {
    return null;
  }

  const index = Math.floor(Math.random() * products.length);
  return products[index];
}

export default async function HomePage() {
  const product = await fetchRandomMensShirt();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      {product ? (
        <article className="w-[320px] rounded-xl bg-white p-6 shadow-md">
          <h1 className="mb-4 text-center text-base font-bold">
            Fashion Trending 2026
          </h1>

          <div className="flex items-center justify-center rounded-lg bg-gray-100 p-4">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="max-h-48 w-auto object-contain"
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-sky-400">New Arrival</span>
            <span className="font-bold text-red-600">${product.price}</span>
          </div>

          <h2 className="mt-2 text-sm font-bold text-black">{product.title}</h2>

          <button
            type="button"
            className="mt-4 w-full rounded-md bg-black py-2 text-white"
          >
            Thêm vào giỏ hàng
          </button>
        </article>
      ) : (
        <p className="text-center text-sm text-gray-600">
          Không tải được sản phẩm. Vui lòng thử lại sau.
        </p>
      )}
    </div>
  );
}
