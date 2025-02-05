import {Button, tet} from "@virtuslab/tetrisly-react";
import cn from "classnames";
import {sectionPaddings} from "@/components/tailwind-classnames";
import React from "react";
import {RedirectBlock} from "@/components/RedirectBlock";

function MoreInfo() {
    return (
        <div className="flex flex-col justify-between h-full gap-8">
            <div className="flex flex-col gap-4">
                <tet.p
                    text="$typo-body-large"
                    color="$color-content-secondary"
                >
                    Специализируется на оценке бизнеса, разработке стратегий инновационного развития,
                    технологическом аудите и внедрении технологий в реальные сектора экономики.
                </tet.p>
                <tet.p
                    text="$typo-body-large"
                    color="$color-content-secondary"
                >
                    В портфеле более 700 решений, а также опыт подбора грантовых возможностей для бизнеса.
                </tet.p>
                <tet.p
                    text="$typo-body-large"
                    color="$color-content-secondary"
                >
                    Вячеслав также является экспертом Фонда содействия инновациям, Фонда Сколково, Фонда
                    «Росконгресс», наставник платформы «МСП.РФ».
                </tet.p>
            </div>
            <div className="flex max-md:flex-col gap-4">
                <RedirectBlock title="Более 100 проектов" description="реализовано за время работы"
                               link="#">Портфолио</RedirectBlock>
                <RedirectBlock title="50+ выступлений" description="в качестве ведущего спикера"
                               link="#">Выступления</RedirectBlock>
            </div>
        </div>
    )
}

export function GeneralDirector() {
    return (
        <tet.section
            backgroundColor="$color-background-neutral-subtle"
            className={cn(sectionPaddings, "md:rounded-[32px] max-md:rounded-[16px]")}>
            <div className="container grid xl:grid-cols-2 lg:grid-cols-8 max-md:grid-cols-2  gap-x-4">
                <div className="xl:col-span-1 lg:col-span-2 max-md:col-span-2 pr-4 flex flex-col">
                    <tet.h2
                        text="$typo-header-3xLarge"
                        color="$color-content-primary"
                        className="mb-2"
                    >
                        Вячеслав Буслаев
                    </tet.h2>
                    <tet.p
                        text="$typo-body-large"
                        color="$color-content-secondary"
                        className="mb-8"
                    >
                        Генеральный директор <br className="md:hidden"/> ООО "ТАНОС ТЕХ"
                    </tet.p>
                    <div className="max-xl:hidden h-full">
                        <MoreInfo/>
                    </div>
                </div>
                <div className="xl:col-span-1 lg:col-span-6 max-md:col-span-2 flex flex-col">
                    <img className="rounded-[8px] w-full object-cover max-xl:h-[632px] max-md:size-[328px] max-xl:mb-8"
                         src="/images/director.png" alt=""/>
                    <div className="xl:hidden h-full">
                        <MoreInfo/>
                    </div>
                </div>
            </div>
        </tet.section>
    )
}