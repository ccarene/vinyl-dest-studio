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
export default function ContactInfoPage(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "vinylsimage 1": {},
        "Rectangle 1": {},
        Welcome124282: {},
        Heading124283: {},
        Message124281: {},
        Welcome124285: {},
        Heading124286: {},
        Message124284: {},
        Welcome124288: {},
        Heading124289: {},
        Message124287: {},
        Left: {},
        Background: {},
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
      width="100%"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      display="block"
      margin="0 0 0 0"

      {...getOverrideProps(overrides, "ContactInfoPage")}
      {...rest}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="100%"
        // height="1080px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Background")}
      >
        <Image
          width="100%"
          // height="1080px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          border="1px SOLID rgba(0,0,0,1)"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://vinyldestination-studio-storage-084f594b160945-staging.s3.us-east-2.amazonaws.com/public/Pics/vinylsimage.jpg"
          {...getOverrideProps(overrides, "vinylsimage 1")}
        ></Image>
        <View
          width="100%"
          // height="1080px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          border="1px SOLID rgba(0,0,0,1)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,0.45)"
          {...getOverrideProps(overrides, "Rectangle 1")}
        ></View>
        <Flex
          gap="10px"
          direction="column"
          width="100%"
          height="1080px"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          position="sticky"
          top="0px"
          left="0px"
          padding="120px 120px 120px 120px"
          backgroundColor="rgba(255,255,255,0.01)"
          display="center"
          {...getOverrideProps(overrides, "Left")}
        >
          <Flex
            gap="16px"
            direction="column"
            width="80%"
            height="246px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="40px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(235,215,165,1)"
            display="flex"
            margin="0 5rem"
            {...getOverrideProps(overrides, "Message124281")}
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
              children="About"
              {...getOverrideProps(overrides, "Welcome124282")}
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
              children="Vinyl Destination allows you to purchase all of your favorite songs on God's favorite form of media: VINYL RECORDS! Find and purchase your favorite albums and have them shipped right to your door step. Here at Vinyl Destination, we believe your favorite music should be more than an icon on your phone. Having physical copies of your albums with beautiful cover art enhances your connection with these tunes."
              {...getOverrideProps(overrides, "Heading124283")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="column"
            width="513px"
            height="203px"
            justifyContent="center"
            alignItems="flex-end"
            shrink="0"
            position="relative"
            borderRadius="40px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(235,215,165,1)"
            display="flex"
            {...getOverrideProps(overrides, "Message124284")}
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
              {...getOverrideProps(overrides, "Welcome124285")}
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
              children="CFO: Olivia Brothers&#xA;Phone: (666) 666-6666&#xA;Email: OBrother@VinylDest.com"
              {...getOverrideProps(overrides, "Heading124286")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="column"
            width="513px"
            height="208px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="40px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(235,215,165,1)"
            display="flex"
            {...getOverrideProps(overrides, "Message124287")}
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
              children="&#xA;Contact Info"
              {...getOverrideProps(overrides, "Welcome124288")}
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
              children="CEO: Connor Carene&#xA;Phone: (555) 555-5555&#xA;Email: CCarene@VinylDest.com&#xA;"
              {...getOverrideProps(overrides, "Heading124289")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
