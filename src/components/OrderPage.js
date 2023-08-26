import React from "react";
import OrderItem from "./Orders/OrderItem";

function OrderPage() {
    return (
        <div className="container-fluid m-0">
            <br />
            <h1 className="container">Orders Page</h1>
            <hr />
            <div className="row p-4">
                {/* <div className="col-lg-4 col-sm-4 me-4">
                    <form className="searchbox d-lg-flex me-auto" role="search">
                        <input className="form-control" type="search" placeholder="Search your orders" aria-label="Search" />
                        <button className="btn mx-2 btn-outline-dark" type="submit">Search</button>
                    </form>
                    <div className="container" style={{ backgroundColor: "rgba(172, 172, 172, 0.704)", marginTop: "50px", padding: "20px 10px", height: "300px", width: "auto" }}>
                        Related/Recent products <br />
                        Or <br />
                        Advertisement section, etc <br />
                    </div>
                </div> */}
                <div className="col-lg-7 col-sm-4">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-bs-toggle="tab" href="#orders">All Orders</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#dispatch">Not Yet Dispatched</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#cancel">Cancelled</a>
                        </li>
                    </ul>

                    {/* <!-- Tab panes --> */}
                    <div className="tab-content">
                        <div id="orders" className="container tab-pane active"><br />
                            <OrderItem />
                            <OrderItem/>
                        </div>
                        <div id="dispatch" className="container tab-pane fade"><br />
                            <br />
                            <p>Orders that are in-process and have to be dispatched and delivered soon</p>
                        </div>
                        <div id="cancel" className="container tab-pane fade"><br />
                            {/* <br> <!-- If cancelled orders = 0 --> */}
                            <p>No cancelled orders</p>
                            {/* <!-- Or else display order card as above --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderPage;
