

const CloseProjectButton = () => {
    return (
        <div
            className="absolute top-[93px] left-[799px] rounded-[30px] bg-white box-border w-[172px] h-10 flex flex-row items-center justify-center py-5 px-2 gap-[10px] cursor-pointer text-red border-[1px] border-solid border-red"
        >
            <img
                className="relative w-[15.6px] h-[15.6px]"
                alt=""
                src="/group-427319002.svg"
            />
            <div className="relative">close project</div>
        </div>
    )
}

export default CloseProjectButton