/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { LogoWithTextProps } from "./LogoWithText";
import { MyIconProps } from "./MyIcon";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarSideOverridesProps = {
    NavBarSide?: PrimitiveOverrideProps<FlexProps>;
    "Frame 321221546"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 321221547"?: PrimitiveOverrideProps<FlexProps>;
    LogoWithText?: LogoWithTextProps;
    "Frame 414"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    icon221551?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221552?: MyIconProps;
    label221553?: PrimitiveOverrideProps<TextProps>;
    Section221554?: PrimitiveOverrideProps<FlexProps>;
    label221555?: PrimitiveOverrideProps<TextProps>;
    link221556?: PrimitiveOverrideProps<FlexProps>;
    icon221557?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221558?: MyIconProps;
    label221559?: PrimitiveOverrideProps<TextProps>;
    link221560?: PrimitiveOverrideProps<FlexProps>;
    icon221561?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221562?: MyIconProps;
    label221563?: PrimitiveOverrideProps<TextProps>;
    link221564?: PrimitiveOverrideProps<FlexProps>;
    icon221565?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221566?: MyIconProps;
    label221567?: PrimitiveOverrideProps<TextProps>;
    Section221568?: PrimitiveOverrideProps<FlexProps>;
    label221569?: PrimitiveOverrideProps<TextProps>;
    link221570?: PrimitiveOverrideProps<FlexProps>;
    icon221571?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221572?: MyIconProps;
    label221573?: PrimitiveOverrideProps<TextProps>;
    link221574?: PrimitiveOverrideProps<FlexProps>;
    icon221575?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221576?: MyIconProps;
    label221577?: PrimitiveOverrideProps<TextProps>;
    link221578?: PrimitiveOverrideProps<FlexProps>;
    icon221579?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221580?: MyIconProps;
    label221581?: PrimitiveOverrideProps<TextProps>;
    "Frame 321221582"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 416"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 415"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 1163"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 321221586"?: PrimitiveOverrideProps<FlexProps>;
    "Wesley Peck"?: PrimitiveOverrideProps<TextProps>;
    MyIcon221588?: MyIconProps;
} & EscapeHatchProps;
export declare type NavBarSideProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarSideOverridesProps | undefined | null;
}>;
export default function NavBarSide(props: NavBarSideProps): React.ReactElement;
