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
export declare type LandingPageOverridesProps = {
    LandingPage?: PrimitiveOverrideProps<ViewProps>;
    "Frame 436"?: PrimitiveOverrideProps<FlexProps>;
    Left?: PrimitiveOverrideProps<FlexProps>;
    HeroMessage?: PrimitiveOverrideProps<FlexProps>;
    Message?: PrimitiveOverrideProps<FlexProps>;
    Welcome?: PrimitiveOverrideProps<TextProps>;
    Heading?: PrimitiveOverrideProps<TextProps>;
    "Sign Up Button"?: PrimitiveOverrideProps<FlexProps>;
    "Sign Up"?: PrimitiveOverrideProps<TextProps>;
    "vinylsimagecrop 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type LandingPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    mode?: "Light";
} & {
    overrides?: LandingPageOverridesProps | undefined | null;
}>;
export default function LandingPage(props: LandingPageProps): React.ReactElement;
