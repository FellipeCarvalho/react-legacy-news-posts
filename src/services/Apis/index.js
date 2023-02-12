export const posts = async () =>
  await fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );

export const photos = async () =>
  await fetch("https://jsonplaceholder.typicode.com/photos").then((response) =>
    response.json()
  );
