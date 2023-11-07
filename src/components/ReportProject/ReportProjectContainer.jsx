import Data from "./Data";
import Report from "./Report";
const ReportProjectContainer = () => {
  const NewReport = Data.map(thing => {
    return (
      <Report
        key={thing.id}
        {...thing}
      />
    )
  })
  return (
    <div className="flex flex-row items-end justify-start gap-[24px]">
      <div className="flex flex-row items-center justify-center p-2.5 text-center text-13xl">
        <b className="relative">Report project</b>
      </div>
      {NewReport}
    </div>

  );
};

export default ReportProjectContainer;
