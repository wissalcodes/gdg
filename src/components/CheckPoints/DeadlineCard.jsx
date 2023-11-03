import { useState, useMemo, useCallback } from "react";

const DeadlineCard = ({
  checkpointLabel,
  propTop,
  onOutlineInterfacePlusIconClick,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);


  return (
    <>
      <div
        className="absolute top-[153px] left-[32px] w-[492px] h-[300px] text-left text-base text-black font-product-sans"
        style={groupDivStyle}
      >
        <img
          className="absolute top-[0px] left-[0px] rounded-2xl w-[492px] h-[300px]"
          alt=""
          src="/rectangle-27.svg"
        />
        <img
          className="absolute top-[63.6px] left-[424px] w-9 h-[40.9px] cursor-pointer"
          alt=""
          src="/outlineinterfaceplus1.svg"
          onClick={onOutlineInterfacePlusIconClick}
        />
        <b className="absolute top-[13.6px] left-[32px] text-xl inline-block w-[177px] h-[33px]">
          {checkpointLabel}
        </b>
        <div className="absolute top-[70.5px] left-[32px] inline-block w-[58px] h-[26.1px]">
          Tasks
        </div>
        <div className="absolute top-[107.5px] left-[31.5px] box-border w-[429px] h-px border-t-[1px] border-solid border-blue" />
        <div
          className="absolute top-[136.4px] left-[32px] rounded bg-whitesmoke w-[428px] h-[50px] cursor-pointer"
          
        />
        <div
          className="absolute top-[200.4px] left-[32px] rounded bg-whitesmoke w-[428px] h-[50px] cursor-pointer"
          
        />
        <div className="absolute top-[152.3px] left-[57px] text-blue inline-block w-[39px] h-[17px]">
          Task1
        </div>
        <div className="absolute top-[215.9px] left-[57px] text-blue inline-block w-[39px] h-[17px]">
          Task2
        </div>
        
        <img
          className="absolute top-[148.7px] left-[408px] rounded-[50%] w-6 h-6 object-cover"
          alt=""
          src="/ellipse-71@2x.png"
        />
        <img
          className="absolute top-[212.4px] left-[408px] rounded-[50%] w-6 h-6 object-cover"
          alt=""
          src="/ellipse-10@2x.png"
        />
        <img
          className="absolute top-[148.7px] left-[394px] rounded-[50%] w-6 h-6 object-cover"
          alt=""
          src="/ellipse-61@2x.png"
        />
        <img
          className="absolute top-[212.4px] left-[394px] rounded-[50%] w-6 h-6 object-cover"
          alt=""
          src="/ellipse-11@2x.png"
        />
        <div className="absolute top-[42px] left-[32px] text-lg text-gray">{`Deadline : 10 Oct 2023 at 20:33 `}</div>
      </div>
      
    </>
  );
};

export default DeadlineCard;
