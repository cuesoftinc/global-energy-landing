import arrowIcon from "../../assets/arrow-right-icon.svg"


const Button = ({
    type = "fill",
    text,
    className,
    withIcon = false,
    onClick = () => { }
}) => {
    return (
        <div>
            {type === "fill" ? (
                <button
                    onClick={onClick}
                    className={`${className} {flex flex-row justify-center gap-2 items-center bg-primary font-medium text-[#fff] rounded-[40px] border border-[#001B7A] hover:bg-[#109854]}`}>
                    {text}
                    {withIcon && <img src={arrowIcon} alt="icon" />}
                </button>
            ) : (
                <button
                    onClick={onClick}
                    className={`${className} {flex justify-center gap-2 items-center border-[1px] font-semibold border-[#001B7A] text-black rounded-[40px] hover:border-[#109854]}`}>
                    {text}
                    {withIcon && <img src="" alt="icon" />}
                </button>
            )}
        </div>
    )
}

export default Button;