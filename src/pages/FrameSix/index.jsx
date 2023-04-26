import React from "react";

import { Text, Img, Line, Input, List, Button } from "components";
import { CloseSVG } from "../../assets/images";

const FrameSixPage = ({result}) => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[142px] items-center justify-start mx-auto p-[321px] md:px-10 sm:px-5 w-full">
        <Text className="font-medium md:text-5xl text-[64px] text-gray_900 text-left w-auto">
          You are most likely to get Admission in
        </Text>
        <Text className="font-extrabold italic mb-[103px] md:text-5xl text-[64px] text-gray_900 text-left w-auto">
          {result}
        </Text>
        </div>
        </>
  );
};

export default FrameSixPage;
