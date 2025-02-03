import {sectionPaddings} from "@/components/tailwind-classnames";
import {Divider, tet} from "@virtuslab/tetrisly-react";
import cn from 'classnames';
import React from "react";
import {AdvantagePanel} from "@/components/AdvantagePanel";
import {CustomTag} from "@/components/CustomTag";

export function Advantages() {

    return (
        <section className={cn('container grid xl:grid-cols-2 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-2 gap-x-4', sectionPaddings)}>
            <div className="xl:col-span-1 lg:col-span-2 max-lg:hidden">
                <tet.h2
                    text="$typo-header-3xLarge"
                    color="$color-content-primary"
                >
                    Почему мы?
                </tet.h2>
            </div>
            <div className="xl:col-span-1 lg:col-span-6 md:col-span-6 sm:col-span-2">
                <div
                    className="mb-8"
                >
                    <tet.h2
                        text="$typo-header-3xLarge"
                        color="$color-content-primary"
                        className="mb-4"
                    >
                        Учитываем все отраслевые особенности и требования бизнеса
                    </tet.h2>
                    <tet.p
                        text="$typo-body-large"
                        color="$color-content-secondary"
                        className="mb-4"
                    >
                        Опыт реализации проектов в сферах:
                    </tet.p>
                    <div className="flex gap-3">
                        <CustomTag label="EdTech"/>
                        <CustomTag label="FinTech"/>
                        <CustomTag label="E-commerce"/>
                    </div>
                </div>
                <Divider custom={{color: '$color-border-default'}}/>
                <div className="mt-8 flex max-md:flex-col gap-4 flex-wrap">
                    <AdvantagePanel icon="20-paperplane">Запускаем MVP проекта всего за 1-2 месяца</AdvantagePanel>
                    <AdvantagePanel icon="20-bolt">Совместно с вами управляем приоритетами</AdvantagePanel>
                    <AdvantagePanel icon="20-tree">Обеспечиваем интеграцию  с любыми учетными системами</AdvantagePanel>
                    <AdvantagePanel icon="20-megaphone">Привлекаем грантовое финансирование на реализацию</AdvantagePanel>
                    <AdvantagePanel icon="20-database">Внедряем только собственные технические решения</AdvantagePanel>
                    <AdvantagePanel icon="20-file">Формируем бэклог для дальнейшего развития продукта</AdvantagePanel>
                </div>
            </div>
        </section>
    )
}