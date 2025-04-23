import asyncHandler from '../utils/AsyncHandlers.js';
import ApiError from '../utils/ApiError.js';
import User from '../models/User.model.js';

import uploadImage  from '../utils /cloudinary.js';
import ApiResponse from '../utils/ApiResponse.js';

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, fullName } = req.body;
  console.log("emauil", email);
if([name, email,password,fullName].some((fields) => fields?.trim === "")){
    return next(new ApiError(400, "All fields are required"));
}
   {

}

const existedUser = User.findOne({
  $or: [{ name }, {email}, {fullName}],
 })

if(existedUser) {
  return next(new ApiError(400, "User already exists"));
  
} 
}
);
// upload avatar
const avatarlocalpath = req.files?.avatar[0]?.path;
constcoverImagepath = req.files?.coverImage[0]?.path;
if(!avatarlocalpath) {
  return next(new ApiError(400, "Avatar is required"));
}
const avatar =await uploadImage(avatarlocalpath);
const coverImage = await uploadImage(coverImagepath);
if(!avatar) {
  return next(new ApiError(400, "Avatar is required"));
}

const user = await User.creat({
  fullName,
  avatar : avatar.url,
  coverImage : coverImage?.url || "",
  email,
  password,
  name,

})
const createdUser =  await User.findById(user._id).select("-password -__v -createdAt -updatedAt")
if(!createdUser) {
  return next(new ApiError(400, "User not found"));
}

res.status(201).json(
  new ApiResponse(201, createdUser, "User created successfully")
);




export default registerUser;
