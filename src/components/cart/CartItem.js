import React from "react";
import { Link } from "react-router-dom";

function CartItem() {
    return (
        <div className="form-check my-3">
            {/* <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> */}
            <div className="card" style={{ width: "auto" }}>
                <div className="row no-gutters">
                    <div className="col-12 col-sm-5 col-lg-5">
                        <img className="card-img" src="../Images/dogs/dog11.jpg" style={{ height: "100%", width: "100%", padding: "2px" }} alt="" />
                    </div>
                    <div className="col-sm-7">
                        <div className="card-body">
                            <h5 className="card-title">Suresh Dasari</h5>
                            <p className="card-text">Suresh Dasari is a founder and technical lead developer in tutlane.</p>
                            <Link to="">Delete</Link> | <Link to="">Share</Link>
                            <div className="btn-group m-2 btn-sm btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-sm btn-light">
                                    <Link to="" className="qty">+</Link>
                                </label>
                                <label className="btn btn-sm btn-secondary">
                                    qty
                                </label>
                                <label className="btn btn-sm btn-light">
                                    <Link to="" className="qty">-</Link>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
