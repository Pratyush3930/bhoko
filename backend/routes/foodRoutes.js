import express from "express"
import { addFood, listFood, removeFood } from "../controllers/foodController.js"
import multer from "multer"

const foodRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file ,cb) => { //cb is callback
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage: storage}) //uploads to the storage object create

foodRouter.post("/add",upload.single("image"), addFood)
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;