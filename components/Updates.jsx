import React, { useEffect, useState } from "react";

const Updates = ({data}) => {
  return (
    <div className="bg-black px-24 py-1 overflow-scroll">
      <ul className="text-white flex justify-between">
        {data && data.map((stock, index) => (
          <li key={index} className="space-x-6">
            <span>{stock.stockname}</span>
            <span>{stock.cost}</span>
            <span className="text-green-600">{stock.percent}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Updates;
