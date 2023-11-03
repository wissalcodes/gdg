import ProgressBar from "./ProgressBar";
import CloseProjectButton from "./closeProjectButton";
import data from './data'

const ProjectNameSpace = () => {
    return (
        <>
            <div className="relative top-[84px] left-[298px] text-[48px] font-product-sans-medium">
                {data[0].title}
            </div>
            <CloseProjectButton />
            <div className="absolute top-[154px] left-[298px] text-5xl font-product-sans-light flex items-center w-[735px] h-[122px]">
                {data[0].discription}
            </div>
            <ProgressBar 
                progress = {data[0].progress} 
            />
        </>
    )
}
export default ProjectNameSpace
