import {useBreakpoint} from "@/hooks/useBreakpoint";

export const useHeaderTypo3xLarge = () => {
    const breakpoint = useBreakpoint()
    return breakpoint === "sm" ? "$typo-header-xLarge" : "$typo-header-3xLarge"
}