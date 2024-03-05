/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type SideBarOverridesProps = {
    SideBar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 321221591"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 321221592"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 414"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    icon221595?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221596?: MyIconProps;
    label221597?: PrimitiveOverrideProps<TextProps>;
    Section221598?: PrimitiveOverrideProps<FlexProps>;
    label221599?: PrimitiveOverrideProps<TextProps>;
    link221600?: PrimitiveOverrideProps<FlexProps>;
    icon221601?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221602?: MyIconProps;
    label221603?: PrimitiveOverrideProps<TextProps>;
    link221604?: PrimitiveOverrideProps<FlexProps>;
    icon221605?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221606?: MyIconProps;
    label221607?: PrimitiveOverrideProps<TextProps>;
    link221608?: PrimitiveOverrideProps<FlexProps>;
    icon221609?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221610?: MyIconProps;
    label221611?: PrimitiveOverrideProps<TextProps>;
    Section221612?: PrimitiveOverrideProps<FlexProps>;
    label221613?: PrimitiveOverrideProps<TextProps>;
    link221614?: PrimitiveOverrideProps<FlexProps>;
    icon221615?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221616?: MyIconProps;
    label221617?: PrimitiveOverrideProps<TextProps>;
    link221618?: PrimitiveOverrideProps<FlexProps>;
    icon221619?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221620?: MyIconProps;
    label221621?: PrimitiveOverrideProps<TextProps>;
    link221622?: PrimitiveOverrideProps<FlexProps>;
    icon221623?: PrimitiveOverrideProps<FlexProps>;
    MyIcon221624?: MyIconProps;
    label221625?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SideBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SideBarOverridesProps | undefined | null;
}>;
export default function SideBar(props: SideBarProps): React.ReactElement;
