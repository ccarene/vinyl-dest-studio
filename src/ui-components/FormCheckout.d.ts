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
export declare type FormCheckoutOverridesProps = {
    FormCheckout?: PrimitiveOverrideProps<FlexProps>;
    "Frame 411221472"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    "Shipping information"?: PrimitiveOverrideProps<TextProps>;
    "Frame 426"?: PrimitiveOverrideProps<FlexProps>;
    TextField122246?: PrimitiveOverrideProps<FlexProps>;
    label122247?: PrimitiveOverrideProps<TextProps>;
    InputGroup122249?: PrimitiveOverrideProps<FlexProps>;
    Input122250?: PrimitiveOverrideProps<FlexProps>;
    placeholder122251?: PrimitiveOverrideProps<TextProps>;
    TextField122253?: PrimitiveOverrideProps<FlexProps>;
    label122254?: PrimitiveOverrideProps<TextProps>;
    InputGroup122256?: PrimitiveOverrideProps<FlexProps>;
    Input122257?: PrimitiveOverrideProps<FlexProps>;
    placeholder122258?: PrimitiveOverrideProps<TextProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    TextField122260?: PrimitiveOverrideProps<FlexProps>;
    label122261?: PrimitiveOverrideProps<TextProps>;
    InputGroup122263?: PrimitiveOverrideProps<FlexProps>;
    Input122264?: PrimitiveOverrideProps<FlexProps>;
    placeholder122265?: PrimitiveOverrideProps<TextProps>;
    "Frame 425"?: PrimitiveOverrideProps<FlexProps>;
    TextField122267?: PrimitiveOverrideProps<FlexProps>;
    label122268?: PrimitiveOverrideProps<TextProps>;
    InputGroup122270?: PrimitiveOverrideProps<FlexProps>;
    Input122271?: PrimitiveOverrideProps<FlexProps>;
    placeholder122272?: PrimitiveOverrideProps<TextProps>;
    TextField122274?: PrimitiveOverrideProps<FlexProps>;
    label122275?: PrimitiveOverrideProps<TextProps>;
    InputGroup122277?: PrimitiveOverrideProps<FlexProps>;
    Input122278?: PrimitiveOverrideProps<FlexProps>;
    placeholder122279?: PrimitiveOverrideProps<TextProps>;
    SelectField122281?: PrimitiveOverrideProps<FlexProps>;
    label122282?: PrimitiveOverrideProps<TextProps>;
    InputGroup122284?: PrimitiveOverrideProps<FlexProps>;
    Input122285?: PrimitiveOverrideProps<FlexProps>;
    placeholder122286?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDD12Icon"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 410"?: PrimitiveOverrideProps<FlexProps>;
    TextField122290?: PrimitiveOverrideProps<FlexProps>;
    label122291?: PrimitiveOverrideProps<TextProps>;
    InputGroup122293?: PrimitiveOverrideProps<FlexProps>;
    Input122294?: PrimitiveOverrideProps<FlexProps>;
    placeholder122295?: PrimitiveOverrideProps<TextProps>;
    PhoneNumberField?: PrimitiveOverrideProps<FlexProps>;
    label122298?: PrimitiveOverrideProps<TextProps>;
    InputGroup122300?: PrimitiveOverrideProps<FlexProps>;
    Input122301?: PrimitiveOverrideProps<FlexProps>;
    SelectField122302?: PrimitiveOverrideProps<FlexProps>;
    placeholder122303?: PrimitiveOverrideProps<TextProps>;
    "Frame 411221488"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    label122315?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type FormCheckoutProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FormCheckoutOverridesProps | undefined | null;
}>;
export default function FormCheckout(props: FormCheckoutProps): React.ReactElement;
