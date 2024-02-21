import React from "react";

export default function Card({ imageUrl, title, rating, price, productId }) {
  const addToCart = () => {
    // Send a POST request to your backend to add the product to the cart
    fetch("http://localhost:3000/cart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId, // Add productId to the request body
        name: title, // Assuming title represents the name of the product
        price: parseFloat(price.replace("₹", "").replace(",", "")), // Parse the price string to a number
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Product added to cart successfully");
        } else {
          console.error("Failed to add product to cart");
        }
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
      });
  };

  return (
    <div className="card w-full px-7" style={{ width: "30rem" }}>
      <img src={imageUrl} alt={title} className="rounded-3xl" />
      <div>
        <p className="text-gray-400">Safety Equipment</p>
        <p className="font-semibold">{title}</p>
        <p>{rating}</p>
        <p className="text-gray-600 font-semibold">{price}</p>
        <button
          className="text-red-600 hover:bg-red-600 hover:text-white border border-red-600 text-xl px-6 py-2 mt-3"
          onClick={addToCart}
        >
          ADD TO CART
        </button>
        <button className="text-white bg-red-600 px-24 mt-3">
          ENQUIRY NOW
        </button>
      </div>
    </div>
  );
}

export function CardList() {
  const cards = [
    {
      imageUrl:
        "https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09",
      title: "Pendent Type Sprinkler",
      rating: "★ ★ ★ ★ ★",
      price: "₹215.00",
    },
    {
      imageUrl:
        "https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09",
      title: "Karam Safety Belts",
      rating: "★ ★ ★ ★ ★",
      price: "₹1,670.00",
    },
    {
      imageUrl:
        "https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09",
      title: "Disposable Nitrile Gloves",
      rating: "★ ★ ★ ★ ★",
      price: "₹210.00",
    },
    {
      imageUrl:
        "https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09",
      title: "Fire Escape Aluminum Rope Ladder",
      rating: "★ ★ ★ ★ ★",
      price: "₹2,500.00",
    },
    // Add more cards as needed
  ];

  return (
    <div className="flex bg-gray-100 px-18 py-20">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
