import React from "react";

import { Text, Img } from "components";

const FrameThirteenButton = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-bluegray_500 flex flex-row gap-[153px] items-start justify-end p-1 rounded-[50px] shadow-bs1 w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="font-normal font-poppins md:ml-[0] ml-[5px] not-italic text-center text-white_A700 w-auto"
              as="h6"
              variant="h6"
            >
              {props?.one}
            </Text>
            <Text
              className="font-normal font-poppins not-italic text-center text-white_A700 w-auto"
              as="h6"
              variant="h6"
            >
              {props?.two}
            </Text>
            <Text
              className="font-normal font-poppins not-italic text-center text-white_A700 w-auto"
              as="h6"
              variant="h6"
            >
              {props?.three}
            </Text>
            <Text
              className="font-normal font-poppins not-italic text-center text-white_A700 w-auto"
              as="h6"
              variant="h6"
            >
              {props?.four}
            </Text>
            <Text
              className="font-normal font-poppins not-italic text-center text-white_A700 w-auto"
              as="h6"
              variant="h6"
            >
              {props?.five}
            </Text>
          </div>
          <Img
            src="images/img_arrow3.svg"
            className="h-0.5 mr-[41px] mt-[39px] w-auto"
            alt="arrowThree"
          />
        </div>
      </div>
    </>
  );
};

FrameThirteenButton.defaultProps = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
};

export default FrameThirteenButton;
