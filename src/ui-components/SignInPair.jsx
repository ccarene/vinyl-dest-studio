/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import LogInButton from "./LogInButton";
import SignUpButton from "./SignUpButton";
import { View } from "@aws-amplify/ui-react";
export default function SignInPair(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="164px"
      height="44px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SignInPair")}
      {...rest}
    >
      <LogInButton
        display="flex"
        gap="10px"
        direction="row"
        width="68px"
        height="44px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="58.54%"
        borderRadius="7px"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Log In Button")}
      ></LogInButton>
      <SignUpButton
        display="flex"
        gap="10px"
        direction="row"
        width="81px"
        height="44px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0%"
        bottom="0%"
        left="50.61%"
        right="0%"
        borderRadius="7px"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(9,147,150,1)"
        {...getOverrideProps(overrides, "Sign Up Button")}
      ></SignUpButton>
    </View>
  );
}
