import React from "react";

export default function Card({ imageUrl, title, rating, price }) {
  return (
    <div className="card w-full px-7" style={{ width: "30rem" }}>
      <img src={imageUrl} alt={title} className="rounded-3xl" />
      <div>
        <p className="text-gray-400">Safety Equipment</p>
        <p className="font-semibold">{title}</p>
        <p>{rating}</p>
        <p className="text-gray-600 font-semibold">{price}</p>
        <button className="text-red-600 hover:bg-red-600 hover:text-white border border-red-600 text-xl px-6 py-2 mt-3">
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
        "https://www.monolithsafetyexperts.com/wp-content/uploads/2024/01/pendent-type-sprinkler-500x500-2.webp",
      title: "Pendent Type Sprinkler",
      rating: "★ ★ ★ ★ ★",
      price: "₹215.00",
    },
    {
      imageUrl:
        "https://www.monolithsafetyexperts.com/wp-content/uploads/2024/01/fire-extinguisher-500x500-1-300x300.webp",
      title: "Karam Safety Belts",
      rating: "★ ★ ★ ★ ★",
      price: "₹1,670.00",
    },
    {
      imageUrl:
        "https://www.monolithsafetyexperts.com/wp-content/uploads/2024/01/fire-hose-reel-500x500-2-300x300.webp",
      title: "Disposable Nitrile Gloves",
      rating: "★ ★ ★ ★ ★",
      price: "₹210.00",
    },
    {
      imageUrl:
        "https://www.monolithsafetyexperts.com/wp-content/uploads/2024/01/fire-escape-aluminum-rope-ladder-500x500-1-300x300.webp",
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
