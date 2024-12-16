import React from 'react'

const Bags = () => {

const bagData = [
  {id:1 , name:"YSL" , price:500000 , description: "luxury Bag" , image: '/YSL-handbag.jpg'},
  {id:2 , name:"Gucci" , price:450000 , description: "Insta Trendy Bag" , image: '/Gucci-handbags-3.jpg'},
  {id:3 , name:"Coach" , price:300000 , description: "ladies first choice" , image: '/Coach-handbag.jpg'},
  {id:4 , name:"Louis-Vuiltton" , price:250000 , description: "most luxurest Bag" , image: '/louis-vuiltton.jpg'},
  {id:5 , name:"Chirstian Dior" , price:150000 , description: "Easy to carry Bag" , image: '/christian-dior-bag.jpg'},
  {id:6 , name:"Guess-handbag.webp" , price:500000 , description: "casual Bag" , image: '/Guess-handbag.jpg'}
]
  return (
    <div >
      <div className='handbags'>
        {bagData.map( (bag)=>(
          <div key={bag.id} className='bag-card'>
           <img src={bag.image } alt={bag.name} style={{ width: '50%' }} />
           <h3>{bag.name}</h3>
           <p>{bag.description}</p>
           <div className='price'>${bag.price}</div>
           <button>Add to Cart!</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bags