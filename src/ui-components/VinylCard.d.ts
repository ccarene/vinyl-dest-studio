/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ActionCardProps } from "./ActionCard";
import { ViewProps } from "@aws-amplify/ui-react";
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
export declare type VinylCardOverridesProps = {
    VinylCard?: PrimitiveOverrideProps<ViewProps>;
    ActionCard?: ActionCardProps;
} & EscapeHatchProps;
export declare type VinylCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: VinylCardOverridesProps | undefined | null;
}>;
export default function VinylCard(props: VinylCardProps): React.ReactElement;
