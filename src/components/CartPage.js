import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./cart/CartItem";

function CartPage() {
    return (
        <div>
            <h1 className="container">CART</h1>
            <hr />
            <div className="container-fluid">
                <div className="row">
                    

                    <div className="col-8 px-5">
                        {/* <!-- apply this div in loop so that no. of cart items = no. of div --> */}
                        <CartItem />
                    </div>



                    <div className="col-lg-4">
                        {/* <div className="container text-center py-3 bg-light">
                            <!-- For no selected item -->
                            <h4>No items selected</h4>
                            <p>Select options to buy</p>
                            <button className="btn px-4 bg-warning">Proceed to buy</button>
                        </div> */}



                        <div className="container text-center py-3 bg-light">
                            {/* <!-- For 2 selected items --> */}
                            <h4>Items selected</h4>
                            <h6>Subtotal (2 items): </h6><h5>1,76,990</h5>
                            <Link to="/Buy" className="btn px-4 bg-warning">Proceed to buy</Link>
                        </div>



                    </div>
                </div>
            </div>
            <br />

            {/* <div className="container-fluid" style={{ backgroundColor: "white", padding: "20px 180px", marginBottom: "2px", marginTop: "50px" }}>
                <div className="row">
                    <div className="col paylogo">
                        <img src="../Images/payment_logos/Visa-Logo.png" alt="" />
                    </div>
                    <div className="col paylogo">
                        <img src="../Images/payment_logos/mastercard.png" alt="" />
                    </div>
                    <div className="col paylogo">
                        <img src="../Images/payment_logos/rupay.png" alt="" />
                    </div>
                    <div className="col paylogo">
                        <img src="../Images/payment_logos/cod.png" alt="" />
                    </div>
                    <div className="col paylogo">
                        <img src="../Images/payment_logos/paytm.png" alt="" />
                    </div>
                    <div className="col paylogo">
                        <img src="../Images/payment_logos/paypal.png" alt="" />
                    </div>
                    <div className="col paylogo">
                        <img src="../Images/payment_logos/bhim.png" alt="" />
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default CartPage;
