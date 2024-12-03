import express from "express"
import { allProducts, deleteProduct, newProduct, updateProduct  } from "../controllers/productcontroler.js"

const router = express.Router();

router.post("/newProduct" , newProduct);

router.put("/updateProduct/:id", updateProduct);



router.delete('/deleteProduct/:id', deleteProduct);


router.get("/allproducts" , allProducts)

// router.put("/product/:name", updateProduct);


export default router;