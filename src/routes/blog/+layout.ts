import Api from '../../servies/productServices';

/** @type {import('./$types').PageLoad} */
// export const ssr = false;
export const load = async () => {
  const response = await Api.get('/api/rest/getAllPost/10/10');
  const responseBlogCategories = await Api.get('/api/rest/post/categories');
  return { blogList: response.post, blogCategories: responseBlogCategories.blog_category };
};
