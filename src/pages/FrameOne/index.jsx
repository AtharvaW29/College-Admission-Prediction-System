import React from "react";

import { Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const FrameOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-end mx-auto p-[43px] md:px-10 sm:px-5 w-full">
        <div className="h-[222px] md:h-[295px] mt-[151px] relative w-[35%] md:w-full">
          <Text
            className="absolute inset-x-[0] mx-auto text-gray_900 text-left top-[0] w-max"
            as="h1"
            variant="h1"
          >
            CollegePRED
          </Text>
          <Text
            className="absolute bottom-[0] font-normal inset-x-[0] mx-auto not-italic text-gray_900 text-left w-max"
            as="h2"
            variant="h2"
          >
            Predict your college
          </Text>
        </div>
        <Button
          className="common-pointer cursor-pointer font-normal leading-[normal] min-w-[320px] mt-[103px] not-italic text-4xl sm:text-[32px] md:text-[34px] text-center text-white_A700 w-auto"
          onClick={() => navigate("/framethree")}
          shape="CircleBorder38"
          size="md"
          variant="OutlineBlack9007f"
        >
          Predict{" "}
        </Button>
        <Text
          className="font-light mt-96 text-gray_900 text-left w-auto"
          as="h6"
          variant="h6"
        >
          Calculate your chance of getting into India’s most prestigious
          institutions.
        </Text>
      </div>
    </>
  );
};

export default FrameOnePage;
