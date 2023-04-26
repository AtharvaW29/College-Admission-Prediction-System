import React from "react";

import { Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const FrameFourteenPage = ({data, onChange}) => {
  const navigate = useNavigate();

  const handleQuotaSelect = (quota) => {
    const newData = {...data, 'Quota': quota}
    console.log(newData)
    onChange(newData)
  };

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[68px] items-center justify-start mx-auto p-[322px] md:px-10 sm:px-5 w-full">
        <Text
          className="font-medium text-gray_900 text-left w-auto"
          as="h2"
          variant="h2"
        >
          Select your Quota
        </Text>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[206px] items-start justify-between mb-[165px] self-stretch w-auto md:w-full">
          <Button
            className="common-pointer cursor-pointer font-normal leading-[normal] min-w-[430px] sm:min-w-full not-italic text-4xl sm:text-[32px] md:text-[34px] text-center text-white_A700 w-auto"
            onClick={() => {
              handleQuotaSelect('HS')
              navigate("/framefifteen")
            }}
            shape="RoundedBorder50"
            size="xl"
            variant="OutlineBlack9007f_1"
          >
            Home State
          </Button>
          <Button
            className="common-pointer cursor-pointer font-normal leading-[normal] min-w-[430px] sm:min-w-full not-italic text-4xl sm:text-[32px] md:text-[34px] text-center text-white_A700 w-auto"
            onClick={() => {
              handleQuotaSelect('OS')
              navigate("/framefifteen")
            }}
            shape="RoundedBorder50"
            size="xl"
            variant="OutlineBlack9007f"
          >
            Other State
          </Button>
        </div>
      </div>
    </>
  );
};

export default FrameFourteenPage;
