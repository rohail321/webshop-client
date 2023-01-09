import React from "react";
import { Card, Button } from "antd";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import imagee from '../../asset/1.jpg'

const { Meta } = Card;

const Product = ({
  product,
  description,
  uploadImages,
  link,
  thumbnail,
  showBtn,
}) => {
  return (
    <div style={{ padding: "10px" }}>
      <Link to={link || ""}>
        <Card
          hoverable
          style={{ width: 300 }}
          cover={<img alt="example" src={imagee} />}
        >
          <Meta title={product.name} description={description} />
          {showBtn && (
            <Link className="btn btn-primary" to={uploadImages}>
              Add Images
            </Link>
          )}
        </Card>
      </Link>
    </div>
  );
};

Product.propTypes = {
  product: propTypes.object.isRequired,
  // description: propTypes.func.isRequired,
  // buttonName: propTypes.string,
};

export default Product;
