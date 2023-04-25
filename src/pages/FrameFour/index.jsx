import React from "react";

import { Text, Img } from "components";
import { useNavigate } from "react-router-dom";

const FrameFourPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins gap-[52px] items-center justify-end mx-auto p-32 md:px-10 sm:px-5 w-full">
        <Text
          className="font-medium mt-[115px] text-gray_900 text-left w-auto"
          as="h2"
          variant="h2"
        >
          What caste do you belong to?
        </Text>
        <div className="flex flex-col items-center justify-start w-[26%] md:w-full">
          <div className="bg-bluegray_500 flex sm:flex-col flex-row gap-[31px] items-start justify-center p-[5px] rounded-[50px] shadow-bs1 w-full">
            <div className="flex sm:flex-1 flex-col items-center justify-start sm:ml-[0] ml-[75px] w-[64%] sm:w-full">
              <Text
                className="common-pointer font-normal not-italic text-center text-white_A700 w-auto"
                as="h6"
                variant="h6"
                onClick={() => navigate("/frametwelve")}
              >
                GEN
              </Text>
              <Text
                className="common-pointer font-normal not-italic text-center text-white_A700 w-auto"
                as="h6"
                variant="h6"
                onClick={() => navigate("/frametwelve")}
              >
                GEN-EWS
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="common-pointer font-normal not-italic text-center text-white_A700 w-auto"
                  as="h6"
                  variant="h6"
                  onClick={() => navigate("/frametwelve")}
                >
                  GEN-EWS-PWD
                </Text>
                <Text
                  className="common-pointer font-normal not-italic text-center text-white_A700 w-auto"
                  as="h6"
                  variant="h6"
                  onClick={() => navigate("/frametwelve")}
                >
                  GEN-PWD
                </Text>
                <Text
                  className="common-pointer font-normal not-italic text-center text-white_A700 w-auto"
                  as="h6"
                  variant="h6"
                  onClick={() => navigate("/frametwelve")}
                >
                  OBC-NCL
                </Text>
                <Text
                  className="common-pointer font-normal not-italic text-center text-white_A700 w-auto"
                  as="h6"
                  variant="h6"
                  onClick={() => navigate("/frametwelve")}
                >
                  OBC-NCL-PWD
                </Text>
                <Text
                  className="common-pointer font-normal not-italic text-center text-white_A700 w-auto"
                  as="h6"
                  variant="h6"
                  onClick={() => navigate("/frametwelve")}
                >
                  SC
                </Text>
                <Text
                  className="common-pointer font-normal not-italic text-center text-white_A700 w-auto"
                  as="h6"
                  variant="h6"
                  onClick={() => navigate("/frametwelve")}
                >
                  SC-PWD
                </Text>
                <Text
                  className="common-pointer font-normal not-italic text-center text-white_A700 w-auto"
                  as="h6"
                  variant="h6"
                  onClick={() => navigate("/frametwelve")}
                >
                  ST
                </Text>
                <Text
                  className="common-pointer font-normal not-italic text-center text-white_A700 w-auto"
                  as="h6"
                  variant="h6"
                  onClick={() => navigate("/frametwelve")}
                >
                  ST-PWD
                </Text>
              </div>
            </div>
            <Img
              src="images/img_arrow3.svg"
              className="h-0.5 mr-10 sm:mt-0 mt-[38px] w-auto"
              alt="arrowThree"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameFourPage;
