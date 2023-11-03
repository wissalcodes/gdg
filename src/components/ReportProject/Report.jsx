

const Report = (props) => {
    return (
        <>
            <div className="relative w-[314px] h-[155px] text-left text-xs text-black font-product-sans">
                <div className="absolute top-[0px] left-[0px] rounded-2xl bg-white box-border w-[314px] h-[155px] overflow-hidden border-[3px] border-solid border-green" />
                <div className="absolute top-[31px] left-[42px] text-gray">{props.date}</div>
                <div className="absolute top-[10px] left-[10px] flex flex-row items-center justify-center gap-[8px] text-sm">
                    <img
                        className="relative rounded-[50%] w-6 h-6 object-cover"
                        alt=""
                        src={`${props.img}`}
                    />
                    <div className="relative">{props.name}</div>
                </div>
                <div className="absolute top-[53px] left-[0px] bg-darkgray w-[314px] h-px" />
                <div className="absolute top-[70px] left-[16px] text-xl text-center">
                    {props.report}
                </div>
            </div>
        </>
    )
}
export default Report