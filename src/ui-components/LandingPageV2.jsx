/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Image, Text, View } from "@aws-amplify/ui-react";
import NavBar from "./NavBar";
export default function LandingPageV2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1920px"
      height="1080px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "LandingPageV2")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="1920px"
        height="1280px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Background")}
      >
        <Image
          width="1920px"
          height="1280px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://vinyldestination-studio-storage-084f594b160945-staging.s3.us-east-2.amazonaws.com/public/Pics/vinylsimage.jpg"
          {...getOverrideProps(overrides, "vinylsimage 1")}
        ></Image>
        <View
          width="1920px"
          height="1080px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,0.45)"
          {...getOverrideProps(overrides, "Rectangle 1")}
        ></View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="1501px"
        height="347px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="232px"
        left="230px"
        {...getOverrideProps(overrides, "Title Section")}
      >
        <Text
          fontFamily="Inter"
          fontSize="100px"
          fontWeight="900"
          color="rgba(255,255,255,1)"
          lineHeight="150px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Welcome To Vinyl Destination"
          {...getOverrideProps(overrides, "Welcome To Vinyl Destination")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="64px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="96px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="142px"
          left="122px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Your #1 Place to Purchase Vinyl Records"
          {...getOverrideProps(
            overrides,
            "Your #1 Place to Purchase Vinyl Records"
          )}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="240px"
          height="79px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="268px"
          left="610px"
          {...getOverrideProps(overrides, "View Vinyls Box")}
        >
          <View
            width="240px"
            height="79px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="10px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(9,147,150,1)"
            {...getOverrideProps(overrides, "Rectangle 2")}
          ></View>
          <Text
            fontFamily="Inter"
            fontSize="36px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="54px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="240px"
            height="79px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="View Vinyls"
            {...getOverrideProps(overrides, "View Vinyls")}
          ></Text>
        </View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="1922px"
        height="105px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="-2px"
        {...getOverrideProps(overrides, "Nav")}
      >
        <View
          width="1920px"
          height="87px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="2px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(245,245,245,1)"
          {...getOverrideProps(overrides, "Rectangle 3")}
        ></View>
        <NavBar
          display="flex"
          gap="801px"
          direction="row"
          width="1920px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          overflow="hidden"
          position="absolute"
          top="0px"
          left="0px"
          boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
          padding="16px 32px 16px 32px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "NavBar")}
        ></NavBar>
      </View>
    </View>
  );
}
