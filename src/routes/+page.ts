import Api from "../services";

/** @type {import('./$types').PageLoad} */
// export const ssr = false;
export const load = async () => {
  const response = await Api.get("/api/rest/product/featured_products?limit=10");
  return { featuredProductList: response.product };
}