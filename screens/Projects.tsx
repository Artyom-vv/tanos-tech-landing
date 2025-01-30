import cn from "classnames";
import {sectionPaddings} from "@/components/tailwind-classnames";
import React, {useEffect, useRef} from "react";
import {tet} from "@virtuslab/tetrisly-react";

export function Project () {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const handleWheel = (event: WheelEvent) => {
            if (event.deltaY === 0 || event.ctrlKey) return;

            event.preventDefault();
            const scrollAmount = event.deltaMode === 1 ? event.deltaY * 20 : event.deltaY;

            scrollContainer.scrollLeft += scrollAmount;
        };

        scrollContainer.addEventListener("wheel", handleWheel, { passive: false });

        return () => scrollContainer.removeEventListener("wheel", handleWheel);
    }, []);

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
                <tet.div
                    ref={scrollContainerRef}
                    className="col-span-1 flex gap-[36px] -translate-x-[50vw] w-[100vw] overflow-x-auto snap-x scrollbar-none pl-[50vw]">
                    <div className="snap-end relative flex-shrink-0 h-[688px] w-[656px] bg-blue-200">1</div>
                    <div className="snap-end relative flex-shrink-0 h-[688px] w-[656px] bg-blue-200">2</div>
                    <div className="snap-end relative flex-shrink-0 h-[688px] w-[656px] bg-blue-200">3</div>
                    <div className="snap-end relative flex-shrink-0 h-[688px] w-[656px] bg-blue-200">4</div>
                </tet.div>
            </div>
        </section>
    )
}