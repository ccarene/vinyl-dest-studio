/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import NavItem from "./NavItem";
import { View } from "@aws-amplify/ui-react";
export default function NavMenu(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="547px"
      height="84px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NavMenu")}
      {...rest}
    >
      <NavItem
        width="107px"
        height="84px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="19.38%"
        right="61.06%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(213,167,78,1)"
        {...getOverrideProps(overrides, "navItem2")}
      ></NavItem>
      <NavItem
        width="122px"
        height="84px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="77.7%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(213,167,78,1)"
        {...getOverrideProps(overrides, "navItem3")}
      ></NavItem>
      <NavItem
        width="106px"
        height="84px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="58.32%"
        right="22.3%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(213,167,78,1)"
        {...getOverrideProps(overrides, "navItem4")}
      ></NavItem>
      <View
        padding="0px 0px 0px 0px"
        width="106px"
        height="84px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="213px"
        {...getOverrideProps(overrides, "Group 1")}
      >
        <NavItem
          width="106px"
          height="84px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="0%"
          bottom="0%"
          left="calc(50% - 53px - 0px)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(213,167,78,1)"
          {...getOverrideProps(overrides, "navItem5")}
        ></NavItem>
      </View>
      <NavItem
        width="106px"
        height="87px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-3.57%"
        bottom="0%"
        left="0%"
        right="80.62%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(213,167,78,1)"
        {...getOverrideProps(overrides, "navItem")}
      ></NavItem>
    </View>
  );
}
