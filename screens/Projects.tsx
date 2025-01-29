import cn from "classnames";
import {sectionPaddings} from "@/components/tailwind-classnames";
import React from "react";
import {tet} from "@virtuslab/tetrisly-react";

export function Project () {

    return (
        <section className={cn(sectionPaddings)}>
            <div className="container grid grid-cols-2 gap-4">
                <div className="col-span-1">
                    <tet.h2
                        text="$typo-header-3xLarge"
                        color="$color-content-primary"
                    >
                        Наши работы
                    </tet.h2>
                </div>
                <tet.div className="col-span-1 flex gap-[36px] w-[calc(50vw-16px)] overflow-x-scroll scroll-pr-[200px]">
                    <div className="relative flex-shrink-0 h-[688px] w-[656px] bg-blue-200"></div>
                    <div className="relative flex-shrink-0 h-[688px] w-[656px] bg-blue-200"></div>
                    <div className="relative flex-shrink-0 h-[688px] w-[656px] bg-blue-200"></div>
                    <div className="relative flex-shrink-0 h-[688px] w-[656px] bg-blue-200"></div>
                </tet.div>
            </div>
        </section>
    )
}