import React from "react";

function CardTest(props) {
  return (
    <div className="">
        <div  className="mx-auto h-72 w-98">
           <img className="h-full w-full border-[15px] hover:p-8 border-gray-600 rounded-3xl" src={props.img} alt="" />
        </div>
        {/* <div>
            {props.name}
        </div>
        <div>
            {props.description}
        </div> */}
    </div>
  );
}

export default CardTest;
