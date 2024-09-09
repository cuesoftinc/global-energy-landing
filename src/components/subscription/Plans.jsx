import PlansNav from "./PlansNav"


const PlansAndSub = () => {
    return (
            <div className="pt-[80px] sm:pt-[30px] sm:pb-[0] flex flex-col items-center justify-start gap-[20px] sm:gap-[19px]">
                <p className="text-center text-[42px] font-semibold sm:text-[22px]">Plans & Subscriptions</p>
                <div className="w-full px-[60px]">
                    <PlansNav />
                </div>
            </div>
    )
}

export default PlansAndSub
