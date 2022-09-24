// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

// const Covid = () => {
//   const [newdata, setnewdata] = useState(null);
//   const [Loading, setLoading] = useState(false);

//   const myapidata = async () => {
//     try {
//       setLoading(true);
//       const apidata = await fetch("https://data.covid19india.org/data.json");

//       const newapi = await apidata.json();
//       // console.log(newapi)
//       setnewdata(newapi);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     myapidata();
//   }, []);

//   return (
//     <>
//       {Loading ? (
//         <h1>loading</h1>
//       ) : (
//         <>
//           {newdata && <p> data are : {newdata?.statewise[0]?.recovered}</p>}
//           {console.log(newdata)}
//         </>
//       )}
//     </>
//   );
// };

// export default Covid;

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Covid = () => {

  const [myrealdata, setmyrealdata] = useState({})
  const mycoviddata = async () => {
    try {
      const myapi = await fetch("https://data.covid19india.org/data.json");
      const newapi = await myapi.json();
      // console.log(newapi.statewise[0]);
      setmyrealdata(newapi.statewise[0])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    mycoviddata();
  });

  return (
    <>
      <div className="bg-red-50">
        <p className="text-center text-2xl p-20 m-4 text-red-800 font-bold underline underline-offset-4 from-transparent ">ONLINE COVID RESULT</p>
        <div className="grid grid-cols-3 bg-white w-[40em] gap-8 mx-auto place-items-center ">
          <div className="bg-red-700  text-cyan-50 w-[10em] h-[10em] text-center hover:scale-150 text-lg p-3 font-bold shadow-2xl rounded-xl shadow-3xl ">COUNTRY
          <div className=" text-center p-8 shadow-2xl"  >INDIA</div>
          </div>
          <div className="bg-red-700  text-cyan-50 w-[10em] h-[10em] text-center hover:scale-150 text-lg p-3 font-bold shadow-2xl rounded-xl shadow-3xl ">RECOVERED
          <div className=" text-center p-8 shadow-2xl"  >{myrealdata.recovered}</div>
          </div>
          <div className="bg-red-700  text-cyan-50 w-[10em] h-[10em] text-center hover:scale-150 text-lg p-3 font-bold shadow-2xl rounded-xl shadow-3xl ">CONFIRMED
          <div className=" text-center p-8 shadow-2xl"  >{myrealdata.confirmed}</div>
          </div>
          <div className="bg-red-700  text-cyan-50 w-[10em] h-[10em] text-center hover:scale-150 text-lg p-3 font-bold shadow-2xl rounded-xl shadow-3xl ">DEATH
          <div className=" text-center p-8 shadow-2xl"  >{myrealdata.deaths}</div>
          </div>
          <div className="bg-red-700  text-cyan-50 w-[10em] h-[10em] text-center hover:scale-150 text-lg p-3 font-bold shadow-2xl rounded-xl shadow-3xl ">ACTIVE
          <div className=" text-center p-8 shadow-2xl"  >{myrealdata.active}</div>
          </div>
          <div className="bg-red-700  text-cyan-50 w-[10em] h-[10em] text-center hover:scale-150 text-lg p-3 font-bold shadow-2xl rounded-xl shadow-3xl ">UPDATED
          <div className=" text-center p-8 shadow-2xl"  >{myrealdata.lastupdatedtime}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Covid;
