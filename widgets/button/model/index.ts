import { ReactNode } from "react";

export interface Props {
    children?: ReactNode,
    variant?: "secondary" | "primary",
    className?: string,
}