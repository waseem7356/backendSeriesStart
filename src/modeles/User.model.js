import mongoose from 'mongoose';
const { Schema } = mongoose;
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
const UserSchema = new mongoose(
    Schema({
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
        trim: true,
        index : true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      unique: true,
        lowercase: true,
        trim: true,
        index : true,
    },
    Avatar: {
      type: String,    // cloudnary url
        required: true,
    },
    coverImage: {
      type: String,    
        
    },
    watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Video',
        }
    ],
    password: {
      type: String,
      required:[true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long'],
    },
   
    refrshToken: {
      type: String,
    },
   
  }, { timestamps: true }),
);


UserSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

UserSchema.methods.ispassworcorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}
//    USE TO GENERATE A TOKEN ...................
UserSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    return token;
};
UserSchema.methods.generateRefreshToken = function () {
    const refreshToken = jwt.sign({ _id: this._id }, process.env.JWT_REFRESH_SECRET, {
        expiresIn: '7d',
    });
    return refreshToken;
}
const User = mongoose.model('User', UserSchema);

export default User;
