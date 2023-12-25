import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyOrder() {
  const [orderData, setOrderData] = useState({});

  const fetchMyOrder = async () => {
    console.log(localStorage.getItem("userEmail"));
    await fetch("http://localhost:5000/api/myOrderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    }).then(async (res) => {
      let response = await res.json();
      await setOrderData(response);
      console.log(response);
    });
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          {orderData && Object.keys(orderData).length > 0 ? (
            orderData.orderData.order_data.map((order, index) => (
              <div key={index}>
                {order.map((arrayData, innerIndex) => (
                  <div key={innerIndex}>
                    {arrayData.Order_date ? (
                      <div className="m-auto mt-5">
                        {arrayData.Order_date}
                        <hr />
                      </div>
                    ) : (
                      <div className="col-12 col-md-6 col-lg-3">
                        <div
                          className="card mt-3"
                          style={{
                            width: "16rem",
                            maxHeight: "360px",
                          }}
                        >
                        
                          <div className="card-body">
                            <h5 className="card-title">{arrayData.name}</h5>
                            <div
                              className="container w-100 p-0"
                              style={{ height: "38px" }}
                            >
                              <span className="m-1">{arrayData.qty}</span>
                              <span className="m-1">{arrayData.size}</span><br />
                              <span className="m-1">{arrayData.Order_date}</span>
                              <div className=" d-inline ms-2 h-100 w-20 fs-5">
                                ₹{arrayData.price}/-
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div>No order data available.</div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
