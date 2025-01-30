import {Button, tet} from "@virtuslab/tetrisly-react";
import cn from "classnames";
import {sectionPaddings} from "@/components/tailwind-classnames";
import React from "react";
import {RedirectBlock} from "@/components/RedirectBlock";

export function GeneralDirector() {
    return (
        <tet.section
            backgroundColor="$color-background-neutral-subtle"
            className={cn(sectionPaddings, "rounded-[32px]")}>
            <div className="container grid grid-cols-2 gap-4">
                <div className="col-span-1 flex flex-col justify-between pr-4">
                    <div>
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
                            Генеральный директор ООО "ТАНОС ТЕХ"
                        </tet.p>
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
                    </div>
                    <div className="flex gap-4">
                        <RedirectBlock title="Более 100 проектов" description="реализовано за время работы" link="#">Портфолио</RedirectBlock>
                        <RedirectBlock title="50+ выступлений" description="в качестве ведущего спикера" link="#">Выступления</RedirectBlock>
                    </div>
                </div>
                <div className="col-span-1">
                    <img className="rounded-[8px]" src="/images/director.png" alt=""/>
                </div>
            </div>
        </tet.section>
    )
}