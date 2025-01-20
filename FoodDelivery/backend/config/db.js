import mongoose from "mongoose";

export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://gouribiju:FoodDelivery31r1@cluster0.c6ya8.mongodb.net/Ecommerce').then(()=>console.log("Db Connected"));

}