import {sectionPaddings} from "@/components/tailwind-classnames";
import {tet} from "@virtuslab/tetrisly-react";
import cn from "classnames";
import React from "react";
import {Step} from "@/screens/Step";

export default function DashedBorderBox() {
    return (
        <tet.div
            borderColor="$color-border-neutral-subtle"
            className="bg-[linear-gradient(to_bottom,#CFD6DD_0px,#CFD6DD_8px,transparent_8px,transparent_24px)] bg-[length:1px_24px] bg-repeat-y w-[1px] bg-origin-border"
        />
    );
}

export function TimeAndMaterials() {
    return (
        <tet.section
            backgroundColor="$color-background-neutral-subtle"
            className={cn(sectionPaddings, "rounded-[32px] overflow-hidden relative")}>
            <tet.div
                background="linear-gradient(180deg, #F5F7F9 0%, rgba(245, 247, 249, 0.991615) 11.79%, rgba(245, 247, 249, 0.967585) 21.38%, rgba(245, 247, 249, 0.9296) 29.12%, rgba(245, 247, 249, 0.879348) 35.34%, rgba(245, 247, 249, 0.818519) 40.37%, rgba(245, 247, 249, 0.7488) 44.56%, rgba(245, 247, 249, 0.671881) 48.24%, rgba(245, 247, 249, 0.589452) 51.76%, rgba(245, 247, 249, 0.5032) 55.44%, rgba(245, 247, 249, 0.414815) 59.63%, rgba(245, 247, 249, 0.325985) 64.66%, rgba(245, 247, 249, 0.2384) 70.88%, rgba(245, 247, 249, 0.153748) 78.62%, rgba(245, 247, 249, 0.0737185) 88.21%, rgba(245, 247, 249, 0) 100%)"
                className="z-[5] absolute top-0 left-0 h-1/2 w-full"></tet.div>
            <tet.div
                background="linear-gradient(0, #F5F7F9 0%, rgba(245, 247, 249, 0.991615) 11.79%, rgba(245, 247, 249, 0.967585) 21.38%, rgba(245, 247, 249, 0.9296) 29.12%, rgba(245, 247, 249, 0.879348) 35.34%, rgba(245, 247, 249, 0.818519) 40.37%, rgba(245, 247, 249, 0.7488) 44.56%, rgba(245, 247, 249, 0.671881) 48.24%, rgba(245, 247, 249, 0.589452) 51.76%, rgba(245, 247, 249, 0.5032) 55.44%, rgba(245, 247, 249, 0.414815) 59.63%, rgba(245, 247, 249, 0.325985) 64.66%, rgba(245, 247, 249, 0.2384) 70.88%, rgba(245, 247, 249, 0.153748) 78.62%, rgba(245, 247, 249, 0.0737185) 88.21%, rgba(245, 247, 249, 0) 100%)"
                className="z-[5] absolute bottom-0 left-0 h-1/2 w-full"></tet.div>
            <div
                className="container px-10 dividers absolute top-0 left-1/2 -translate-x-1/2 w-full h-full flex justify-between z-1">
                <DashedBorderBox/>
                <DashedBorderBox/>
                <DashedBorderBox/>
                <DashedBorderBox/>
                <DashedBorderBox/>
            </div>
            <div className="container relative z-10 h-[688px]">
                <div className="h-full content relative flex gap-6 items-end">
                    <div className="absolute left-0 top-0">
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

                    <Step height="172px" step={1}>Исследуем отраслевые особенности и требования</Step>
                    <Step selected additionalInfo="На MVP проекта закладывается фиксированная сумма" height="344px" step={2}>Разрабатываем и запускаем MVP проекта</Step>
                    <Step height="516px" step={3}>Привлекаем грантовое финансирование</Step>
                    <Step height="100%" step={4}>Формируем бэклог для дальнейшего развития продукта</Step>
                </div>
            </div>
        </tet.section>
    )
}