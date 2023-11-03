import { useMemo } from "react";

const Property1click = ({ pageTitle, property1clickPosition }) => {
  const property1clickStyle = useMemo(() => {
    return {
      position: property1clickPosition,
    };
  }, [property1clickPosition]);

  return (
    <div
      className="bg-dodgerblue-200 h-14 text-left text-xl text-blue font-product-sans self-stretch"
      style={property1clickStyle}
    >
      <div className="absolute top-[16px] left-[65px]">{pageTitle}</div>
      <img
        className="absolute top-[5.2px] left-[0px] rounded-12xs-5 w-1.5 h-[46px]"
        alt=""
        src="/rectangle-411.svg"
      />
    </div>
  );
};

export default Property1click;
