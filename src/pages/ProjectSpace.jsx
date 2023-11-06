import TeamMembersContainer from "../components/TeamMembers/TeamMembersContainer";
import DashboardContainer from "../components/Layout/DashboardContainer";
import CheckpointsForm from "../components/CheckPoints/CheckpointsForm";
import ReportProjectContainer from "../components/ReportProject/ReportProjectContainer";
import ProjectNameSpace from "../components/ProjectNameSpace/ProjectNameSpace";
const ProjectSpace = () => {
  return (
    <div className=" items-center justify-center flex flex-col  bg-white w-full text-left text-xl text-black font-product-sans ">
      <div className=" rounded-2xl bg-white shadow-[0px_-49px_14px_rgba(214,_214,_214,_0),_0px_-31px_12px_rgba(214,_214,_214,_0.01),_0px_-18px_11px_rgba(214,_214,_214,_0.05),_0px_-8px_8px_rgba(214,_214,_214,_0.09),_0px_-2px_4px_rgba(214,_214,_214,_0.1)] w-[1022px] h-[284px]" />
      <ProjectNameSpace />
      {/* <DashboardContainer /> */}
      <b className=" top-[430px] left-[298px] text-13xl flex text-center items-center justify-center w-[227px]">
        Team Members
      </b>
      <TeamMembersContainer />
      <div className=" top-[427px] left-[930px] rounded-lg bg-blue w-[277px] h-[46px] flex flex-row items-center justify-center p-5 box-border text-center text-white">
        <div className="relative">Create application template</div>
      </div>
      <img className="  w-24 h-9" alt="" src="/group-28.svg" />
      {/* <CheckpointsForm /> */}
      <div className=" top-[877px] left-[266px] flex flex-row items-end justify-start gap-[24px]">
        <ReportProjectContainer />
      </div>
      <img
        className=" h-[1.3%] w-[1.2%] top-[75.37%] right-[59.79%] bottom-[23.33%] left-[39.01%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/icon1.svg"
      />
      <img
        className=" h-[1.3%] w-[1.2%] top-[76.3%] right-[59.79%] bottom-[22.41%] left-[39.01%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/icon1.svg"
      />
      <div className=" top-[796px] left-[298px] flex flex-row items-center justify-center p-2.5 text-center text-13xl">
        <b className="relative">Report project</b>
      </div>
      <div className=" top-[808px] left-[1054px] bg-white w-[200px] h-11 text-lg text-white font-inter">
        <div className=" top-[0px] left-[0px] rounded-3xs bg-dodgerblue-100 box-border w-[198px] h-[49px] border-[2px] border-solid border-blue" />
        <img
          className=" h-[32.27%] w-[7.9%] top-[45%] right-[80.6%] bottom-[22.73%] left-[11.5%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-icon-add.svg"
        />
        <b className=" top-[15px] left-[47px] inline-block w-32 h-[19px]">
          Add report
        </b>
      </div>
    </div>
  );
};

export default ProjectSpace;
