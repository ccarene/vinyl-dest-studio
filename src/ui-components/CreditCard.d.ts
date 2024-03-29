/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, PasswordFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreditCardInputValues = {
    Field0?: string;
};
export declare type CreditCardValidationValues = {
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreditCardOverridesProps = {
    CreditCardGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<PasswordFieldProps>;
} & EscapeHatchProps;
export declare type CreditCardProps = React.PropsWithChildren<{
    overrides?: CreditCardOverridesProps | undefined | null;
} & {
    onSubmit: (fields: CreditCardInputValues) => void;
    onChange?: (fields: CreditCardInputValues) => CreditCardInputValues;
    onValidate?: CreditCardValidationValues;
} & React.CSSProperties>;
export default function CreditCard(props: CreditCardProps): React.ReactElement;
