import TeamMembersContainer from "../components/TeamMembers/TeamMembersContainer";
import DashboardContainer from "../components/Layout/DashboardContainer";
import CheckpointsForm from "../components/CheckPoints/CheckpointsForm";
import ReportProjectContainer from "../components/ReportProject/ReportProjectContainer";
import ProjectNameSpace from "../components/ProjectNameSpace/ProjectNameSpace";
import ApplicationTemp from "../components/ApplicationTemp/ApplicationTemp";

const ProjectSpace = () => {

  return (
    <div className=" bg-white w-full h-[100vh] text-xl text-black font-product-sans flex flex-col">
      <div className="rounded-2xl bg-white shadow-[0px_-49px_14px_rgba(214,_214,_214,_0),_0px_-31px_12px_rgba(214,_214,_214,_0.01),_0px_-18px_11px_rgba(214,_214,_214,_0.05),_0px_-8px_8px_rgba(214,_214,_214,_0.09),_0px_-2px_4px_rgba(214,_214,_214,_0.1)] w-[1022px] h-[284px]" />
      <img
        className="absolute top-[54px] left-[1740px] w-24 h-9"
        alt=""
        src="/group-28.svg"
      />
      <ProjectNameSpace />
      <DashboardContainer />
      <TeamMembersContainer />
      <ApplicationTemp />
      <CheckpointsForm />

      <ReportProjectContainer />

     
      <img
        className="h-[1.3%] w-[1.2%] top-[76.3%] right-[59.79%] bottom-[22.41%]  max-w-full overflow-hidden max-h-full"
        alt=""
        src="/two-up-arrows.svg"
      />
      <div className="absolute top-[808px] left-[1054px] bg-white w-[200px] h-11 text-lg text-white font-inter">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-dodgerblue-100 box-border w-[198px] h-[49px] border-[2px] border-solid border-blue" />
        <img
          className="absolute h-[32.27%] w-[7.9%] top-[45%] right-[80.6%] bottom-[22.73%] left-[11.5%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-icon-add.svg"
        />
        <b className="absolute top-[15px] left-[47px] inline-block w-32 h-[19px]">
          Add report
        </b>
      </div>
    </div>
  );
};

export default ProjectSpace;
