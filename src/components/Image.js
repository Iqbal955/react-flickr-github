import React from 'react';

const Image = props => (
    <li className="photo-container ul li">
        <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt = ""/>




    </li>



);

export default Image;