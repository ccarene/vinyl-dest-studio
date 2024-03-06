/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type Features2x2OverridesProps = {
    Features2x2?: PrimitiveOverrideProps<FlexProps>;
    "Frame 136221109"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 136221110"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 374221111"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 430221112"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221113?: MyIconProps;
    "Feature A"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.221115"?: PrimitiveOverrideProps<TextProps>;
    "Frame 373221116"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 430221117"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221118?: MyIconProps;
    "Feature B"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.221120"?: PrimitiveOverrideProps<TextProps>;
    "Frame 393"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 374221122"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 430221123"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221124?: MyIconProps;
    "Feature C"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.221126"?: PrimitiveOverrideProps<TextProps>;
    "Frame 373221127"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 430221128"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221129?: MyIconProps;
    "Feature D"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.221131"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Features2x2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Features2x2OverridesProps | undefined | null;
}>;
export default function Features2x2(props: Features2x2Props): React.ReactElement;
