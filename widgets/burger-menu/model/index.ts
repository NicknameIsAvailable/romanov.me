import { ReactNode } from "react"

export interface Links {
    name: string,
    url: string,
    icon: ReactNode
}

export interface Param {
    name: string,
    icon: ReactNode,
    function: () => void
}
