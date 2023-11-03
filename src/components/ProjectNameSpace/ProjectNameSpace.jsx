import ProgressBar from "./ProgressBar";
import CloseProjectButton from "./closeProjectButton";
import data from './data'

const ProjectNameSpace = () => {
    return (
        <>
            <div className="relative top-[84px] left-[298px] text-[48px] font-product-sans-medium">
                Project’s name space
            </div>
            <CloseProjectButton />
            <div className="absolute top-[154px] left-[298px] text-5xl font-product-sans-light flex items-center w-[735px] h-[122px]">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit..., There is no one who loves pain itself,
                who seeks after it and wants to have it, simply because it is pain.
            </div>
            <ProgressBar 
                progress = {data[0].progress} 
            />
        </>
    )
}
export default ProjectNameSpace