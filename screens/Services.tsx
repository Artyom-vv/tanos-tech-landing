import cn from 'classnames'
import {sectionPaddings} from "@/components/tailwind-classnames";
import {Button, tet} from '@virtuslab/tetrisly-react';
import React from "react";
import {ServiceCard} from "@/components/ServiceCard";

export function Services() {
    return (
        <tet.section
            backgroundColor="$color-background-neutral-subtle"
            className="rounded-[32px]"
        >
            <div className={cn('container grid grid-cols-2 gap-4', sectionPaddings)}>
                <div className="col-span-1">
                    <tet.h2
                        text="$typo-header-3xLarge"
                        color="$color-content-primary"
                        className="mb-2"
                    >
                        Услуги
                    </tet.h2>
                    <tet.p
                        text="$typo-body-large"
                        color="$color-content-secondary"
                    >
                        Каждый проект - это новая возможность
                    </tet.p>
                </div>
                <div className="col-span-1 grid grid-cols-2 grid-rows-3 gap-4">
                    <ServiceCard src="/images/web-services.png" title="Веб-сервисы" className="col-span-1">
                        Создаем масштабируемые решения, которые обеспечивают рост вашего бизнеса и адаптацию к
                        изменениям рынка
                    </ServiceCard>
                    <ServiceCard src="/images/erp-crm.png" title="ERP и CRM-системы" className="col-span-1">
                        Lorem ipsum odor amet, consectetuer adipiscing elit.
                    </ServiceCard>
                    <div className="row-start-2 col-span-2 flex gap-4 -translate-x-[336px]">
                        <ServiceCard src="/images/web-apps.png" title="Сайты и приложения" className="col-start-2">
                            Lorem ipsum odor amet, consectetuer adipiscing elit.
                        </ServiceCard>
                        <ServiceCard src="/images/it-consulting.png" title="ИТ-консалтинг и поддержка" className="col-span-1">
                            Lorem ipsum odor amet, consectetuer adipiscing elit.
                        </ServiceCard>
                    </div>
                    <ServiceCard src="/images/it-algorithmics.png" title="ИИ-алгоритмы" className="row-start-3 col-span-1">
                        Lorem ipsum odor amet, consectetuer adipiscing elit.
                    </ServiceCard>
                    <Button
                        className={cn("row-start-3 col-span-1")}
                        custom={{
                            ghost: {
                                appearance: {
                                    inverted: {
                                        boxShadow: '',
                                        bg: {
                                            _: '$color-action-primary-normal',
                                            hover: '$color-action-primary-hover',
                                            active: '$color-action-primary-active',
                                        },
                                        h: '320px',
                                        w: '320px',
                                        borderRadius: '$border-radius-large',
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent:"center"
                                    }
                                },
                            }
                        }}
                        variant="ghost" appearance="inverted" size="large">Заказать проект</Button>

                </div>
            </div>

        </tet.section>
    )
}