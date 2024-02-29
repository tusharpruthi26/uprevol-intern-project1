// BlogPost.js

import React from "react";

function BlogPost({ title, date, content }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-110 duration-150">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-4">{date}</p>
      <p className="text-gray-800">{content}</p>
    </div>
  );
}

export default BlogPost;
