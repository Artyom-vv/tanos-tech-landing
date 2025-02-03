import {useBreakpoint} from "@/hooks/useBreakpoint";

export const usePadding2xLarge = () => {
    const breakpoint = useBreakpoint()
    return breakpoint === "sm" ? "$space-component-padding-large" : "$space-component-padding-2xLarge"
}