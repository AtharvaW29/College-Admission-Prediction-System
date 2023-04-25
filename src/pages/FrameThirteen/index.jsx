import React from "react";

import { Text } from "components";
import FrameThirteenButton from "components/FrameThirteenButton";

const FrameThirteenPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[79px] items-center justify-end mx-auto p-[308px] md:px-10 sm:px-5 w-full">
        <Text
          className="font-medium mt-1 text-gray_900 text-left w-auto"
          as="h2"
          variant="h2"
        >
          Select the Round of Admission
        </Text>
        <FrameThirteenButton
          className="flex flex-col items-center justify-start w-auto md:w-full"
          one="1"
          two="2"
          three="3"
          four="4"
          five="5"
        />
      </div>
    </>
  );
};

export default FrameThirteenPage;
