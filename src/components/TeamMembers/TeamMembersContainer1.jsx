import { useState, useMemo, useCallback } from "react";

const TeamMembersContainer1 = ({
  applicationButtonText,
  propBorder,
  propColor,
}) => {

  const frameDivStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const seeApplicationStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);


  return (
    <>
      <div className="relative rounded-2xl box-border w-[212px] h-[246px] overflow-hidden shrink-0 text-center text-xl text-red font-product-sans border-[1px] border-solid border-gray">
        <div
          className="absolute top-[186px] left-[15px] rounded-2xl bg-white box-border w-[182px] h-[50px] flex flex-row items-center justify-between p-2.5 cursor-pointer border-[1px] border-solid border-red"
          
          style={frameDivStyle}
        >
          <b className="relative" style={seeApplicationStyle}>
            {applicationButtonText}
          </b>
        </div>
        <div className="absolute top-[136px] left-[27px] text-black text-left inline-block w-[158px] h-[22px]">{`Name of member `}</div>
        <img
          className="absolute top-[36px] left-[66px] rounded-[50%] w-20 h-20 object-cover"
          alt=""
          src="/ellipse-19@2x.png"
        />
      </div>
      
      
    </>
  );
};

export default TeamMembersContainer1;
