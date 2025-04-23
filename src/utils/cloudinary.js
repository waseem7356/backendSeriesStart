import {v2  as cloudinary} from 'cloudinary';
import { response } from 'express';
import fs from 'fs';
cloudinary.config({
  cloud_name:   process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});




const uploadImage = async (filePath) => {   
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'your_folder_name', // Optional: specify a folder in Cloudinary
    });
    fs.unlinkSync(filePath); // Delete the file after uploading
    return result.secure_url; // Return the URL of the uploaded image

    
} catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};
export default uploadImage;
