/* eslint-disable react/prop-types */
import'./ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi et nisi pariatur enim, ea quae animi nulla suscipit illo assumenda fugit.</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index) => {
                return (
                    // sets the category if the prev is not equal to current menu name
                    <div onClick={()=>setCategory(prev => (prev === item.menu_name)? "All": item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} alt="" className={category === item.menu_name ? "active": ""} />
                        <p>{item.menu_name}</p>
                        {console.log(category)}
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu