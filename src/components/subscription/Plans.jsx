import PlansNav from "./PlansNav"


const PlansAndSub = () => {
    return (
            <div className="w-full pt-[80px] sm:pt-[40px] sm:pb-[0] flex flex-col items-center justify-start gap-[20px] sm:gap-[14px]">
                <p className="text-center text-[42px] font-semibold sm:text-[22px]">Plans & Subscriptions</p>
                <div className="px-[60px] md:px-[40px] sm:px-[20px]">
                    <PlansNav />
                </div>
            </div>
    )
}

export default PlansAndSub
