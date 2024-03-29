import { FaHeart , FaRegHeart  } from "react-icons/fa";
import './Like.css';
import { useState } from "react";


const Like = () => {

    const [liked, setLiked] = useState(true);
    const  Click = () => {
        
        console.log( !liked ? 'liked': 'unliked');

        setLiked(!liked);
    }
    
 
        return (
            <>
          
            <div className="cat">
                <img src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=11e949fc5d06576bc8b80ec192896753" alt="" />
            </div>
            <div className="heart" onClick={ Click}>
             {liked ? <FaHeart size = {30}/> : <FaRegHeart  /> }
            
             
                </div>

              
                </>
        )

        }

export default Like