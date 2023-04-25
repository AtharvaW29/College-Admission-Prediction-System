import React from "react";

import { Text, Img } from "components";
import { useNavigate } from "react-router-dom";

const FrameTwelvePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[79px] items-center justify-start mx-auto p-[312px] md:px-10 sm:px-5 w-full">
        <Text
          className="font-medium text-gray_900 text-left w-auto"
          as="h2"
          variant="h2"
        >
          Select the Round of Admission
        </Text>
        <div
          className="common-pointer bg-bluegray_500 flex sm:flex-col flex-row gap-[30px] items-center justify-center mb-[174px] p-[22px] md:px-5 rounded-[50px] w-[34%] md:w-full"
          onClick={() => navigate("/framethirteen")}
        >
          <Text
            className="font-normal sm:ml-[0] ml-[42px] not-italic text-center text-gray_300 w-auto"
            as="h5"
            variant="h5"
          >
            Select Round
          </Text>
          <Img
            src="images/img_arrow3.svg"
            className="h-px mr-[47px] rotate-[-90deg] rounded-[50%] w-[2%]"
            alt="arrowThree"
          />
        </div>
      </div>
    </>
  );
};

export default FrameTwelvePage;
