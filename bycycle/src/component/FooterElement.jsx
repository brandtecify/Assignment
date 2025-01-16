import React from "react";

const FooterElement = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-transparent text-white fixed bottom-0 left-0 w-full">
      {/* First Div - Text */}
      <div className="flex items-center justify-center w-1/3">
        <div className="text-lg font-semibold">@ansd</div>
      </div>

      <div className="flex flex-col items-center justify-center w-1/3 space-y-2">
  {/* Oval Div with Border */}
  <div className="w-7 h-12 border-2 border-white flex flex-col items-center justify-center rounded-full text-white font-semibold">
    
    {/* Circle inside the Oval */}
    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center mt-2">
      {/* Small Circle */}
    </div>
  </div>
 </div>



 <div className="flex justify-end w-1/4 space-x-2 mx-10 p-5"> {/* Adjusted space-x-2 for reduced space */}
  <div>
    <div className="text-sm font-semibold">fn</div>
  </div>
  <div>
    <div className="text-sm font-semibold">mf</div>
  </div>
  <div>
    <div className="text-sm font-semibold">jf</div>
  </div>
</div>
    </div>
  );
};

export default FooterElement;
