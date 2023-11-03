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
    <>
      {NewReport}
    </>

  );
};

export default ReportProjectContainer;
