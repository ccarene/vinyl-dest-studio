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
export declare type ContactInfoPageOverridesProps = {
    ContactInfoPage?: PrimitiveOverrideProps<FlexProps>;
    Background?: PrimitiveOverrideProps<FlexProps>;
    "vinylsimage 1"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    Left?: PrimitiveOverrideProps<FlexProps>;
    Message124281?: PrimitiveOverrideProps<FlexProps>;
    Welcome124282?: PrimitiveOverrideProps<TextProps>;
    Heading124283?: PrimitiveOverrideProps<TextProps>;
    Message124284?: PrimitiveOverrideProps<FlexProps>;
    Welcome124285?: PrimitiveOverrideProps<TextProps>;
    Heading124286?: PrimitiveOverrideProps<TextProps>;
    Message124287?: PrimitiveOverrideProps<FlexProps>;
    Welcome124288?: PrimitiveOverrideProps<TextProps>;
    Heading124289?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ContactInfoPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    mode?: "Light";
} & {
    overrides?: ContactInfoPageOverridesProps | undefined | null;
}>;
export default function ContactInfoPage(props: ContactInfoPageProps): React.ReactElement;
