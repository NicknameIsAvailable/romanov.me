import { ReactNode } from "react";

export interface Props {
    children?: ReactNode,
    variant?: "secondary" | "primary" | "cool",
    className?: string,
    disabled?: boolean,
    href?: string
}