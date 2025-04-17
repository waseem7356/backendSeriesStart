import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import mongoose,{Schema} from "mongoose";
const videoSchema = new Schema(
    
    {
    videofile : {
    type: String,// cloudnary url   
    required: true,
    
    }, thunmbnail : {
        type: String,
        required: true,
        
        },
title : {
    type: String,
    required: true,
   
},
description : {
    type: String,
    required: true,
},

duration : {
    type: Number, // cloudnary url  
    required: true,
},
viewCount : {
    type: Number,
    default: 0,


},
ispublished : {
    type: Boolean,
    default: true,
},

owner : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
},

    },
 { timestamps: true });

videoSchema.plugin(mongooseAggregatePaginate);
 export const Video = mongoose.model("Video", videoSchema);