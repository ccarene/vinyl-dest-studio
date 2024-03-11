/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type Frame439OverridesProps = {
    Frame439?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    "vinylsimage 1"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Title Section"?: PrimitiveOverrideProps<ViewProps>;
    "Welcome To Vinyl Destination"?: PrimitiveOverrideProps<TextProps>;
    "Your #1 Place to Purchase Vinyl Records"?: PrimitiveOverrideProps<TextProps>;
    "View Vinyls Box"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "View Vinyls"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Frame439Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Frame439OverridesProps | undefined | null;
}>;
export default function Frame439(props: Frame439Props): React.ReactElement;
