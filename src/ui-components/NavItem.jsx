/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function NavItem(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="180px"
      height="84px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(213,167,78,1)"
      {...getOverrideProps(overrides, "NavItem")}
      {...rest}
    >
      <Text
        fontFamily="Elsie"
        fontSize="20px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="23.03999900817871px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="150px"
        height="62px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="14.29%"
        bottom="11.9%"
        left="8.33%"
        right="8.33%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Label"
        {...getOverrideProps(overrides, "Label")}
      ></Text>
      <View
        width="180px"
        height="3px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Active")}
      ></View>
    </View>
  );
}
