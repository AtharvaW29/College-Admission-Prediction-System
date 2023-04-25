import React from "react";

import { Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const FrameSevenPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[71px] items-center justify-start mx-auto p-80 md:px-10 sm:px-5 w-full">
        <Text
          className="font-medium text-gray_900 text-left w-auto"
          as="h2"
          variant="h2"
        >
          Enter your All India Rank!!
        </Text>
        <Button
          className="common-pointer cursor-pointer font-normal leading-[normal] mb-[166px] min-w-[430px] sm:min-w-full not-italic sm:text-4xl md:text-[38px] text-[40px] text-center text-gray_300 w-auto"
          onClick={() => navigate("/frameeight")}
          shape="RoundedBorder50"
          size="lg"
          variant="FillBluegray500"
        >
          Type here...
        </Button>
      </div>
    </>
  );
};

export default FrameSevenPage;
