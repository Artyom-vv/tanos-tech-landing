import { useState, useEffect } from "react";
import tailwindConfig from "@/tailwind.config";

const breakpoints = {
    xl: `(min-width: ${tailwindConfig.theme.extend.screens.xl})`,
    lg: `(min-width: ${tailwindConfig.theme.extend.screens.lg})`,
    md: `(min-width: ${tailwindConfig.theme.extend.screens.md})`,
    sm: `(min-width: ${tailwindConfig.theme.extend.screens.sm})`,
};

type Breakpoint = keyof typeof breakpoints | "xs";

export const useBreakpoint = (): Breakpoint => {
    const getBreakpoint = (): Breakpoint => {
        if (typeof window === "undefined") return "xs"; // SSR: избегаем ошибок
        if (window.matchMedia(breakpoints.xl).matches) return "xl";
        if (window.matchMedia(breakpoints.lg).matches) return "lg";
        if (window.matchMedia(breakpoints.md).matches) return "md";
        if (window.matchMedia(breakpoints.sm).matches) return "sm";
        return "xs";
    };

    const [breakpoint, setBreakpoint] = useState<Breakpoint>(() =>
        typeof window === "undefined" ? "xs" : getBreakpoint()
    );

    useEffect(() => {
        const updateBreakpoint = () => setBreakpoint(getBreakpoint());

        const mediaQueries = Object.values(breakpoints).map((query) => {
            const mediaQuery = window.matchMedia(query);
            mediaQuery.addEventListener("change", updateBreakpoint);
            return mediaQuery;
        });

        updateBreakpoint();

        return () => {
            mediaQueries.forEach((mediaQuery) =>
                mediaQuery.removeEventListener("change", updateBreakpoint)
            );
        };
    }, []);

    return breakpoint;
};