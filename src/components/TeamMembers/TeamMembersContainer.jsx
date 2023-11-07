import TeamMembersContainer1 from "./TeamMembersContainer1"
import Data from "./Data";
const TeamMembersContainer = () => {
  const NewMember = Data.map(member => {
    return (
      <TeamMembersContainer1
        key={member.id}
        {...member}
      />
    )
  })
  return (
    <>
      <b className="absolute top-[430px] left-[298px] text-13xl flex text-center items-center justify-center w-[227px]">
        Team Members
      </b>
      <img
        className="absolute h-[1.3%] w-[1.2%] top-[76.3%] right-[59.79%] bottom-[22.41%]  max-w-full overflow-hidden max-h-full"
        alt=""
        src="/two-up-arrows.svg"
      />
      <div className="absolute top-[507px] left-[266px] w-[1038px] flex flex-row items-start justify-start gap-[16px] text-center text-xl text-red font-product-sans">
        <div className="w-[30px] h-[246px] flex flex-row items-center justify-between">
          <img
            className="relative w-[30px] h-[30px] object-cover"
            alt=""
            src="/icons8back30-1@2x.png"
            
          />
        </div>
        {NewMember}

        <div className="w-[30px] h-[246px] flex flex-row items-center justify-between">
          <img
            className="relative w-[30px] h-[30px] object-cover"
            alt=""
            src="/icons8forward30-1@2x.png"
          />
        </div>
      </div>
    </>
  );
};

export default TeamMembersContainer;
