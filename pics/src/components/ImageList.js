import React from 'react';
import'./ImageList.css';

const ImageList = (props) => {
    const imgs = props.images.map(({description,id, urls}) => {
        return(<div key={id}>
             <img alt={description} src={urls.regular} />
        </div>
        )
    })
    return (
        <div className="image-list">{imgs}</div>
    )
};

export default ImageList;