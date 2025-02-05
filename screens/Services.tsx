import cn from 'classnames'
import {sectionPaddings} from "@/components/tailwind-classnames";
import {Button, tet} from '@virtuslab/tetrisly-react';
import React, {useContext} from "react";
import {ServiceCard} from "@/components/ServiceCard";
import {ModalContext} from "@/pages";
import {useBreakpoint} from "@/hooks/useBreakpoint";

export function Services() {
    const {openModal} = useContext(ModalContext)
    const breakpoint = useBreakpoint()

    const getButtonSize = () => {
        switch (breakpoint) {
            case "md":
                return "308px"
            case "sm":
                return "328px"
            default:
                return "320px"
        }
    }

    return (
        <tet.section
            backgroundColor="$color-background-neutral-subtle"
            className="md:rounded-[32px] max-md:rounded-[16px]"
        >
            <div className={cn('container grid xl:grid-cols-2 lg:grid-cols-8 md:grid-cols-6 gap-x-4', sectionPaddings)}>
                <div className="xl:col-span-1 lg:col-span-2 md:col-span-6">
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
                <div
                    className="xl:col-span-1 lg:col-span-6 md:col-span-6 md:grid max-md:flex max-md:flex-col grid-cols-2 grid-rows-3 max-xl:auto-rows-min gap-4 max-lg:mt-8">
                    <ServiceCard src="/images/web-services.png" title="Веб-сервисы" className="col-span-1">
                        Создаем масштабируемые решения, которые обеспечивают рост вашего бизнеса и адаптацию  к изменениям рынка
                    </ServiceCard>
                    <ServiceCard src="/images/erp-crm.png" title="ERP и CRM-системы" className="col-span-1">
                        Оптимизируем управление внутренними процессами,  повышая производительность  и облегчая масштабирование
                    </ServiceCard>
                    <div className="row-start-2 col-span-2 flex max-md:flex-col gap-4 xl:-translate-x-[336px]">
                        <ServiceCard src="/images/web-apps.png" title="Сайты и приложения" className="col-start-2">
                            Предлагаем интерактивные решения для привлечения и удержания клиентов
                        </ServiceCard>
                        <ServiceCard src="/images/it-consulting.png" title="ИТ-консалтинг и поддержка"
                                     className="col-span-1">
                            Предоставляем экспертную поддержку и стратегическое руководство
                        </ServiceCard>
                    </div>
                    <ServiceCard src="/images/it-algorithmics.png" title="ИИ-алгоритмы"
                                 className="row-start-3 col-span-1">
                        Внедряем собственные и готовые ИИ-модели для аналитики, виртуальных ассистентов, чат-ботов и других сервисов
                    </ServiceCard>
                    <Button
                        className="row-start-3 col-span-1 max-md:mt-4"
                        onClick={openModal}
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
                                        ...(breakpoint === "sm" ? {} : {
                                            h: getButtonSize(),
                                            w: getButtonSize()
                                        }),
                                        borderRadius: '$border-radius-large',
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
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