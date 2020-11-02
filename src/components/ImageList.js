import React from 'react';
import Image from './Image';

// import {

// Container,
// ListGroup,
// ListGroupItem


// } from 'react-bootstrap'

const ImageList = props => 
{
    const results = props.data;

    let images;

    console.log(results);



        images = results.map(image => 
            
             <Image id={image.id} secret= {image.secret} server={image.server} key={image.id}/>)


    

    return (
        <ul className= "main.-nav ul">
             {images }
        </ul>
       



    );

}





export default ImageList;