import React, {useState} from 'react';


function Card({card: {card, value}, handleClick}) {
	const [count, setCount] = useState(32)
		const click = () => {
			setCount(count-1)
			handleClick(value, card)
		}
  return (
  <div onClick={count > 0 && click} style={{
    width: '100px',
    height: '160px',
    border: '1px solid black',
		margin: '5px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center'
    
  }}>
    <div style={{fontSize:'20px'}}>{count}</div>
    {/* <div style={{fontSize:'100px'}}>{card}</div> */}
  </div>
  );
}

export default Card;
