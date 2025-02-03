import {useBreakpoint} from "@/hooks/useBreakpoint";

export const useButtonSize = () => {
    const breakpoint = useBreakpoint()
    const size = breakpoint === "sm" ? "156px" : "168px"

    return { h: size, w: size }
}