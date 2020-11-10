import React from 'react';

import './collection-item.styles.scss';

export const Collection_Item = ({name, imageUrl, price}) => (
    <div className='collection-item'>
        {console.log(imageUrl)}
        <div 
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />

        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
)