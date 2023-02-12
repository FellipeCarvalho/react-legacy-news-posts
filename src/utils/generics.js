import { posts, photos } from "../services/Apis";

export const getPostsAndPhotosFromApi = async () => {
  const postsJson = await posts();
  const photosJson = await photos();

  return zipListPostWithPhotos(postsJson, photosJson);
};

export const zipListPostWithPhotos = (postList, photoList) =>
  // função de ziper unindo os arrays,já que tem muito mais posts que imagens
  postList.map((p, index) => {
    return {
      ...p,
      cover: photoList[index].url,
    };
  });
