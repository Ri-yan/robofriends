import React from 'react'; 
 const Card = ({name,email,id}) => {
 	return (
<<<<<<< HEAD
		 		<div className='bg-light-green dib br3 pa4 ma2 grow bw3 shadow-5'>
		 		<img  alt='robots' src={'https://robohash.org/${id}?size=200x200'}/>
		 			<div > 
		 				<h2>{name}</h2>
		 				<p>{email}</p>
		 			</div>
		 		</div>
 			)
=======
 		<div className='bg-light-green dib br3 pa4 ma2 grow bw3 shadow-6'>
 		<img  alt='robots' src={`https://robohash.org/${id}`} >
//'https://robohash.org/test?200x200'/
 			<div > 
 				<h2>{props.name}</h2>
 				<p>{props.email}</p>
 			</div>
 		</div>
 		)
>>>>>>> 6ab6f812883f0e380f402cab063fcdec2cf26cbc
 }
 export default Card;
 //
