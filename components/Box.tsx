import React from 'react'

const Box = () => {
  return (
    <>
      <div className="w-[550px] h-[282px] absolute top-[152px] left-[768px] gap-[20px] pt-[54px] pb-[54px]">
        <div className="w-[550px] h-[282px] gap-[10px] rounded-[12px] p-[20px] bg-[#FAFAFA] shadow-[0px_0px_4px_0px_#00000040]">
          <h3 className="w-[613px] h-[34px] font-manrope font-bold text-[24px] leading-[140%] tracking-[1%] text-[#3A3A3A] mb-6 uppercase">
            Simple, Efficient, Precise
          </h3>
          <p className="w-[510px] h-[198px] font-manrope font-normal text-[16px] leading-[140%] tracking-[1%] text-[#3A3A3A]">
            Our approach is simple but powerful. <br />
            We combine your existing data with public information and advanced analytics to reveal patterns others miss. <br />
            No unnecessary complexity, just clear insights that help you reach customers faster and more efficiently. <br />
            The result? <br />
            Strategies that work better and cost less. <br />
            We're self-funded, independent and focused on one thing: delivering results you can measure.
          </p>
        </div>
      </div>

      <div className="w-[550px] h-[282px] gap-[10px] rounded-[12px] p-[20px] bg-[#FAFAFA] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
        <h3 className="w-[613px] h-[34px] font-manrope font-bold text-[24px] leading-[140%] tracking-[1%] text-[#3A3A3A] align-middle">
          WE PRACTICE WHAT WE TEACH
        </h3>
        <p className="w-[613px] h-[132px] font-manrope font-normal text-[16px] leading-[140%] tracking-[1%] text-[#3A3A3A] align-middle">
          We don't just consult. We teach. <br />
          Your team learns to find insights that last, <br />
          no coding required. Anyone can do it. <br /><br />
          Most of all, they will gain by learning not only from trainers, but real world practitioners.
        </p>
        <div className="w-[613px] h-[27px] gap-[10px]">
          <div className="w-[172px] h-[27px] gap-[10px] border-b border-[#3A3A3A]"></div>
          <p className="w-[174px] h-[22px] font-manrope font-normal text-[16px] leading-[140%] tracking-[1%] text-[#3A3A3A]">
            See what you can learn
          </p>
        </div>
      </div>
    </>
  )
}

export default Box
