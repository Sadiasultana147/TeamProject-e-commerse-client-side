import React from 'react';
import { Link } from 'react-router-dom';

const AllProduct = (props) => {
    const { _id, name, image, category, price, features } = props.product;
    return (
        <div>
            <div className="col h-100">
                <div style={{ backgroundColor: "#D5D6EA" }} className="cardbox w-100 card h-100">
                    <div>
                        <img src={image} alt="" className=" w-100 h-100 p-5" />
                    </div>
                    <div className="card-body text-center">
                        <h4 className="card-text">{name}</h4>



                    </div>
                    <div className="card-body text-center">
                        <h4 className="card-text">{category}</h4>
                    </div>
                    <div className="card-body text-center">
                        <h4 className="card-text">{features}</h4>
                    </div>
                    <div className="card-body text-center">
                        <h4 className="card-text">{price}</h4>
                    </div>
                    <div class="card-footer bg-transparent border-success d-flex justify-content-between">

                        <Link style={{ textDecoration: "none" }} className="link d-flex justify-content-center"  ><button className="btn btn-success ">
                            <i style={{ color: "red", fontSize: "20px" }} class="fa fa-cart-plus"></i>
                            <span className="ps-1"> ORDER</span>
                        </button>
                        </Link>

                        <Link style={{ textDecoration: "none" }} className="link d-flex justify-content-center" to={`fashiondetails/${_id}`} ><button className="btn btn-info ">
                            <i style={{ color: "red", fontSize: "20px" }} class="fa fa-cart-plus"></i>
                            <span className="ps-1"> SeeMore...</span>
                        </button>
                        </Link>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default AllProduct;