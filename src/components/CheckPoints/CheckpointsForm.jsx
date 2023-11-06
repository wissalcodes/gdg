import DeadlineCard from "./DeadlineCard";

const CheckpointsForm = () => {
  return (
    <div className="absolute top-[154px] left-[1294px] rounded-2xl bg-whitesmoke w-full h-[877px] overflow-hidden text-left text-5xl text-black font-product-sans ">
      <div className="absolute top-[32px] left-[32px] font-product-sans-medium ">
        Checkpoints
      </div>
      <div className="absolute top-[77px] left-[32px] text-lg text-gray">{`Deadline : 10 Oct 2023 at 20:33 `}</div>
      <img
        className="absolute top-[27px] left-[506px] w-9 h-[40.9px] cursor-pointer"
        alt=""
        src="/outlineinterfaceplus2.svg"
      />
      <DeadlineCard checkpointLabel="Checkpoint 1" />
      <DeadlineCard checkpointLabel="Checkpoint 2" propTop="509px" />
      <img
        className="absolute top-[150.3px] left-[549.5px] w-6 h-[666.7px]"
        alt=""
        src="/group-427318974.svg"
      />
    </div>
  );
};

export default CheckpointsForm;
