import Api from "../services";

/** @type {import('./$types').PageLoad} */
// export const ssr = false;
export const load = async () => {
  const featuredProductRequest = Api.get("/api/rest/api/rest/product/featured_products?limit=100");
  const lastedProductRequest = Api.get("/api/rest/product/lasted_products?limit=100");
  const topRateProductRequest = Api.get("/api/rest/product/rated_products?limit=100");
  const reviewedProductRequest =  Api.get("/api/rest/product/reviewed_products?limit=100");
  const data = await Promise.all([featuredProductRequest, lastedProductRequest, topRateProductRequest, reviewedProductRequest])
  return { featuredProductList: data[0].product,  lastedProduct: data[1].product, topRateProduct: data[2].product, reviewedProduct: data[3].product};
}