import React from "react";
import { Link } from "react-router-dom";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes"  className="w-[350px] h-[400px]"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title flex justify-between">
              {item.name}
              <div className="badge badge-secondary w-[100px] whitespace-nowrap"><p>{item.category}</p></div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              
              <Link to="/view-pdf" state={{url:item.bookLink}}><div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Read Now
              </div></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
