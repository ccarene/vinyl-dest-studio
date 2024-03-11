/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CheckoutPaymentInformationOverridesProps = {
    CheckoutPaymentInformation?: PrimitiveOverrideProps<FlexProps>;
    CheckoutPayment?: PrimitiveOverrideProps<FlexProps>;
    "Frame 411113748"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    "Payment information"?: PrimitiveOverrideProps<TextProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    TextField113805?: PrimitiveOverrideProps<FlexProps>;
    label113806?: PrimitiveOverrideProps<TextProps>;
    InputGroup113808?: PrimitiveOverrideProps<FlexProps>;
    Input113809?: PrimitiveOverrideProps<FlexProps>;
    placeholder113810?: PrimitiveOverrideProps<TextProps>;
    "Frame 425"?: PrimitiveOverrideProps<FlexProps>;
    TextField113812?: PrimitiveOverrideProps<FlexProps>;
    label113813?: PrimitiveOverrideProps<TextProps>;
    InputGroup113815?: PrimitiveOverrideProps<FlexProps>;
    Input113816?: PrimitiveOverrideProps<FlexProps>;
    placeholder113817?: PrimitiveOverrideProps<TextProps>;
    TextField113819?: PrimitiveOverrideProps<FlexProps>;
    label113820?: PrimitiveOverrideProps<TextProps>;
    InputGroup113822?: PrimitiveOverrideProps<FlexProps>;
    Input113823?: PrimitiveOverrideProps<FlexProps>;
    placeholder113824?: PrimitiveOverrideProps<TextProps>;
    "Frame 410"?: PrimitiveOverrideProps<FlexProps>;
    TextField113826?: PrimitiveOverrideProps<FlexProps>;
    label113827?: PrimitiveOverrideProps<TextProps>;
    InputGroup113829?: PrimitiveOverrideProps<FlexProps>;
    Input113830?: PrimitiveOverrideProps<FlexProps>;
    placeholder113831?: PrimitiveOverrideProps<TextProps>;
    "Frame 411113759"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    label113835?: PrimitiveOverrideProps<TextProps>;
    "Frame 427"?: PrimitiveOverrideProps<FlexProps>;
    "Your order"?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Frame 316"?: PrimitiveOverrideProps<FlexProps>;
    Subtotal?: PrimitiveOverrideProps<TextProps>;
    "$320.00"?: PrimitiveOverrideProps<TextProps>;
    "Frame 317"?: PrimitiveOverrideProps<FlexProps>;
    Shipping?: PrimitiveOverrideProps<TextProps>;
    "$15.00"?: PrimitiveOverrideProps<TextProps>;
    "Frame 318"?: PrimitiveOverrideProps<FlexProps>;
    Taxes?: PrimitiveOverrideProps<TextProps>;
    "$26.80"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<ViewProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    "Frame 319"?: PrimitiveOverrideProps<FlexProps>;
    Total?: PrimitiveOverrideProps<TextProps>;
    "$361.80"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CheckoutPaymentInformationProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CheckoutPaymentInformationOverridesProps | undefined | null;
}>;
export default function CheckoutPaymentInformation(props: CheckoutPaymentInformationProps): React.ReactElement;
