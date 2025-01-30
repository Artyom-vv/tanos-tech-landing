import cn from "classnames";
import {sectionPaddings} from "@/components/tailwind-classnames";
import React, {useEffect, useRef} from "react";
import {tet} from "@virtuslab/tetrisly-react";
import HorizontalScroll from "react-scroll-horizontal";

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
               <div className="col-span-1">
                   <HorizontalScroll
                       pageLock
                       reverseScroll
                       className="col-span-1 flex gap-[36px] -translate-x-[50vw] !h-[688px] !w-[100vw]"
                   >
                       <div className="mr-[36px] relative flex-shrink-0 w-[656px] bg-blue-200">1</div>
                       <div className="mr-[36px] relative flex-shrink-0 w-[656px] bg-blue-200">2</div>
                       <div className="mr-[36px] relative flex-shrink-0 w-[656px] bg-blue-200">3</div>
                       <div className="mr-[36px] relative flex-shrink-0 w-[656px] bg-blue-200">4</div>
                   </HorizontalScroll>
               </div>
            </div>
        </section>
    )
}