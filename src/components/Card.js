import React from 'react'; 
 
 const Card = (props) => {
 	return (
 		<div className='bg-light-green dib br5 pa2 na1 grow bw2 shadow-6 '>
 		<img  alt='robots' src={`https://robohash.org/${id}`} >
//'https://robohash.org/test?200x200'/
 			<div > 
 				<h2>{props.name}</h2>
 				<p>{props.email}</p>
 			</div>
 		</div>
 		)
 }
 export default Card;
 //
