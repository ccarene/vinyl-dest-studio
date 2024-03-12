/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Frame439(props) {
  const { overrides, ...rest } = props;
  const viewVinylsOnClick = useNavigateAction({
    type: "url",
    url: "/products",
  });
  return (
    <View
      width="100%"
      height="1080px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Frame439")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="100%"
        height="1080px"
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
          width="100%"
          height="1080px"
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
          width="100%"
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
        width="100%"
        height="379px"
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
          top="300px"
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
            top="calc(50% - 39.5px - 0px)"
            left="calc(50% - 120px - 0px)"
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
            top="calc(50% - 39.5px - 0px)"
            left="calc(50% - 120px - 0px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="View Vinyls"
            onClick={() => {
              viewVinylsOnClick();
            }}
            {...getOverrideProps(overrides, "View Vinyls")}
          ></Text>
        </View>
      </View>
    </View>
  );
}
