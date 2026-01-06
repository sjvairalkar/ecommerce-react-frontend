import React from 'react'

const ProductCart = ({ product }) => {
    return (
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto object-contain"
            />
            <h3 className="font-semibold mt-2 line-clamp-2">
                {product.title}
            </h3>
            <p className="text-green-600 font-bold mt-1">
                ₹{product.price}
            </p>
            <button className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                Add to Cart
            </button>
        </div>
    )
}

export default ProductCart
