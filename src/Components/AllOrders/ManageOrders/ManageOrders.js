import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ManageOrder from "./ManageOrder";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("https://fast-everglades-79425.herokuapp.com/orderCollection")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  //Delete Purchases

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://fast-everglades-79425.herokuapp.com/orderCollection/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = allOrders.filter((order) => order._id !== id);
              setAllOrders(remaining);
            }
          });
      }
    });
  };

  //Handle status

  const handleConfirm = (id) => {
    console.log(id);
    // const newStatus = { status: 'confirmed' };
    // console.log(newStatus);

    const url = `http://localhost:5000/updateStatus/${id}`;
    fetch(url, {
      method: "put",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("first console", data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Order Successfully Confirmed",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });

          fetch("http://localhost:5000/orderCollection")
            .then((res) => res.json())
            .then((data) => setAllOrders(data));
        }
      });
  };
  return (
    <div>
      <h1>Total Orders : {allOrders.length}</h1>
      <div className="my-5">
        {
          <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-2 ms-5  ">
            {allOrders.map((order) => (
              <ManageOrder
                key={order._id}
                order={order}
                handleConfirm={handleConfirm}
                handleDelete={handleDelete}
              ></ManageOrder>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default ManageOrders;
