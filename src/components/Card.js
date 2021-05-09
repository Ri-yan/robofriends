import React from 'react'; 
 
 const Card = (props) => {
 	return (
 		<div className='bg-light-green dib br3 pa4 ma2 grow bw3 shadow-6'>
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
