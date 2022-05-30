import {v4} from 'uuid'
import React from 'react'
import PropTypes from 'prop-types'
import ShopItem from './ShopItem'

function ListView({items}) {
    if (!items)
    {
        return <></>;
    }

    return (
    <li className="ListView">
        {
            items.map((item) => {
            return (
                    <ul key={v4()} >
                        <ShopItem 
                            info={item}
                        />
                    </ul>                    
                    );
            })
        }
    </li>
  )
}

ListView.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
}

export default ListView
