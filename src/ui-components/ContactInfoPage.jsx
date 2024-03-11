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
import { Flex, Text } from "@aws-amplify/ui-react";
export default function ContactInfoPage(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Welcome: {},
        Heading: {},
        Message: {},
        HeroMessage: {},
        Left: {},
        ContactInfoPage: {},
      },
      variantValues: { mode: "Light" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="1440px"
      height="1169px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "ContactInfoPage")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="120px 120px 120px 120px"
        backgroundColor="rgba(235,215,165,1)"
        display="flex"
        {...getOverrideProps(overrides, "Left")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="480px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
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
              children="Contact Info"
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
              children="Name: Connor Carene&#xA;Number: &#xA;Email:&#xA;Address"
              {...getOverrideProps(overrides, "Heading")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
