import React from "react";

const Card = () => {
  return (
    <div className="fixed bottom-4 right-4 w-64 h-auto bg-transparent p-4 rounded-2xl shadow-lg bg-white/10 mb-12">
      {/* Image Section with 3 Images in the Same Row */}
      <div className="flex items-center space-x-3 mb-4 bg-transparent rounded-2xl p-2">
        <div className="w-16 h-16 bg-white bg-opacity-70 rounded-full flex items-center justify-center shadow-lg">
          <img
            src="https://via.placeholder.com/30"
            alt="icon 1"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="w-16 h-16 bg-white bg-opacity-70 rounded-full flex items-center justify-center shadow-lg">
          <img
            src="https://via.placeholder.com/30"
            alt="icon 2"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="w-16 h-16 bg-white bg-opacity-70 rounded-full flex items-center justify-center shadow-lg">
          <img
            src="https://via.placeholder.com/30"
            alt="icon 3"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Users Text */}
        <div className="font-semibold text-white mb-2 bg-transparent p-2 rounded-2xl flex-shrink-0">
          <div className="text-xl">4.5K Users</div>
        </div>
      </div>

      {/* Lorem Text */}
      <div className="text-xs text-white mb-4 bg-transparent p-2 rounded-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae urna et augue euismod scelerisque.
      </div>

      {/* Submit Your Review Section and Icon */}
      <div className="flex items-center justify-between text-white bg-transparent p-2 rounded-2xl">
        <div className="text-xs font-semibold">Submit Your Review</div>
        <div className="w-8 h-8 bg-white bg-opacity-70 rounded-full flex items-center justify-center shadow-lg">
          <img
            src="https://via.placeholder.com/30"
            alt="logo"
            className="w-6 h-6 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
