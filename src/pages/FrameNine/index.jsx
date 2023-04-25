import React from "react";

import { Text } from "components";

const FrameNinePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins gap-[5px] items-center justify-end mx-auto p-[411px] md:px-10 sm:px-5 w-full">
        <Text
          className="font-medium mt-0.5 text-gray_900 text-left w-auto"
          as="h2"
          variant="h2"
        >
          Predicting
        </Text>
        <div className="bg-gradient1  p-2 rounded-[77px] w-[15%] ">
          <div className="bg-white_A700 border-solid h-[154px] md:px-5 rounded-[50%] w-[154px]"></div>
        </div>
      </div>
    </>
  );
};

export default FrameNinePage;
