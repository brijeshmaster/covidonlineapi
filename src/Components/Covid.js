

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Covid = () => {
  const [myrealdata, setmyrealdata] = useState({});
  const mycoviddata = async () => {
    try {
      const myapi = await fetch("https://data.covid19india.org/data.json");
      const newapi = await myapi.json();
      // console.log(newapi.statewise[0]);
      setmyrealdata(newapi.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    mycoviddata();
  });

  return (


    <>
      <div className="bg-red-200 w-[80vw] mx-auto h-[96vh] mt-3 mb-3 ">
        <div className="bg-red-100 flex flex-col items-center justify-center gap-8 w-full h-full">
          <h1 className=" font-bold text-3xl underline underline-offset-2">
            ONLINE COVID19
          </h1>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 h-[80vh] w-full ">
            <div className="h-40 w-40 flex justify-center items-center bg-[#ed1c24]">
              <div className="bg-[#f6d163] h-32 w-32 flex flex-col items-center gap-y-8 hover:scale-110 shadow-lg shadow-red-400">
                <h1 className="font-bold text-lg text-center pt-3">COUNTRY</h1>
                <p className="font-semibold text-base text-center">INDIA</p>
              </div>
            </div>
            <div className="h-40 w-40 flex justify-center items-center bg-[#ed1c24]">
              <div className="bg-[#f6d163]  h-32 w-32 flex flex-col items-center gap-y-8 hover:scale-110 ">
                <h1 className="font-bold text-lg text-center pt-3">
            
                  RECOVERED
                </h1>
                <p className="font-semibold text-base text-center">
                  
                  {myrealdata.recovered}
                </p>
              </div>
            </div>
            <div className="h-40 w-40 flex justify-center items-center bg-[#ed1c24]">
              <div className="bg-[#f6d163] h-32 w-32 flex flex-col items-center gap-y-8 hover:scale-110 ">
                <h1 className="font-bold text-lg text-center pt-3">
                  CONFIRMED
                </h1>
                <p className="font-semibold text-base text-center">
                  {myrealdata.confirmed}
                </p>
              </div>
            </div>
            <div className="h-40 w-40 flex justify-center items-center bg-[#ed1c24]">
              <div className="bg-[#f6d163] h-32 w-32 flex flex-col items-center gap-y-8 hover:scale-110 ">
                <h1 className="font-bold text-lg text-center pt-3">DEATH</h1>
                <p className="font-semibold text-base text-center">
                  {myrealdata.deaths}
                </p>
              </div>
            </div>
            <div className="h-40 w-40 flex justify-center items-center bg-[#ed1c24]">
              <div className="bg-[#f6d163] h-32 w-32 flex flex-col items-center gap-y-8 hover:scale-110 ">
                <h1 className="font-bold text-lg text-center pt-3"> ACTIVE</h1>
                <p className="font-semibold text-base text-center">
                  {myrealdata.active}
                </p>
              </div>
            </div>
            <div className="h-40 w-40 flex justify-center items-center bg-[#ed1c24]">
              <div className="bg-[#f6d163] h-32 w-32 flex flex-col items-center gap-y-8 hover:scale-110 ">
                <h1 className="font-bold text-lg text-center pt-3"> UPDATED</h1>
                <p className="font-semibold text-base text-center">
                  {myrealdata.lastupdatedtime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Covid;
