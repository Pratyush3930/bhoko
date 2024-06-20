import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, require: true},
    category: {type: String, require: true}
})

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);
// if this model is already there then it will be use or if it is not there then new model will be created

export default foodModel;