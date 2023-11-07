import ProgressBar from "./ProgressBar";
import CloseProjectButton from "./closeProjectButton";
import data from './data'

const ProjectNameSpace = () => {
    return (
        <section className="flex flex-col ">
            <div className=" flex items-center text-[48px] font-product-sans-medium">
                {data[0].title}
            </div>
            <CloseProjectButton />
            <div className="text-5xl font-product-sans-light flex items-center w-[735px] h-[122px]">
                {data[0].discription}
            </div>
            <ProgressBar 
                progress = {data[0].progress} 
            />
        </section>
    )
}
export default ProjectNameSpace