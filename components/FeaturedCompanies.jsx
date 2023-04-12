import React from "react";

const FeaturedCompanies = ({ companies }) => {
  return (
    <div className="bg-gray-100">
      <h1 className="header mx-9 py-2">Featured Companies</h1>
      <div className=" px-9 flex overflow-scroll space-x-6 bg-blue-100 py-2">
        {companies &&
          companies.map((company, index) => (
            <img
              src={company.company}
              alt="companies"
              key={index}
              className="lg:rounded-none rounded-full"
            />
          ))}
      </div>
    </div>
  );
};

export default FeaturedCompanies;
