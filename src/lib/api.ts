export interface ApiProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export function normalizeProductImageUrl(url: string): string {
  if (!url) return "https://m.media-amazon.com/images/I/81fPKd-2AYL._AC_SL1500_.jpg";
  if (url.includes("fakestoreapi.com/img/")) {
    const filename = url.split("/").pop() || "";
    const cleanFilename = filename
      .replace(/-2t\.png$/, "_.jpg")
      .replace(/_t\.png$/, ".jpg");
    return `https://m.media-amazon.com/images/I/${cleanFilename}`;
  }
  return url;
}

export const FALLBACK_PRODUCTS: ApiProduct[] = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://m.media-amazon.com/images/I/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 4.8, count: 120 },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
    category: "men's clothing",
    image: "https://m.media-amazon.com/images/I/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.5, count: 259 },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
    category: "men's clothing",
    image: "https://m.media-amazon.com/images/I/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://m.media-amazon.com/images/I/71YXzeOuslL._AC_UY879_.jpg",
    rating: { rate: 4.2, count: 430 },
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://m.media-amazon.com/images/I/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.9, count: 400 },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave",
    price: 168,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://m.media-amazon.com/images/I/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.6, count: 70 },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://m.media-amazon.com/images/I/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.3, count: 400 },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://m.media-amazon.com/images/I/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.1, count: 100 },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: 64,
    description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/61IBBVJvSDL._AC_SY879_.jpg",
    rating: { rate: 4.8, count: 203 },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5 hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores)",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/61U7T1koQqL._AC_SX679_.jpg",
    rating: { rate: 4.9, count: 470 },
  },
  {
    id: 11,
    title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/71kWymZ+c+L._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 319 },
  },
  {
    id: 12,
    title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/61mtL65D4cL._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 400 },
  },
];

const BASE_URL = "https://fakestoreapi.com";

const FETCH_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  Accept: "application/json",
};

export async function getProducts(): Promise<ApiProduct[]> {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      headers: FETCH_HEADERS,
      next: { revalidate: 3600 }, // ISR cache for 1 hour
    });
    if (!res.ok) {
      console.warn(`[API] Fakestore API returned status ${res.status}. Using fallback products.`);
      return FALLBACK_PRODUCTS;
    }
    const data = await res.json();
    const rawList: ApiProduct[] = Array.isArray(data) && data.length > 0 ? data : FALLBACK_PRODUCTS;
    return rawList.map((p) => ({
      ...p,
      image: normalizeProductImageUrl(p.image),
    }));
  } catch (err) {
    console.warn("[API] Unable to reach fakestoreapi during build. Using fallback products.");
    return FALLBACK_PRODUCTS;
  }
}

export async function getProductById(id: string | number): Promise<ApiProduct | null> {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      headers: FETCH_HEADERS,
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      const fallback = FALLBACK_PRODUCTS.find((p) => p.id === Number(id));
      return fallback || null;
    }
    const product: ApiProduct = await res.json();
    return {
      ...product,
      image: normalizeProductImageUrl(product.image),
    };
  } catch (err) {
    const fallback = FALLBACK_PRODUCTS.find((p) => p.id === Number(id));
    return fallback || null;
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const res = await fetch(`${BASE_URL}/products/categories`, {
      headers: FETCH_HEADERS,
      next: { revalidate: 86400 },
    });
    if (!res.ok) {
      return ["electronics", "jewelery", "men's clothing", "women's clothing"];
    }
    const data = await res.json();
    return Array.isArray(data) && data.length > 0
      ? data
      : ["electronics", "jewelery", "men's clothing", "women's clothing"];
  } catch (err) {
    return ["electronics", "jewelery", "men's clothing", "women's clothing"];
  }
}
