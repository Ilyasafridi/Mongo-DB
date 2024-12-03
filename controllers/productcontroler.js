import { Product } from "../schemas/productSchema.js";




export const newProduct = async (req , res) => {

    try {

        const { title, decription , price } = req.body;
    
        if(!req.body.title) {
            return res.json({
                success : false,
                message : "Title Is Required"
            })
        }

        const newProduct = await Product.create({
            title: title,
            decription: decription,
            price: price,
          });

        res.json ({
            success : true,
            message : "Product add SccessFully",
            data : req.body,
        });

    }
    
    catch (error) {
      return res.json ({
        success : false,
        message : "Failed to  add Product",
        error : error.message
      })  
    }

}



// export const updateProduct = async (req, res) => {
//     try {
//       const id = req.params.id;
//       const exitProduct = await Product.findById({ _id: id });
  
//       if (!exitProduct) {
//         return res.json({
//           success: false,
//           message: "Product not found",
//         });
//       }
  
//       await Product.updateOne(
//         { _id: id },
//         {
//           $set: {
//             title: req.body.title,
//             decription: req.body.decription,
//             price: price,
//           },
//         }
//       );
//       const updateProduct = await Product.findById({ _id: id });
  
//       return res.json({
//         success: true,
//         message: "Product Updated successfully",
//         product: updateProduct,
//       });
//     } catch (error) {
//       return res.json({
//         success: false,
//         message: "Failed to update product",
//         error: error.message,
//       });
//     }
//   };



export const updateProduct = async (req, res) => {
  try {
      const id = req.params.id;

      
      const existingProduct = await Product.findById(id);

      if (!existingProduct) {
          return res.json({
              success: false,
              message: "Product not found",
          });
      }


      await Product.updateOne(
          { _id: id },
          {
              $set: {
                  title: req.body.title,
                  description: req.body.description,
                  price: req.body.price, 
              },
          }
      );

      
      const updatedProduct = await Product.findById(id);

      return res.json({
          success: true,
          message: "Product Updated successfully",
          product: updatedProduct,
      });
  } catch (error) {
      return res.json({
          success: false,
          message: "Failed to update product",
          error: error.message,
      });
  }
};




  export const deleteProduct = async (req, res) => {
    try {
        // Extract `id` from the request parameters
        const id = req.params.id;

        // Check if the product exists
        const existProduct = await Product.findById(id);

        if (!existProduct) {
            return res.json({
                success: false,
                message: "Product not found",
            });
        }

        // Delete the product
        await Product.deleteOne({ _id: id });

        return res.json({
            success: true,
            message: "Product deleted successfully",
        });
    } catch (error) {
        return res.json({
            success: false,
            message: "Failed to delete Product",
            error: error.message,
        });
    }
};



// export const deleteProduct = async (req, res) => {
//   try {
//     const id = req.params.productId;
//     const existProduct = await Product.findById(id);


//     if (!existProduct) {
//       return res.json({
//         success: false,
//         message: "Product not found",
//       });
//     }

 

//     await Product.deleteOne({ _id: id });

//     return res.json({
//       success: true,
//       message: "Product deleted successfully",
//     });
//   }
//    catch (error) {
//     return res.json({
//       success: false,
//       message: "Failed to delete Product",
//       error: error.message,
//     });
//   }
// };







    export const allProducts = async (req ,res) => {
    try {
      const users = await Product.find();
  
      res.json({
        success: true,
        message: "All Products",
        data: users,
      });
    } catch (error) {
      res.json({
        success: false,
        message: "Failed to add Products",
        error: error.message,
      });
    }
  };