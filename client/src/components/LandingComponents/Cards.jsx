import React from "react";





const Card = ({ cardInfo }) => {
  console.log(cardInfo.imageSource)
  return (
    <div className="my-4 w-full max-h-[27rem] bg-slate-200 rounded-xl p-4 shadow-2xl duration-300 hover:scale-105">
      <img src={cardInfo.imageSource} alt="" className="mx-auto w-full max-h-[20rem]" />
      <div className="flex justify-between items-center">
         <p className="py-2 text-center text-4xl font-bold">{cardInfo.title}</p>
         <p className="text-center text-4xl font-bold">{cardInfo.price}</p>
      </div>
      <div className="flex justify-evenly items-center">
         <p className="py-2 mx-2 text-center text-2xl font-semibold text-gray-600">{cardInfo.storageCapacity}</p><p className="text-center text-2xl font-semibold text-gray-600">{cardInfo.usersAllowed}</p>
      </div>

      {/* <div className="mt-8 text-center font-medium">
        <ol>
          <li>{cardInfo.storageCapacity}</li>
          <li>{cardInfo.usersAllowed}</li>
          <li>{cardInfo.sendUpTo}</li>
        </ol>
        <TextButton text="Start trial" type="secondary" />
      </div> */}
    </div>
  );
};

const Cards = () => {
  

  return (
    <></>
  );
};

export default Card;
