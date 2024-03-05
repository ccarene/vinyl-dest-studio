/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
export declare type CommentCardOverridesProps = {
    "99221328"?: PrimitiveOverrideProps<TextProps>;
    "99221331"?: PrimitiveOverrideProps<TextProps>;
    "99221334"?: PrimitiveOverrideProps<TextProps>;
    CommentCard?: PrimitiveOverrideProps<FlexProps>;
    Liked?: PrimitiveOverrideProps<FlexProps>;
    "User Liked"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221314?: MyIconProps;
    "Danny liked this"?: PrimitiveOverrideProps<TextProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Frame221318?: PrimitiveOverrideProps<FlexProps>;
    Frame221319?: PrimitiveOverrideProps<FlexProps>;
    Frame221320?: PrimitiveOverrideProps<FlexProps>;
    Scott?: PrimitiveOverrideProps<TextProps>;
    Frame221322?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221323?: MyIconProps;
    "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D"?: PrimitiveOverrideProps<TextProps>;
    Share221325?: PrimitiveOverrideProps<FlexProps>;
    Share221326?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221327?: MyIconProps;
    Repost?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221330?: MyIconProps;
    Like?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221333?: MyIconProps;
    MyIcon221335?: MyIconProps;
} & EscapeHatchProps;
export declare type CommentCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CommentCardOverridesProps | undefined | null;
}>;
export default function CommentCard(props: CommentCardProps): React.ReactElement;
