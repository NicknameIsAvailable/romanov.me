import { ReactNode } from "react"

export interface Props {
    text?: string,
    color?: "success" | "warning" | "danger" | "info",
    icon?: ReactNode,
    open?: boolean,
    onClose?: () => void
}