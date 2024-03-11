/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function LandingPage(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Welcome: {},
        Heading: {},
        Message: {},
        HeroMessage: {},
        "Sign Up": {},
        "Sign Up Button": {},
        Left: {},
        "vinylsimagecrop 1": {},
        "Frame 436": {},
        LandingPage: {},
      },
      variantValues: { mode: "Light" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="1760px"
      height="910px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "LandingPage")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="-26px"
        left="-19px"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 436")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="720px"
          height="588px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="120px 50px 120px 46px"
          backgroundColor="rgba(235,215,165,1)"
          display="flex"
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
            display="flex"
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
              display="flex"
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
            display="flex"
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
          width="450px"
          height="588px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://vinyldestination-studio-storage-084f594b160945-staging.s3.us-east-2.amazonaws.com/public/Pics/vinylsimagecrop.jpg"
          {...getOverrideProps(overrides, "vinylsimagecrop 1")}
        ></Image>
      </Flex>
    </View>
  );
}
