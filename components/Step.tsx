import {tet} from "@virtuslab/tetrisly-react";
import React from "react";
import {useBreakpoint} from "@/hooks/useBreakpoint";
import useHydration from "@/hooks/useHedration";
import {DashedBorderBox, DashedBoxesOverlay} from "@/screens/TimeAndMaterials";
import cn from "classnames";
import {useHeaderTypo3xLarge} from "@/hooks/useHeaderTypo3xLarge";
import {usePadding2xLarge} from "@/hooks/usePadding2xLarge";

const linear = "linear-gradient(180deg, #EAEDF0 0%, rgba(234, 237, 240, 0.991615) 11.79%, rgba(234, 237, 240, 0.967585) 21.38%, rgba(234, 237, 240, 0.9296) 29.12%, rgba(234, 237, 240, 0.879348) 35.34%, rgba(234, 237, 240, 0.818519) 40.37%, rgba(234, 237, 240, 0.7488) 44.56%, rgba(234, 237, 240, 0.671881) 48.24%, rgba(234, 237, 240, 0.589452) 51.76%, rgba(234, 237, 240, 0.5032) 55.44%, rgba(234, 237, 240, 0.414815) 59.63%, rgba(234, 237, 240, 0.325985) 64.66%, rgba(234, 237, 240, 0.2384) 70.88%, rgba(234, 237, 240, 0.153748) 78.62%, rgba(234, 237, 240, 0.0737185) 88.21%, rgba(234, 237, 240, 0) 100%)"

interface Props {
    step: number;
    className?: string;
    children: React.ReactNode;
    height: string
    additionalInfo?: string
    selected?: boolean
}

export function Step({step, children, height, additionalInfo, selected, className}: Props) {

    const breakpoint = useBreakpoint()
    const hydrated = useHydration()
    const text3xLarge = useHeaderTypo3xLarge()
    const padding2xLarge = usePadding2xLarge()

    const getBackground = () => {
        switch (breakpoint) {
            case "xl":
                return selected ? "" : linear
            default:
                return ""
        }
    }

    const getBackgroundColor = () => {
        switch (breakpoint) {
            case "xl":
                return selected ? "$color-background-brand-strong" : ""
            case "lg":
                return selected ? "$color-background-brand-strong" : "$color-background-neutral-onSubtle"
            default:
                return selected ? "$color-background-brand-strong" : "$color-background-neutral-onSubtle"
        }
    }

    return (
        <tet.div
            background={getBackground()}
            backgroundColor={getBackgroundColor()}
            padding={padding2xLarge}
            borderRadius="$border-radius-large"
            h={breakpoint === "xl" ? height : 'auto'}
            className={cn('flex-shrink-0 basis-0 xl:flex-grow flex flex-col relative', className)}
        >
            <tet.p
                text={text3xLarge}
                color={selected ? "$color-content-primary-inverted" : "$color-content-primary"}
                className="xl:mb-4 lg:mb-2"
            >
                {step} этап
            </tet.p>
            <tet.p
                text="$typo-body-large"
                color={selected ? "$color-content-primary-inverted" : "$color-content-secondary"}
            >
                {children}
            </tet.p>
            {additionalInfo && hydrated && (
                <tet.p
                    text={breakpoint === "xl" ? "$typo-body-medium" : "$typo-body-small"}
                    color="$color-content-tertiary-inverted"
                    className="xl:mt-auto max-lg:mt-2"
                >
                    *{additionalInfo}
                </tet.p>
            )}
            <div className="xl:hidden absolute -bottom-4 left-0 w-full">
                <DashedBoxesOverlay/>
                <DashedBorderBox/>
            </div>
        </tet.div>
    )
}