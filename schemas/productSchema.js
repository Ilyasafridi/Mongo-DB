import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
    
    title : {
        type : String,
        required : true
    },

    decription : {
        type : String,
        required : true
    },

    price : {
        type : Number,
        required : true
    },

},

  {
    timestamps: true,
  }

)


export const Product = mongoose.model("Products" , productSchema)