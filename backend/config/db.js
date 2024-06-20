import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://food-ordering:pY9CWMbYm5KQXbiu@cluster0.wurxdhl.mongodb.net/food-del').then(() => console.log('db connected!'))
}