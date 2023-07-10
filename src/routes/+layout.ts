import Api from '../services';

/** @type {import('./$types').PageLoad} */
// export const ssr = false;
export const load = async () => {
  // const response = await Api.get('/api/rest/product/all_category?limit=20');
  return { categoryList: [] };
};
