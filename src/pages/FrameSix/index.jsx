import React from "react";

import { Text, Img, Line, Input, List, Button } from "components";
import { CloseSVG } from "../../assets/images";

const FrameSixPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:px-5 w-[96%] md:w-full">
          <div className="flex flex-col md:gap-10 gap-[868px] justify-start md:mt-0 mt-[45px] w-[23%] md:w-full">
            <Text
              className="md:ml-[0] ml-[30px] text-gray_900 text-left w-auto"
              as="h3"
              variant="h3"
            >
              CollegePRED
            </Text>
            <div className="bg-bluegray_100 flex flex-row font-sfprodisplay items-center justify-start p-[19px] w-full">
              <div className="bg-black_900 h-[49px] ml-7 mt-[7px] rounded-[24px] w-[49px]"></div>
              <Text
                className="ml-[33px] text-gray_900 text-left w-auto"
                variant="body2"
              >
                Jimit Parmar
              </Text>
              <Img
                src="images/img_arrowdown.svg"
                className="h-2.5 ml-[53px] w-auto"
                alt="arrowdown"
              />
            </div>
          </div>
          <Line className="bg-black_900 h-[1080px] md:h-px md:w-full w-px" />
          <div className="flex flex-col font-sfprodisplay md:gap-10 gap-20 items-center justify-start ml-12 md:ml-[0] md:mt-0 mt-11 w-3/4 md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
              <Text
                className="text-gray_900 text-left w-auto"
                as="h4"
                variant="h4"
              >
                Hello Jimit 👋,
              </Text>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e)}
                wrapClassName="flex w-auto md:w-full"
                className="font-normal md:text-3xl not-italic p-0 placeholder:text-gray_500 sm:text-[28px] text-[32px] text-gray_500 text-left w-full"
                name="searchbar"
                placeholder="Search for colleges..."
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer mr-4 my-auto"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#a7aaab"
                    className="cursor-pointer my-auto"
                    onClick={() => setInputvalue("")}
                    style={{
                      visibility:
                        inputvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={51}
                    width={52}
                    viewBox="0 0 52 51"
                  />
                }
                shape="srcRoundedBorder20"
                size="smSrc"
                variant="srcFillGray301"
              ></Input>
            </div>
            <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-[97%] md:w-full">
                <Text
                  className="font-bold text-gray_900 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  All Colleges
                </Text>
                <div className="flex flex-row gap-[23px] items-center justify-between sm:mt-0 mt-[17px] w-[17%] sm:w-full">
                  <Text
                    className="font-bold text-gray_900 text-left w-auto"
                    variant="body4"
                  ></Text>
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-2 w-auto"
                    alt="arrowdown_One"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[46px] w-[97%] md:w-full">
                <Text
                  className="font-medium md:mt-0 mt-0.5 text-gray_600 text-left w-auto"
                  variant="body4"
                >
                  College Name
                </Text>
                <Text
                  className="font-medium mb-0.5 md:ml-[0] ml-[376px] text-gray_600 text-left w-auto"
                  variant="body4"
                >
                  Course
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[285px] md:mt-0 mt-0.5 text-gray_600 text-left w-auto"
                  variant="body4"
                >
                  Closing Rank
                </Text>
                <Text
                  className="font-medium mb-0.5 ml-44 md:ml-[0] text-gray_600 text-left w-auto"
                  variant="body4"
                >
                  Chance
                </Text>
              </div>
              <List
                className="flex-col gap-[33px] grid items-center mt-[30px] w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <Text
                    className="sm:flex-1 sm:mt-0 mt-[7px] text-gray_900 text-left w-[26%] sm:w-full"
                    variant="body3"
                  >
                    Indian Institute of Technology, Bombay (IITB)
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[133px] sm:mt-0 mt-[9px] text-gray_900 text-left w-auto"
                    variant="body3"
                  >
                    Aerospace Engineering
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[188px] sm:mt-0 mt-1.5 text-gray_900 text-left w-auto"
                    variant="body3"
                  >
                    3448
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] mb-6 min-w-[136px] sm:ml-[0] ml-[183px] text-2xl md:text-[22px] text-center text-light_green_A700 sm:text-xl w-auto"
                    shape="RoundedBorder10"
                    size="sm"
                    variant="OutlineGreen800"
                  >
                    High
                  </Button>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <Text
                    className="sm:flex-1 sm:mt-0 mt-[7px] text-gray_900 text-left w-[26%] sm:w-full"
                    variant="body3"
                  >
                    Indian Institute of Technology, Bombay (IITB)
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[133px] sm:mt-0 mt-[9px] text-gray_900 text-left w-auto"
                    variant="body3"
                  >
                    Electrical Engineering
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[207px] sm:mt-0 mt-1.5 text-gray_900 text-left w-auto"
                    variant="body3"
                  >
                    2487
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] mb-6 min-w-[136px] sm:ml-[0] ml-[188px] text-2xl md:text-[22px] text-center text-light_green_A700 sm:text-xl w-auto"
                    shape="RoundedBorder10"
                    size="sm"
                    variant="OutlineGreen800"
                  >
                    High
                  </Button>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <Text
                    className="sm:flex-1 sm:mt-0 mt-[7px] text-gray_900 text-left w-[26%] sm:w-full"
                    variant="body3"
                  >
                    Indian Institute of Technology, Delhi (IITD)
                  </Text>
                  <Text
                    className="sm:flex-1 sm:ml-[0] ml-[133px] sm:mt-0 mt-[7px] text-gray_900 text-left w-[29%] sm:w-full"
                    variant="body3"
                  >
                    Computer Science and Engineering
                  </Text>
                  <Text
                    className="ml-20 sm:ml-[0] sm:mt-0 mt-[7px] text-gray_900 text-left w-auto"
                    variant="body3"
                  >
                    554
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] mb-6 min-w-[136px] sm:ml-[0] ml-[194px] text-2xl md:text-[22px] text-center text-red_900 sm:text-xl w-auto"
                    shape="RoundedBorder10"
                    size="sm"
                    variant="OutlineRed900"
                  >
                    Very Low
                  </Button>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <Text
                    className="sm:flex-1 sm:mt-0 mt-[7px] text-gray_900 text-left w-[26%] sm:w-full"
                    variant="body3"
                  >
                    Indian Institute of Technology, Kanpur (IITK)
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[133px] sm:mt-0 mt-[9px] text-gray_900 text-left w-auto"
                    variant="body3"
                  >
                    Aerospace Engineering
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[191px] sm:mt-0 mt-1.5 text-gray_900 text-left w-auto"
                    variant="body3"
                  >
                    4421
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] mb-6 min-w-[136px] sm:ml-[0] ml-[190px] text-2xl md:text-[22px] text-center text-light_green_900 sm:text-xl w-auto"
                    shape="RoundedBorder10"
                    size="sm"
                    variant="OutlineGreen801"
                  >
                    Very High
                  </Button>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <Text
                    className="sm:flex-1 sm:mt-0 mt-[7px] text-gray_900 text-left w-[26%] sm:w-full"
                    variant="body3"
                  >
                    Indian Institute of Technology, Madras (IITM)
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[135px] sm:mt-0 mt-[9px] text-gray_900 text-left w-auto"
                    variant="body3"
                  >
                    Electrical Engineering
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[209px] sm:mt-0 mt-1.5 text-gray_900 text-left w-auto"
                    variant="body3"
                  >
                    1225
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] mb-6 min-w-[136px] sm:ml-[0] ml-[191px] text-2xl md:text-[22px] text-center text-red_A700 sm:text-xl w-auto"
                    shape="RoundedBorder10"
                    size="sm"
                    variant="OutlineRedA701"
                  >
                    Low
                  </Button>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <Text
                    className="sm:flex-1 sm:mt-0 mt-[7px] text-gray_900 text-left w-[26%] sm:w-full"
                    variant="body3"
                  >
                    Indian Institute of Technology, Bombay (IITB)
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[133px] sm:mt-0 mt-[9px] text-gray_900 text-left w-auto"
                    variant="body3"
                  >
                    Electrical Engineering
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[207px] sm:mt-0 mt-1.5 text-gray_900 text-left w-auto"
                    variant="body3"
                  >
                    3217
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] mb-6 min-w-[136px] ml-48 sm:ml-[0] text-2xl md:text-[22px] text-center text-light_green_A700 sm:text-xl w-auto"
                    shape="RoundedBorder10"
                    size="sm"
                    variant="OutlineGreen800"
                  >
                    High
                  </Button>
                </div>
              </List>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[71px] w-full">
                <Text
                  className="sm:mt-0 mt-1.5 text-gray_501 text-left w-auto"
                  variant="body5"
                >
                  Showing colleges 1 to 6 of 114 entries
                </Text>
                <Img
                  src="images/img_arrowleft.svg"
                  className="h-3.5 sm:ml-[0] ml-[703px] sm:mt-0 mt-1 w-auto"
                  alt="arrowleft"
                />
                <Text
                  className="mb-1.5 ml-7 sm:ml-[0] text-black_900 text-left tracking-[1.40px] w-auto"
                  variant="body5"
                >
                  1 2 3 4 ... 19
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="h-3.5 sm:ml-[0] ml-[30px] sm:mt-0 mt-[5px] w-auto"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameSixPage;
