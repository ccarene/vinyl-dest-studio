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
export declare type CheckoutOverridesProps = {
    Checkout?: PrimitiveOverrideProps<FlexProps>;
    FormCheckout?: PrimitiveOverrideProps<FlexProps>;
    "Frame 411113584"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    "Shipping information"?: PrimitiveOverrideProps<TextProps>;
    "Frame 426"?: PrimitiveOverrideProps<FlexProps>;
    TextField113733?: PrimitiveOverrideProps<FlexProps>;
    label113734?: PrimitiveOverrideProps<TextProps>;
    InputGroup113736?: PrimitiveOverrideProps<FlexProps>;
    Input113737?: PrimitiveOverrideProps<FlexProps>;
    placeholder113738?: PrimitiveOverrideProps<TextProps>;
    TextField113740?: PrimitiveOverrideProps<FlexProps>;
    label113741?: PrimitiveOverrideProps<TextProps>;
    InputGroup113743?: PrimitiveOverrideProps<FlexProps>;
    Input113744?: PrimitiveOverrideProps<FlexProps>;
    placeholder113745?: PrimitiveOverrideProps<TextProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    TextField113665?: PrimitiveOverrideProps<FlexProps>;
    label113666?: PrimitiveOverrideProps<TextProps>;
    InputGroup113668?: PrimitiveOverrideProps<FlexProps>;
    Input113669?: PrimitiveOverrideProps<FlexProps>;
    placeholder113670?: PrimitiveOverrideProps<TextProps>;
    "Frame 425"?: PrimitiveOverrideProps<FlexProps>;
    TextField113672?: PrimitiveOverrideProps<FlexProps>;
    label113673?: PrimitiveOverrideProps<TextProps>;
    InputGroup113675?: PrimitiveOverrideProps<FlexProps>;
    Input113676?: PrimitiveOverrideProps<FlexProps>;
    placeholder113677?: PrimitiveOverrideProps<TextProps>;
    TextField113679?: PrimitiveOverrideProps<FlexProps>;
    label113680?: PrimitiveOverrideProps<TextProps>;
    InputGroup113682?: PrimitiveOverrideProps<FlexProps>;
    Input113683?: PrimitiveOverrideProps<FlexProps>;
    placeholder113684?: PrimitiveOverrideProps<TextProps>;
    SelectField113686?: PrimitiveOverrideProps<FlexProps>;
    label113687?: PrimitiveOverrideProps<TextProps>;
    InputGroup113689?: PrimitiveOverrideProps<FlexProps>;
    Input113690?: PrimitiveOverrideProps<FlexProps>;
    placeholder113691?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDD12Icon113692"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 410"?: PrimitiveOverrideProps<FlexProps>;
    TextField113695?: PrimitiveOverrideProps<FlexProps>;
    label113696?: PrimitiveOverrideProps<TextProps>;
    InputGroup113698?: PrimitiveOverrideProps<FlexProps>;
    Input113699?: PrimitiveOverrideProps<FlexProps>;
    placeholder113700?: PrimitiveOverrideProps<TextProps>;
    PhoneNumberField?: PrimitiveOverrideProps<FlexProps>;
    label113703?: PrimitiveOverrideProps<TextProps>;
    InputGroup113705?: PrimitiveOverrideProps<FlexProps>;
    Input113706?: PrimitiveOverrideProps<FlexProps>;
    SelectField113724?: PrimitiveOverrideProps<FlexProps>;
    InputGroup113727?: PrimitiveOverrideProps<FlexProps>;
    Input113728?: PrimitiveOverrideProps<FlexProps>;
    "\u274C"?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDD12Icon113730"?: PrimitiveOverrideProps<ViewProps>;
    placeholder113708?: PrimitiveOverrideProps<TextProps>;
    "Frame 411113600"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    "Button Icon113723"?: PrimitiveOverrideProps<ViewProps>;
    label113720?: PrimitiveOverrideProps<TextProps>;
    "Button Icon113722"?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type CheckoutProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CheckoutOverridesProps | undefined | null;
}>;
export default function Checkout(props: CheckoutProps): React.ReactElement;
