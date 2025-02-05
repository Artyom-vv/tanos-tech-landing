import cn from "classnames";
import {sectionPaddings} from "@/components/tailwind-classnames";
import React, {useEffect, useRef, useState} from "react";
import {tet} from "@virtuslab/tetrisly-react";
import HorizontalScroll from "react-scroll-horizontal";
import {ProfileCaseCard} from "@/components/ProfileCaseCard";
import {useBreakpoint} from "@/hooks/useBreakpoint";
import useHydration from "@/hooks/useHedration";

const Cards = () => (
    <>
        <ProfileCaseCard
            firstTitle="6 мес"
            firstDescription="На разработку MVP-версии проекта"
            secondTitle="в 3 раза"
            secondDescription="Сократили издержки школ"
            tags={["Автоматизация", "Алгоритм", "ERP"]}
            className="mr-[36px]"
            src="/images/cases/feedback-lab.png"
            title="Feedback Lab"
        >
            Разработка сервиса для сбора и аналитики обратной связи с учеников онлайн школ через мессенджеры с помощью ИИ ассистента
        </ProfileCaseCard>
        <ProfileCaseCard
            firstTitle="2,5 мес"
            firstDescription="На разработку MVP-версии проекта"
            secondTitle="в 5 раз"
            secondDescription="Ускорены ключевые бизнес-процессы"
            tags={["Автоматизация", "Алгоритм", "ERP"]}
            className="mr-[36px]"
            src="/images/cases/roof-pro.png"
            title="Roof PRO"
        >
            Cервис для расчетов сметы кровли и управления проектами для дилеров кровли, заводов и других контрагентов
        </ProfileCaseCard>
        <ProfileCaseCard
            secondTitle="на 70%"
            secondDescription="Снизили затраты времени на закупку и учет СИЗ"
            tags={["Автоматизация", "Алгоритм", "ERP"]}
            src="/images/cases/safety-pro.png"
            title="Safety PRO"
        >
            Платформа для управления взаимоотношениями между покупателями и продавцами средств индивидуальной защиты.
        </ProfileCaseCard>
    </>
)

export function Projects() {

    const [dif, setDif] = useState(0)

    const breakpoint = useBreakpoint();
    const hydrated = useHydration();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const paddingRight = parseFloat(getComputedStyle(containerRef.current).paddingRight);
            const dif = (window.innerWidth - containerRef.current.offsetWidth) / 2 + paddingRight;
            setDif(dif+12)
        }
    }, [containerRef.current]);

    return (
        <section className={cn(sectionPaddings)}>
            <div ref={containerRef}
                 className="container grid xl:grid-cols-2 lg:grid-cols-8 md:grid-cols-6 max-md:grid-cols-2 gap-x-4">
                <div className="xl:col-span-1 lg:col-span-2 md:col-span-6 max-md:col-span-2 max-lg:mb-8">
                    <tet.h2 text="$typo-header-3xLarge" color="$color-content-primary">
                        Наши работы
                    </tet.h2>
                </div>
                <div className="xl:col-span-1 lg:col-span-6 md:col-span-6 max-md:col-span-2">
                    {hydrated && (
                        <>
                            {breakpoint === "xl" && (
                                <HorizontalScroll
                                    pageLock
                                    reverseScroll
                                    className="flex xl:flex-row lg:flex-col -translate-x-[50vw] !h-[688px] !w-[100vw]"
                                >
                                    <Cards/>
                                    <tet.div w={dif}>
                                    </tet.div>
                                </HorizontalScroll>
                            )}
                            {breakpoint !== "xl" && (
                                <div className="flex flex-col gap-8">
                                    <Cards/>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}