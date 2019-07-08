import React  from 'react';
import './item-detail.css';

 const ItemDetail = ({id, renderItem, item, getData}) => {
    const itemImgSrc = getData(id+1);
    console.log(itemImgSrc);
        return (
            <div className="person-detail-container">
                <img src={itemImgSrc} alt="person" className="person-photo"/>
                <div className="person-detail-wrapper">
                    {renderItem(item)}
                </div>
            </div>
           
        );
}

export default ItemDetail;