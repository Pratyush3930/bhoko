/* eslint-disable react/prop-types */
import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Add.css";
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({url}) => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "" ,
    category: "Salad",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({...data, [name]: value}))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault(); 
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    // formData.forEach((value, key) => {
    //   console.log(`${key}: ${value}`);
    // });   // to view the actual data in form data
    const response = await axios.post(`${url}/api/food/add`,formData);
    if(response.data.success){
      setData({
        name: "",
        description: "",
        price: "" ,
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message)
      console.log('Success')
    }
    else{
      console.log('error')
      toast.error(response.data.message)
    }
  }
  
  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image? URL.createObjectURL(image) :assets.upload_area} alt="" />
            {/* URL.createObjectURL displays the image file in the browser first without needing to upload it to the server */}
          </label>
          <input onChange={(e) => {setImage(e.target.files[0])}} type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="Type here" />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea onChange={onChangeHandler} value={data.description} 
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select name="category" onChange={onChangeHandler} value={data.category}>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input type="number" name="price" placeholder="$20" onChange={onChangeHandler} value={data.price} />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
