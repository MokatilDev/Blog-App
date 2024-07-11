import { v2 as cloudinary } from "cloudinary";

const uploadImage = async (image: string) => {
  cloudinary.config({
    cloud_name: "do43s5mdx",
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const resulte = await cloudinary.uploader.upload(image, {
    folder: "avatars",
  });
  return resulte;
};

export default uploadImage;
