import React from "react";

import { Text } from "components";
import FrameFiveButton from "components/FrameFiveButton";

const FrameFivePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[62px] items-center justify-start mx-auto p-[343px] md:px-10 sm:px-5 w-full">
        <Text
          className="font-medium text-gray_900 text-left w-auto"
          as="h2"
          variant="h2"
        >
          What caste do you belong to?
        </Text>
        <FrameFiveButton
          className="bg-bluegray_500 flex flex-row items-center justify-center mb-[129px] p-[25px] md:px-5 rounded-[50px] shadow-bs1 w-[35%] md:w-full"
          selectcaste="Select Caste"
        />
      </div>
    </>
  );
};

export default FrameFivePage;
