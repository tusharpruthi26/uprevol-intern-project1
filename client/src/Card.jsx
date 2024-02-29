// import React, { useState } from "react";

// export default function Card({ imageUrl, title, rating, price }) {
//   const [isAddedToCart, setIsAddedToCart] = useState(false);
//   const [showEnquiryForm, setShowEnquiryForm] = useState(false);

//   const addToCart = () => {
//     // Here you can add logic to send data to the backend and update UI accordingly
//     // For simplicity, just updating UI to show item is added to cart
//     setIsAddedToCart(true);
//   };

//   const handleEnquiryButtonClick = () => {
//     // Show enquiry form
//     setShowEnquiryForm(true);
//   };

//   const handleFormSubmit = async (formData) => {
//     try {
//       const response = await fetch("http://localhost:3000/enquiry", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...formData,
//           imageUrl,
//           title,
//           rating,
//           price,
//         }),
//       });
//       if (response.ok) {
//         console.log("Enquiry submitted successfully");
//         setShowEnquiryForm(false);
//       } else {
//         console.error("Failed to submit enquiry");
//       }
//     } catch (error) {
//       console.error("Error submitting enquiry:", error);
//     }
//   };

//   return (
//     <div className="card w-full px-7" style={{ width: "30rem" }}>
//       <img src={imageUrl} alt={title} className="rounded-3xl" />
//       <div>
//         <p className="text-gray-400">Safety Equipment</p>
//         <p className="font-semibold">{title}</p>
//         <p>{rating}</p>
//         <p className="text-gray-600 font-semibold">{price}</p>
//         {!isAddedToCart ? (
//           <button
//             className="text-gray-800 hover:bg-gray-800 hover:text-white border border-gray-800 text-xl px-6 py-2 mt-3"
//             // onClick={() => setShowEnquiryForm(true)}
//             onClick={addToCart}
//           >
//             ADD TO CART
//           </button>
//         ) : (
//           <span className="text-green-600 text-xl mt-3">✔ Added to Cart</span>
//         )}
//         <button
//           className="text-white bg-gray-800 hover:bg-gray-700 px-24 mt-3"
//           // onClick={() => setShowEnquiryForm(true)}
//           onClick={handleEnquiryButtonClick}
//         >
//           ENQUIRY NOW
//         </button>
//       </div>
//       {showEnquiryForm && <EnquiryForm onSubmit={handleFormSubmit} />}
//     </div>
//   );
// }

// function EnquiryForm({ onSubmit }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//     >
//       <input
//         className="block text-gray-700 text-sm font-bold mb-2 rounded w-full"
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={formData.name}
//         onChange={handleChange}
//       />
//       <input
//         className="block text-gray-700 text-sm font-bold mb-2 rounded w-full"
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       <textarea
//         className="block text-gray-700 text-sm font-bold mb-2 rounded w-full"
//         name="message"
//         placeholder="Message"
//         value={formData.message}
//         onChange={handleChange}
//       />
//       <div className="text-center">
//         <button
//           className="bg-gray-800 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
//           type="submit"
//         >
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// }

// export function CardList() {
//   const cards = [
//     {
//       imageUrl:
//         "https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09",
//       title: "Pendent Type Sprinkler",
//       rating: "★ ★ ★ ★ ★",
//       price: "₹215.00",
//     },
//     {
//       imageUrl:
//         "https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09",
//       title: "Karam Safety Belts",
//       rating: "★ ★ ★ ★ ★",
//       price: "₹1,670.00",
//     },
//     {
//       imageUrl:
//         "https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09",
//       title: "Disposable Nitrile Gloves",
//       rating: "★ ★ ★ ★ ★",
//       price: "₹210.00",
//     },
//     {
//       imageUrl:
//         "https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09",
//       title: "Fire Escape Aluminum Rope Ladder",
//       rating: "★ ★ ★ ★ ★",
//       price: "₹2,500.00",
//     },
//     // Add more cards as needed
//   ];

//   return (
//     <div className="flex bg-gray-100 px-18 py-20">
//       {cards.map((card, index) => (
//         <Card key={index} {...card} />
//       ))}
//     </div>
//   );
// }

import React, { useState } from "react";

export default function Card({ imageUrl, title, rating, price }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  const addToCart = () => {
    setIsAddedToCart(true);
  };

  const handleEnquiryButtonClick = () => {
    setShowEnquiryForm(true);
  };

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch("http://localhost:3000/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          imageUrl,
          title,
          rating,
          price,
        }),
      });
      if (response.ok) {
        console.log("Enquiry submitted successfully");
        setShowEnquiryForm(false);
      } else {
        console.error("Failed to submit enquiry");
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
    }
  };

  return (
    <div className="card w-full px-7" style={{ width: "30rem" }}>
      <img src={imageUrl} alt={title} className="rounded-3xl" />
      <div>
        {/* Card content */}
        {!isAddedToCart ? (
          <button
            className="text-gray-800 hover:bg-gray-800 hover:text-white border border-gray-800 text-xl px-6 py-2 mt-3"
            onClick={addToCart}
          >
            ADD TO CART
          </button>
        ) : (
          <span className="text-green-600 text-xl mt-3">✔ Added to Cart</span>
        )}
        <button
          className="text-white bg-gray-800 hover:bg-gray-700 px-24 mt-3"
          onClick={handleEnquiryButtonClick}
        >
          ENQUIRY NOW
        </button>
      </div>
      {/* Enquiry form modal */}
      {showEnquiryForm && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => setShowEnquiryForm(false)}
            ></div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full mx-4">
              <div className="flex justify-end">
                <button
                  className="p-2"
                  onClick={() => setShowEnquiryForm(false)}
                >
                  &times;
                </button>
              </div>
              <div className="p-4">
                <EnquiryForm onSubmit={handleFormSubmit} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function EnquiryForm({ onSubmit }) {
  // Enquiry form component code remains unchanged
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <input
        className="block text-gray-700 text-sm font-bold mb-2 rounded w-full"
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className="block text-gray-700 text-sm font-bold mb-2 rounded w-full"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        className="block text-gray-700 text-sm font-bold mb-2 rounded w-full"
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
      />
      <div className="text-center">
        <button
          className="bg-gray-800 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
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
  ];
  return (
    <div className="flex bg-gray-100 px-18 py-20">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
