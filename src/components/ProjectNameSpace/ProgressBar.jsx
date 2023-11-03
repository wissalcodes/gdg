
const ProgressBar = (props) => {
    let num = props.progress*707/100
    num = num.toString() + 'px'
    console.log(num)
    return (
        <div className="absolute top-[300px] left-[298px] w-[706px] h-[36.2px] text-center text-5xl text-black font-product-sans-medium">
            <div className="absolute top-[0px] left-[0px] rounded-81xl bg-orange w-[706px] h-9" />
            <div className={`absolute top-[0.2px] left-[0px] rounded-81xl bg-yellow  w-[${num}] h-9`} />
            <div className="absolute top-[7.2px] left-[256.9px] flex items-center justify-center w-[192.1px] h-[22px]">
                {props.progress}% completed
            </div>
        </div>
    )
}

export default ProgressBar