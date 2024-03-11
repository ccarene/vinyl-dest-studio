/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type NavBarOverridesProps = {
    NavBar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5"?: PrimitiveOverrideProps<FlexProps>;
    "image 3"?: PrimitiveOverrideProps<ImageProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    Products?: PrimitiveOverrideProps<TextProps>;
    Contact?: PrimitiveOverrideProps<TextProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Log In Button"?: PrimitiveOverrideProps<FlexProps>;
    "Log In"?: PrimitiveOverrideProps<TextProps>;
    "Sign Up Button"?: PrimitiveOverrideProps<FlexProps>;
    "Sign Up"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarOverridesProps | undefined | null;
}>;
export default function NavBar(props: NavBarProps): React.ReactElement;
