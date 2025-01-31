import cn from "classnames";
import {sectionPaddings} from "@/components/tailwind-classnames";
import React, {useEffect, useRef} from "react";
import {tet} from "@virtuslab/tetrisly-react";
import HorizontalScroll from "react-scroll-horizontal";
import {ProfileCaseCard} from "@/components/ProfileCaseCard";

export function Project() {
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
                        className="col-span-1 flex -translate-x-[50vw] !h-[688px] !w-[100vw]"
                    >
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
                    </HorizontalScroll>
                </div>
            </div>
        </section>
    )
}