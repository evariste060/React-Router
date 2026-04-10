import React, { useState } from 'react'

// Sample data for cards
const cardsData = [
  { id: 1, title: 'Card 1', description: 'This is the description for Card 1.' },
  { id: 2, title: 'Card 2', description: 'This is the description for Card 2.' },
  { id: 3, title: 'Card 3', description: 'This is the description for Card 3.' },
  { id: 4, title: 'Card 4', description: 'This is the description for Card 4.' },
  { id: 5, title: 'Card 5', description: 'This is the description for Card 5.' },
  { id: 6, title: 'Card 6', description: 'This is the description for Card 6.' },
  { id: 7, title: 'Card 7', description: 'This is the description for Card 7.' },
  { id: 8, title: 'Card 8', description: 'This is the description for Card 8.' },
]

function CardList() {
    const [itemsToShow, setItemsToShow]  = useState(cardsData.lenght)
    const cardsToShow = cardsData.slice(0,itemsToShow)
  return (
    <div>
      <div>
        {cardsToShow.map(card => (
          <div
            key={card.id}
            style={{
              backgroundColor: 'green',
              margin: '10px',
              padding: '10px',
              color: 'white',
              borderRadius: '10px',
            }}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <div className="buttons">
        {itemsToShow === 4 ?
        <button  className=' rounded-2xl w-40 bg-blue-500 text-xl ' onClick={()=>setItemsToShow(cardsData.lenght)}>Show More</button>
        :
         <button  className=' rounded-2xl w-40 bg-blue-500 text-2xl' onClick={()=>setItemsToShow (4)}>Show Less</button>
         }
      </div>
    </div>
  )
}

export default CardList
