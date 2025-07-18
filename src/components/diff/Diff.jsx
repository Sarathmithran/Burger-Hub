import React from "react";

const Diff = () => {
  return (
    <figure className="diff aspect-16/3 md:aspect-16/1" tabIndex={0}>
      <div className="diff-item-1" role="img" tabIndex={0}>
        <div className="bg-orange-600 text-primary-content grid place-content-center text-7xl font-black">
          BURGER
        </div>
      </div>
      <div className="diff-item-2" role="img">
        <div className="bg-base-200 grid place-content-center text-7xl font-black">
          HUB
        </div>
      </div>
      <div className="diff-resizer"></div>
    </figure>
  );
};

export default Diff;
