import {sectionPaddings} from "@/components/tailwind-classnames";
import {Divider, tet} from "@virtuslab/tetrisly-react";
import cn from 'classnames';
import React from "react";
import {InfoPanelSmall} from "@/components/InfoPanelSmall";
import {CustomTag} from "@/components/CustomTag";

export function Advantages() {

    return (
        <section className={cn('container grid grid-cols-2 gap-4', sectionPaddings)}>
            <div className="col-span-1">
                <tet.h2
                    text="$typo-header-3xLarge"
                    color="$color-content-primary"
                >
                    Почему мы?
                </tet.h2>
            </div>
            <div className="col-span-1">
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
                        <CustomTag>EdTech</CustomTag>
                        <CustomTag>FinTech</CustomTag>
                        <CustomTag>E-commerce</CustomTag>
                    </div>
                </div>
                <Divider custom={{color: '$color-border-default'}}/>
                <div className="mt-8 flex gap-4 flex-wrap">
                    <InfoPanelSmall icon="20-paperplane">Запускаем MVP проекта всего за 1-2 месяца</InfoPanelSmall>
                    <InfoPanelSmall icon="20-bolt">Совместно с вами управляем приоритетами</InfoPanelSmall>
                    <InfoPanelSmall icon="20-tree">Обеспечиваем интеграцию  с любыми учетными системами</InfoPanelSmall>
                    <InfoPanelSmall icon="20-megaphone">Привлекаем грантовое финансирование на реализацию</InfoPanelSmall>
                    <InfoPanelSmall icon="20-database">Внедряем только собственные технические решения</InfoPanelSmall>
                    <InfoPanelSmall icon="20-file">Формируем бэклог для дальнейшего развития продукта</InfoPanelSmall>
                </div>
            </div>
        </section>
    )
}