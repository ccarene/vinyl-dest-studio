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
export declare type VinylRecordUpdateFormInputValues = {
    name?: string;
    stock?: number;
    year?: number;
    artist?: string;
    price?: number;
    pictureS3URL?: string;
};
export declare type VinylRecordUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    stock?: ValidationFunction<number>;
    year?: ValidationFunction<number>;
    artist?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    pictureS3URL?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VinylRecordUpdateFormOverridesProps = {
    VinylRecordUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    stock?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    artist?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    pictureS3URL?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VinylRecordUpdateFormProps = React.PropsWithChildren<{
    overrides?: VinylRecordUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    vinylRecord?: any;
    onSubmit?: (fields: VinylRecordUpdateFormInputValues) => VinylRecordUpdateFormInputValues;
    onSuccess?: (fields: VinylRecordUpdateFormInputValues) => void;
    onError?: (fields: VinylRecordUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VinylRecordUpdateFormInputValues) => VinylRecordUpdateFormInputValues;
    onValidate?: VinylRecordUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VinylRecordUpdateForm(props: VinylRecordUpdateFormProps): React.ReactElement;
