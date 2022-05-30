import {v4} from 'uuid'
import React from 'react'
import PropTypes from 'prop-types'
import ShopCard from './ShopCard'

function CardsView({cards}) {
    if (!cards)
    {
        return <></>; // если карточек не дали, возвращаем пустоту
    }

    return (
    <div className="CardsView">
        {
            cards.map((card) => {
            return (
                    <ShopCard 
                        key={v4()}
                        info={card}
                    />);
            })
        }
    </div>
  )
}

CardsView.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object)
}

export default CardsView
