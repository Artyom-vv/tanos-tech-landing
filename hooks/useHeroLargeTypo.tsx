import {useBreakpoint} from "@/hooks/useBreakpoint";

const useHeroLargeTypo = () => {
    const breakpoint = useBreakpoint();

    switch (breakpoint) {
        case "lg":
        case "xl":
            return "$typo-hero-large";
        case "md":
            return "$typo-header-4xLarge";
        case "sm":
            return "$typo-header-3xLarge";
        default:
            return "$typo-hero-large";
    }
};

export default useHeroLargeTypo;
