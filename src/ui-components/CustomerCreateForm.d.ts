/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type CustomerCreateFormInputValues = {
    FirstName?: string;
    LastName?: string;
    StreetAddress?: string;
    City?: string;
    Zip?: string;
    State?: string;
    Email?: string;
    Number?: string;
};
export declare type CustomerCreateFormValidationValues = {
    FirstName?: ValidationFunction<string>;
    LastName?: ValidationFunction<string>;
    StreetAddress?: ValidationFunction<string>;
    City?: ValidationFunction<string>;
    Zip?: ValidationFunction<string>;
    State?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Number?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerCreateFormOverridesProps = {
    CustomerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RowGrid0?: PrimitiveOverrideProps<GridProps>;
    FirstName?: PrimitiveOverrideProps<TextFieldProps>;
    LastName?: PrimitiveOverrideProps<TextFieldProps>;
    StreetAddress?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid2?: PrimitiveOverrideProps<GridProps>;
    City?: PrimitiveOverrideProps<TextFieldProps>;
    Zip?: PrimitiveOverrideProps<TextFieldProps>;
    State?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Number?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CustomerCreateFormProps = React.PropsWithChildren<{
    overrides?: CustomerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CustomerCreateFormInputValues) => CustomerCreateFormInputValues;
    onSuccess?: (fields: CustomerCreateFormInputValues) => void;
    onError?: (fields: CustomerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomerCreateFormInputValues) => CustomerCreateFormInputValues;
    onValidate?: CustomerCreateFormValidationValues;
} & React.CSSProperties>;
export default function CustomerCreateForm(props: CustomerCreateFormProps): React.ReactElement;
