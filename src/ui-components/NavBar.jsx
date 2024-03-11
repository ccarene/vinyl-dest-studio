/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  const vectorOnClick = useNavigateAction({ type: "url", url: "/checkout" });
  return (
    <Flex
      gap="801px"
      direction="row"
      width="1508px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="16px 32px 16px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <Flex
        gap="148px"
        direction="row"
        width="1444px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 5")}
      >
        <Image
          width="74px"
          height="73px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://vinyldestination-studio-storage-084f594b160945-staging.s3.us-east-2.amazonaws.com/public/Pics/vinylLogopng.png"
          {...getOverrideProps(overrides, "image 3")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Home"
          {...getOverrideProps(overrides, "Home")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Products"
          {...getOverrideProps(overrides, "Products")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Contact"
          {...getOverrideProps(overrides, "Contact")}
        ></Text>
        <Icon
          width="26.67px"
          height="33.33px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 26.66666603088379,
            height: 33.333335876464844,
          }}
          paths={[
            {
              d: "M23.3333 6.66667L20 6.66667C20 2.98333 17.0167 0 13.3333 0C9.65 0 6.66667 2.98333 6.66667 6.66667L3.33333 6.66667C1.5 6.66667 0 8.16667 0 10L0 30C0 31.8333 1.5 33.3333 3.33333 33.3333L23.3333 33.3333C25.1667 33.3333 26.6667 31.8333 26.6667 30L26.6667 10C26.6667 8.16667 25.1667 6.66667 23.3333 6.66667ZM13.3333 3.33333C15.1667 3.33333 16.6667 4.83333 16.6667 6.66667L10 6.66667C10 4.83333 11.5 3.33333 13.3333 3.33333ZM23.3333 30L3.33333 30L3.33333 10L6.66667 10L6.66667 13.3333C6.66667 14.25 7.41667 15 8.33333 15C9.25 15 10 14.25 10 13.3333L10 10L16.6667 10L16.6667 13.3333C16.6667 14.25 17.4167 15 18.3333 15C19.25 15 20 14.25 20 13.3333L20 10L23.3333 10L23.3333 30Z",
              fill: "rgba(92,102,112,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          onClick={() => {
            vectorOnClick();
          }}
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="7px"
          padding="10px 10px 10px 10px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Log In Button")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(9,147,150,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Log In"
            {...getOverrideProps(overrides, "Log In")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="7px"
          padding="10px 10px 10px 10px"
          backgroundColor="rgba(9,147,150,1)"
          {...getOverrideProps(overrides, "Sign Up Button")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Sign Up"
            {...getOverrideProps(overrides, "Sign Up")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
