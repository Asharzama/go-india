import Body from "@/components/Body";
import FeaturedCompanies from "@/components/FeaturedCompanies";
import Navbar from "@/components/Navbar";
import Updates from "@/components/Updates";
import { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";

export default function Home() {
  const [fetchedData, setFetchedData] = useState({});
  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => setFetchedData(data));
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <Updates data={fetchedData.StockData} />
      <FeaturedCompanies companies={fetchedData.FeaturedCompanies} />
      <Body disscussion={fetchedData.Forum} stories={fetchedData.Stories} />
      <div className="fixed left-[92vw] top-[90vh] rounded-full p-6 bg-sky-900 cursor-pointer">
        <BsPlusLg size={30} color="white" />
      </div>
    </div>
  );
}
