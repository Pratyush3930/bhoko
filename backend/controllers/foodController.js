import foodModel from "../models/foodModel.js";
import fs from "fs"; //file system

// add food item

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`; // the new filename is stored in this

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({}); // gets all the foodItems
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, (err) => {
      if (err) {
        console.error(`Error deleting file: ${err.message}`);
        return;
      }
      console.log("File deleted successfully");
    }); // to delete files from file system

    await foodModel.findByIdAndDelete(req.body.id)
    res.json({success: true, message: "Food removed"})
  } catch (error) {
    console.log(error)
    res.json({success: false, message: "Error"})
  }
};
export { addFood, listFood, removeFood };
