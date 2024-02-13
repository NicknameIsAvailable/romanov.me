import {ReactNode} from "react";
import Text from "./text"
import Card from "@/widgets/animation/card";
import Appear from "@/widgets/animation/appear";

interface Props {
    children?: ReactNode,
    variant?: "text" | "card" | "state" | "get-in-touch" | "social" | "appear"
    duration?: number
}

const Animation = ({children, variant, duration}: Props) => {
    switch (variant) {
        case "text": return <Text duration={duration}>{children}</Text>
        case "card": return <Card duration={duration}>{children}</Card>
        case "appear": return <Appear duration={duration}>{children}</Appear>
        default: return children
    }
}

export default Animation