import React from 'react'
import "./styles/product-card.scss"
function ProductCard({image,title}) {
  return (
    <div className="col p-2 product-card">
      <img src={image} alt="" />
      <h5>{title}</h5>
    </div>
  )
}

export default ProductCard
