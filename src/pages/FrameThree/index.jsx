import React from "react";

import { Text } from "components";
import FrameThreeButtons from "components/FrameThreeButtons";

const FrameThreePage = ({data, onChange}) => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-end mx-auto p-[68px] md:px-10 sm:px-5 w-full">
        <Text
          className="font-medium mt-[253px] text-gray_900 text-left w-auto"
          as="h2"
          variant="h2"
        >
          Tell us your Gender!
        </Text>
        <FrameThreeButtons
          className="flex flex-row flex-wrap items-center justify-center max-w-[1160px] mt-[103px] mx-auto w-full"
          name="Neutral"
          data={data}
          value='Gender-Neutral'
          onChange={onChange}
        />
        <FrameThreeButtons
          className="flex flex-row flex-wrap items-center justify-center max-w-[1160px] mt-[103px] mx-auto w-full"
          name="Female"
          data={data}
          value='Female-only (including Supernumerary)'
          onChange={onChange}
        />
        <Text
          className="mt-[365px] text-gray_900 text-left w-auto"
          variant="body1"
        >
          CollegePRED will never share your personal data with any Third-Party
          organization.
        </Text>
      </div>
    </>
  );
};

export default FrameThreePage;
