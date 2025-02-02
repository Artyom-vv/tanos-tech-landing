import cn from "classnames";
import {sectionPaddings} from "@/components/tailwind-classnames";
import React from "react";
import {tet} from "@virtuslab/tetrisly-react";
import HorizontalScroll from "react-scroll-horizontal";
import {ProfileCaseCard} from "@/components/ProfileCaseCard";
import {useBreakpoint} from "@/hooks/useBreakpoint";
import useHydration from "@/hooks/useHedration";

const Cards = () => (
    <>
        <ProfileCaseCard
            firstTitle="3 месяца"
            firstDescription="На разработку MVP-версии проекта"
            secondTitle="в 5 раз"
            secondDescription="Ускорены ключевые бизнес-процессы"
            tags={["Автоматизация", "Алгоритм", "ERP"]}
            className="mr-[36px]"
            src="/images/cases/feedback-lab.png"
            title="Feedback Lab"
        >Продукт для расчетов сметы кровли и управления проектами для дилеров кровли, заводов и других
            контрагентов</ProfileCaseCard>
        <ProfileCaseCard
            firstTitle="3 месяца"
            firstDescription="На разработку MVP-версии проекта"
            secondTitle="в 12 раз"
            secondDescription="Ускорены ключевые бизнес-процессы"
            tags={["Автоматизация", "Алгоритм", "ERP"]}
            className="mr-[36px]"
            src="/images/cases/feedback-lab.png"
            title="Feedback Lab"
        >Продукт для расчетов сметы кровли и управления проектами для дилеров кровли, заводов и других
            контрагентов</ProfileCaseCard>
        <ProfileCaseCard
            firstTitle="3 месяца"
            firstDescription="На разработку MVP-версии проекта"
            secondTitle="в 4 раз"
            secondDescription="Ускорены ключевые бизнес-процессы"
            tags={["Автоматизация", "Алгоритм", "ERP"]}
            className="mr-[36px]"
            src="/images/cases/feedback-lab.png"
            title="Feedback Lab"
        >Продукт для расчетов сметы кровли и управления проектами для дилеров кровли, заводов и других
            контрагентов</ProfileCaseCard>
        <ProfileCaseCard
            firstTitle="3 месяца"
            firstDescription="На разработку MVP-версии проекта"
            secondTitle="в 5 раз"
            secondDescription="Ускорены ключевые бизнес-процессы"
            tags={["Автоматизация", "Алгоритм", "ERP"]}
            className="mr-[36px]"
            src="/images/cases/feedback-lab.png"
            title="Feedback Lab"
        >Продукт для расчетов сметы кровли и управления проектами для дилеров кровли, заводов и других
            контрагентов</ProfileCaseCard>
        <ProfileCaseCard
            firstTitle="3 месяца"
            firstDescription="На разработку MVP-версии проекта"
            secondTitle="в 11 раз"
            secondDescription="Ускорены ключевые бизнес-процессы"
            tags={["Автоматизация", "Алгоритм", "ERP"]}
            className="mr-[36px]"
            src="/images/cases/feedback-lab.png"
            title="Feedback Lab"
        >Продукт для расчетов сметы кровли и управления проектами для дилеров кровли, заводов и других
            контрагентов</ProfileCaseCard>
    </>
)

export function Projects() {
    const breakpoint = useBreakpoint();
    const hydrated = useHydration();

    return (
        <section className={cn(sectionPaddings)}>
            <div className="container grid xl:grid-cols-2 lg:grid-cols-8 gap-4">
                <div className="xl:col-span-1 lg:col-span-2">
                    <tet.h2 text="$typo-header-3xLarge" color="$color-content-primary">
                        Наши работы
                    </tet.h2>
                </div>
                <div className="xl:col-span-1 lg:col-span-6">
                    {hydrated && (
                        <>
                            {breakpoint === "xl" && (
                                <HorizontalScroll
                                    pageLock
                                    reverseScroll
                                    className="flex xl:flex-row lg:flex-col -translate-x-[50vw] !h-[688px] !w-[100vw]"
                                >
                                    <Cards />
                                    <span></span>
                                </HorizontalScroll>
                            )}
                            {breakpoint === "lg" && (
                                <div className="flex flex-col gap-8">
                                    <Cards />
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}