import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food item

const addFood = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "Image file is required" });
        }

        const image_filename = req.file.filename;

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename
        });

        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error adding food item" });
    }
};


const listFood = async (req,res)=> {
    try{
        const foods = await foodModel.find({})
        res.json({success:true,data:foods})
    }catch (error){
        console.log("Error")
    }
}

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);

        // Check if food exists
        if (!food) {
            return res.status(404).json({ success: false, message: "Food item not found" });
        }

        // Check and delete image if it exists
        const imagePath = `uploads/${food.image}`;
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food removed successfully" });
    } catch (error) {
        console.log("Error removing food:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};



export {addFood,listFood,removeFood}