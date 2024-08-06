const mongoose = require("mongoose");
const ProductCollection = require('../../models/ProductSchema');
const getproductcontroller = async(req,res)=>{
    try{
        const product = await ProductCollection.find()
        res.status(200).send(product);
        console.log(`Products fetched successfully`)
    }
    catch (error){
        res.status(504).send({
            message: "Error in fetching products"
        });
        console.log(`Error occured :${error}`);
    }
   
}
// const getproductcontroller = (req,res)=>{
//     res.send("get product controller")
// };
module.exports = getproductcontroller;
