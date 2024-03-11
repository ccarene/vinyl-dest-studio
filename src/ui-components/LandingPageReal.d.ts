/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type LandingPageRealOverridesProps = {
    LandingPageReal?: PrimitiveOverrideProps<ViewProps>;
    Left?: PrimitiveOverrideProps<FlexProps>;
    HeroMessage?: PrimitiveOverrideProps<FlexProps>;
    Message?: PrimitiveOverrideProps<FlexProps>;
    Welcome?: PrimitiveOverrideProps<TextProps>;
    Heading?: PrimitiveOverrideProps<TextProps>;
    "Sign Up Button"?: PrimitiveOverrideProps<FlexProps>;
    "Sign Up"?: PrimitiveOverrideProps<TextProps>;
    "vinylsimagecrop 2"?: PrimitiveOverrideProps<ImageProps>;
    NavBar2?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type LandingPageRealProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LandingPageRealOverridesProps | undefined | null;
}>;
export default function LandingPageReal(props: LandingPageRealProps): React.ReactElement;
