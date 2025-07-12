import React, { useState } from "react";
import axios from "axios";

const AddProducts = () => {
  const [productname, setProductName] = useState("");
  const [productdescription, setDescription] = useState("");
  const [productcost, setProductCost] = useState("");
  const [productphoto, setProductPhoto] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    setLoading("Relax Broo!!");
    try {
      const data = new FormData();
      data.append("product_name", productname);
      data.append("product_description", productdescription);
      data.append("product_cost", productcost);
      data.append("product_photo", productphoto);

      const response = await axios.post(
        "https://ashtm3.pythonanywhere.com/api/add_products",
        data
      );

      setLoading("");
      //set success message

      setSuccess(response.data.message);
    } catch (error) {
      setLoading("");
      setError("Failed to upload");
    }
  };

  return (
    <div className="row justify-content-center mt-3">
      <div className="col-md-6 card shadow-lg">
        <h2 className="pt-3">
          <b>Upload Products</b>
        </h2>
        <form action="" onSubmit={submit}>
          {error}
          {success}
          {loading}

          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Name"
            onChange={(e) => setProductName(e.target.value)}
            required
            value={productname}
          />
          <br />
          <div>
            <textarea
              className="form-control"
              rows="2"
              placeholder="Describe your product"
              onChange={(e) => setDescription(e.target.value)}
              required
              value={productdescription}
            ></textarea>
          </div>

          <br />
          <input
            type="number"
            className="form-control"
            placeholder="Enter Product Cost"
            onChange={(e) => setProductCost(e.target.value)}
            required
            value={productcost}
          />
          <br />
          <span>
            <b>Browse/Upload Product Image</b>
          </span>
          <br />

          <input
            type="file"
            accept="image/*"
            placeholder="Browse..."
            className="form-control"
            required
            onChange={(e) => setProductPhoto(e.target.files[0])}
          />
          <br />
          <button className="btn btn-primary" type="submit">
            Upload Product
          </button>
        </form>
        <br />
      </div>
    </div>
  );
};

export default AddProducts;
