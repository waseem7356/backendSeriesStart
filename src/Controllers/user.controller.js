import asyncHandler from '../utils/AsyncHandlers.js';


const registerUser = asyncHandler(async (req, res) => {
  
  // Here you would typically save the user to the database
  // For demonstration, we'll just return the user data
  res.status(200).json({
    message: 'User registered successfully',
    
  });
}
);
export default registerUser;
