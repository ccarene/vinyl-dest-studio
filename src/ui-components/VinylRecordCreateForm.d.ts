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
export declare type VinylRecordCreateFormInputValues = {
    name?: string;
    stock?: number;
    year?: number;
    artist?: string;
    price?: number;
    pictureS3URL?: string;
};
export declare type VinylRecordCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    stock?: ValidationFunction<number>;
    year?: ValidationFunction<number>;
    artist?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    pictureS3URL?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VinylRecordCreateFormOverridesProps = {
    VinylRecordCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    stock?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    artist?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    pictureS3URL?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VinylRecordCreateFormProps = React.PropsWithChildren<{
    overrides?: VinylRecordCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VinylRecordCreateFormInputValues) => VinylRecordCreateFormInputValues;
    onSuccess?: (fields: VinylRecordCreateFormInputValues) => void;
    onError?: (fields: VinylRecordCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VinylRecordCreateFormInputValues) => VinylRecordCreateFormInputValues;
    onValidate?: VinylRecordCreateFormValidationValues;
} & React.CSSProperties>;
export default function VinylRecordCreateForm(props: VinylRecordCreateFormProps): React.ReactElement;
