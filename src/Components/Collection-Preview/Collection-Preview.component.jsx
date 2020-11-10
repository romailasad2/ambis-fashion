import React from 'react';

import './collection-preview.styles.scss';

import { Collection_Item } from '../Collection-item/Collection-item.component';

export const Collection_Preview = ({title, items}) => {
    // console.log(items[0].name)
    return(
    
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
        {
            items
            .filter((item, idx) => idx<4 )
            .map(({id, ...otheritemProps}) => (
                <Collection_Item key={id} {...otheritemProps}/>
                    
            ))
        }
        </div>
    </div>
)}