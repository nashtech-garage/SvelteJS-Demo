import Api from '../../../services/blogServices';

/** @type {import('./$types').PageLoad} */
export const load = async ({ params }: any) => {
  const id = params.id;
  // const response = await Api.get(`/api/rest/getPostDetail/${id}`);
  return { blogDetail: {} };
};
