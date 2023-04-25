import React from "react";

import { Text, Img } from "components";

const FrameFiveButton = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[57px] w-auto sm:w-full">
          <Text
            className="font-normal font-poppins not-italic text-center text-white_A700 w-auto"
            as="h6"
            variant="h6"
          >
            {props?.selectcaste}
          </Text>
        </div>
        <Img
          src="images/img_arrow3.svg"
          className="h-px mr-[53px] rotate-[-90deg] rounded-[50%] w-[2%]"
          alt="arrowThree"
        />
      </div>
    </>
  );
};

FrameFiveButton.defaultProps = { selectcaste: "Select Caste" };

export default FrameFiveButton;
