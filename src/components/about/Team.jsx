

const Team = () => {
    return (
        <div className="flex flex-col justify-start gap-5">
            <p className="text-center text-[38px] font-semibold sm:text-[22px]">Meet the team</p>
            <div className="px-[60px] md:px-[40px] sm:px-[20px]">
                <div className="py-[60px] px-[40px] md:py-[30px] md:px-[20px] sm:py-[20px] sm:px-[10px] flex flex-row flex-wrap sm:flex sm:flex-col sm:items-start gap-[4px] gap-x-[4px] lg:gap-x-[20px] gap-y-[8px] lg:gap-y-[20px] justify-between border border-[#e2e8f0] rounded-lg">

                    <div className="flex flex-row justify-center items-center sm:items-start sm:justify-start gap-[16px]">
                        <div className="text-[18px] sm:text-[14px] font-semibold p-[12px] rounded-full bg-slate-100 border border-[#e2e8f0]">JC</div>
                        <div className="flex flex-col justify-center items-start gap-[4px]">
                            <p className="text-[18px] sm:text-[14px] md:text-[16px] text-left font-semibold">Johnson Chukwuemeka Okafor</p>
                            <p className="text-[16px] sm:text-[12px] text-blue font-medium">President, CEO & Founder</p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center items-center gap-[16px]">
                        <div className="text-[18px] sm:text-[14px] font-semibold p-[12px] rounded-full bg-slate-100 border border-[#e2e8f0]">JO</div>
                        <div className="flex flex-col justify-center items-start gap-[4px]">
                            <p className="text-[18px] sm:text-[14px] font-semibold md:text-[16px] text-left">Joy Ohumagu-Mgbenyere Johnson</p>
                            <p className="text-[16px] sm:text-[12px] text-blue font-medium">Country Director</p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center items-center gap-[16px]">
                        <div className="text-[18px] sm:text-[14px] font-semibold p-[12px] rounded-full bg-slate-100 border border-[#e2e8f0]">GE</div>
                        <div className="flex flex-col justify-center items-start gap-[4px]">
                            <p className="text-[18px] sm:text-[14px] font-semibold md:text-[16px] text-left">Godwin Ekah Okoh</p>
                            <p className="text-[16px] sm:text-[12px] text-blue font-medium">Board Member</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team