import Property1click from "./Property1click";

const DashboardContainer = () => {

  return (
    <div className="h-[980px] w-[1512px]  text-left text-[20px] text-black font-product-sans ">
      <div className="absolute top-[39.59px] left-[0px] w-56 flex flex-col items-center justify-center gap-[17px] ">
        <img
          className="h-[30px] w-[56px]"
          alt=""
          src="/group-6.svg"
        />
        <div
          className="flex flex-row items-center justify-center py-4 px-9 box-border text-left text-xl text-black font-product-sans self-stretch"
        >
          <div className="relative">Dashboard</div>
        </div>
        <div
          className="self-stretch relative h-14 cursor-pointer"
        >
          <div className="absolute top-[16px] left-[37px]">
            Co-managers list
          </div>
        </div>
        <div
          className="self-stretch flex flex-row items-center justify-center py-4 px-9 cursor-pointer"
        >
          <div className="relative">Members list</div>
        </div>
        <Property1click
          pageTitle="Projects list"
          property1clickPosition="relative"
        />
        <div
          className="self-stretch flex flex-row items-center justify-center py-4 px-9 cursor-pointer"
        >
          <div className="relative">My account</div>
        </div>
      </div>
      <div
        className="fixed h-[5.3%] w-[220px] right-[0%] bottom-[0%] left-[0%] box-border overflow-hidden flex flex-row items-center justify-center pt-2 px-0 pb-0 gap-[24px] cursor-pointer border-t-[1px] border-solid border-gray"
      >
        <div className="fixed bottom-[-30px] p-4 w-full xl:w-1/6 sm:w-1/6 border-t justify-center flex items-center border-t-black">
          <img
            className="relative w-[24.8px] h-[23.3px]"
            alt=""
            src="/icon.svg"
          />
          <p
            onClick={() => {
              logOutHandler();
            }}
            className="cursor-pointer"
          >
            Log out
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardContainer;
