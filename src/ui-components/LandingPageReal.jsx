/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
import NavBar from "./NavBar";
export default function LandingPageReal(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1920px"
      height="1080px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "LandingPageReal")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="1096px"
        height="983px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="8.98%"
        bottom="0%"
        left="0%"
        right="42.92%"
        padding="120px 50px 120px 46px"
        backgroundColor="rgba(235,215,165,1)"
        {...getOverrideProps(overrides, "Left")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "HeroMessage")}
        >
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Message")}
          >
            <Text
              fontFamily="Inter"
              fontSize="48px"
              fontWeight="700"
              color="rgba(9,147,150,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Welcome!"
              {...getOverrideProps(overrides, "Welcome")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="600"
              color="rgba(13,26,38,1)"
              lineHeight="30px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Discover a world where music meets style at Vinyl Destination, your go-to e-commerce platform for the finest vinyl records. Immerse yourself in the rich, warm sound of analog music while exploring our vast collection of handpicked classics, rare gems, and contemporary favorites."
              {...getOverrideProps(overrides, "Heading")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="338px"
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
      <Image
        width="42.92%"
        height="91.02%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="8.98%"
        bottom="0%"
        left="57.08%"
        right="0%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://vinyldestination-studio-storage-084f594b160945-staging.s3.us-east-2.amazonaws.com/public/Pics/vinylsimagecrop.jpg"
        {...getOverrideProps(overrides, "vinylsimagecrop 2")}
      ></Image>
      <NavBar
        display="flex"
        gap="801px"
        direction="row"
        width="1920px"
        height="105px"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="90.28%"
        left="0%"
        right="0%"
        boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
        padding="16px 32px 16px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "NavBar")}
      ></NavBar>
    </View>
  );
}
