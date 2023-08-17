import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ id, item }) => {
    const navigate = useNavigate();
    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
                <img
                    src={
                        process.env.REACT_APP_DEV_URL +
                        item.attributes?.img?.data[0]?.attributes?.url
                    }
                />
            </div>
            <div className="prod-details">
                <span className="name">{item.attributes?.title}</span>
                <span className="price">&#8377;{item.attributes?.price}</span>
            </div>
        </div>
    );
};

export default Product;



// import "./Product.scss";
// import {useNavigate} from "react-router-dom";


// const Product = ({id, item}) => {

//         const navigate = useNavigate();
//     return <div className="product-card" onClick={() =>navigate("/product/" + id)}>
            
//             <div className="thumbnail">
//                 <img 
//                     src={
//                         process.env.REACT_APP_DEV_URL +
//                         item.attributes?.img?.data[0]?.attributes?.url
//                     } 
//                     alt="" 
//                 />
//             </div>

//             <div className="prod-details">
//                 <span className="name">{item.attributes?.title}</span>
//                 <span className="price">&#8377;{item.attributes?.price}</span>
//             </div>

//     </div>;
// };

// export default Product;
