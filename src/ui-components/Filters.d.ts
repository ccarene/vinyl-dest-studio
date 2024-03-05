/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps } from "@aws-amplify/ui-react";
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
export declare type FiltersOverridesProps = {
    Filters?: PrimitiveOverrideProps<FlexProps>;
    SelectField221712?: PrimitiveOverrideProps<FlexProps>;
    SelectField221713?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type FiltersProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FiltersOverridesProps | undefined | null;
}>;
export default function Filters(props: FiltersProps): React.ReactElement;
