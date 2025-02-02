import {sectionPaddings} from "@/components/tailwind-classnames";
import {tet} from "@virtuslab/tetrisly-react";
import cn from "classnames";
import React from "react";
import {Step} from "@/components/Step";
import useHydration from "@/hooks/useHedration";
import {useBreakpoint} from "@/hooks/useBreakpoint";


export function DashedBorderBox() {
    return (
        <tet.div
            borderColor="$color-border-neutral-subtle"
            className="
                xl:bg-[linear-gradient(to_bottom,#CFD6DD_0px,#CFD6DD_8px,transparent_8px,transparent_24px)]
                lg:bg-[linear-gradient(to_right,#CFD6DD_0px,#CFD6DD_8px,transparent_8px,transparent_24px)]
                xl:bg-[length:1px_24px]
                lg:bg-[length:24px_1px]
                xl:bg-repeat-y
                lg:bg-repeat-x
                xl:w-[1px]
                xl:h-auto
                lg:h-[1px]
                bg-origin-border
                relative
                z-[0]
            "
        />
    );
}

export function DashedBoxesOverlay() {
    const breakpoint = useBreakpoint()
    return (
        <>
            <tet.div
                background={`linear-gradient(${breakpoint === "xl" ? "180deg" : "90deg"}, #F5F7F9 0%, rgba(245, 247, 249, 0.991615) 11.79%, rgba(245, 247, 249, 0.967585) 21.38%, rgba(245, 247, 249, 0.9296) 29.12%, rgba(245, 247, 249, 0.879348) 35.34%, rgba(245, 247, 249, 0.818519) 40.37%, rgba(245, 247, 249, 0.7488) 44.56%, rgba(245, 247, 249, 0.671881) 48.24%, rgba(245, 247, 249, 0.589452) 51.76%, rgba(245, 247, 249, 0.5032) 55.44%, rgba(245, 247, 249, 0.414815) 59.63%, rgba(245, 247, 249, 0.325985) 64.66%, rgba(245, 247, 249, 0.2384) 70.88%, rgba(245, 247, 249, 0.153748) 78.62%, rgba(245, 247, 249, 0.0737185) 88.21%, rgba(245, 247, 249, 0) 100%)`}
                className="z-[5] absolute top-0 left-0 xl:h-1/2 xl:w-full lg:h-full lg:w-1/2"></tet.div>
            <tet.div
                background={`linear-gradient(${breakpoint === "xl" ? "0deg" : "-90deg"}, #F5F7F9 0%, rgba(245, 247, 249, 0.991615) 11.79%, rgba(245, 247, 249, 0.967585) 21.38%, rgba(245, 247, 249, 0.9296) 29.12%, rgba(245, 247, 249, 0.879348) 35.34%, rgba(245, 247, 249, 0.818519) 40.37%, rgba(245, 247, 249, 0.7488) 44.56%, rgba(245, 247, 249, 0.671881) 48.24%, rgba(245, 247, 249, 0.589452) 51.76%, rgba(245, 247, 249, 0.5032) 55.44%, rgba(245, 247, 249, 0.414815) 59.63%, rgba(245, 247, 249, 0.325985) 64.66%, rgba(245, 247, 249, 0.2384) 70.88%, rgba(245, 247, 249, 0.153748) 78.62%, rgba(245, 247, 249, 0.0737185) 88.21%, rgba(245, 247, 249, 0) 100%)`}
                className="z-[5] absolute xl:top-1/2 xl:left-0 lg:top-0 lg:right-0 xl:h-1/2 xl:w-full lg:h-full lg:w-1/2"></tet.div>
        </>
    )
}

export function TimeAndMaterials() {

    const hydrated = useHydration()

    return (
        <tet.section
            backgroundColor="$color-background-neutral-subtle"
            className={cn(sectionPaddings, "rounded-[32px] overflow-hidden relative")}>
            {hydrated && (
                <DashedBoxesOverlay/>
            )}
            <div
                className="lg:hidden container px-10 dividers absolute top-0 left-1/2 -translate-x-1/2 w-full h-full flex xl:flex-row lg:flex-col justify-between z-1">
                <DashedBorderBox/>
                <DashedBorderBox/>
                <DashedBorderBox/>
                <DashedBorderBox/>
                <DashedBorderBox/>
            </div>
            <div className="container relative z-10 xl:h-[688px] lg:h-[736px]">
                <div className="h-full content relative flex xl:flex-row lg:flex-col xl:gap-6 lg:gap-8 xl:items-end">
                    <div className="xl:absolute left-0 top-0">
                        <tet.h2
                            text="$typo-header-3xLarge"
                            color="$color-content-primary"
                            className="mb-2"
                        >
                            Модель Time & Materials
                        </tet.h2>
                        <tet.p
                            text="$typo-body-large"
                            color="$color-content-secondary"
                        >
                            Размер вознаграждения определяется по ставкам специалистов <br/>и затраченному времени на
                            проект
                        </tet.p>
                    </div>
                    <Step className="max-xl:mr-[108px]" height="172px" step={1}>Исследуем отраслевые особенности и требования</Step>
                    <Step className="max-xl:mr-[72px]" selected additionalInfo="На MVP проекта закладывается фиксированная сумма" height="344px"
                          step={2}>Разрабатываем и запускаем MVP проекта</Step>
                    <Step className="max-xl:mr-[36px]" height="516px" step={3}>Привлекаем грантовое финансирование</Step>
                    <Step height="100%" step={4}>Формируем бэклог для дальнейшего развития продукта</Step>
                </div>
            </div>
        </tet.section>
    )
}