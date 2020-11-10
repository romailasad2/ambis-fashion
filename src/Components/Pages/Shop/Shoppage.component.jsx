import React from 'react';

import { SHOP_DATA } from './SHOP_DATA';

import { Collection_Preview } from '../../Collection-Preview/Collection-Preview.component';

class ShopPage extends React.Component{
    constructor(){
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }
    render(){
        const {collections} = this.state;
        return(
            <div>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <Collection_Preview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;