/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image } from "@aws-amplify/ui-react";
export default function Checkout(props) {
  const { vinylRecord, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="1320px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="80px 80px 80px 80px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Checkout")}
      {...rest}
    >
      <Flex
        gap="48px"
        direction="row"
        width="1178px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "FormCheckout")}
      >
        <Flex
          gap="48px"
          direction="row"
          width="1160px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="32px 0px 32px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Frame 411")}
        >
          <Image
            width="455px"
            height="unset"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="https://vinyldestination-studio-storage-084f594b160945-staging.s3.us-east-2.amazonaws.com/public/Pics/vinylLogopng.png"
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
      </Flex>
    </Flex>
  );
}
