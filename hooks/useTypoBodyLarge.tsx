import {useBreakpoint} from "@/hooks/useBreakpoint";

export const useTypoBodyLarge = () => {
    const breakpoint = useBreakpoint()
    return breakpoint === "sm" ? "$typo-body-medium" : "$typo-body-large"
}