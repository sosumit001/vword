import React from "react";
import {Link} from 'react-router-dom'





const ListItem = (props) => {

    return (
        <div  >
        <li style={ {listStyle:'none'}}> <Link to= {(`${props.type}`==='home'||`${props.type}`==='notification')?'/':`${props.type}`}><  img onClick={props.onIconClick} src={props.imgSrc} style={{height:'40px'}}  alt="" /></Link> </li>
        </div>
    )
}

export default ListItem;