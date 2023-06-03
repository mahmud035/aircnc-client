//* Upload Image to imgbb Server (Another way to do this)

export const imageUpload = async (image) => {
  const formData = new FormData();
  formData.append('image', image);

  const url = import.meta.env.VITE_IMAGE_BB_URL;

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  return data;
};
