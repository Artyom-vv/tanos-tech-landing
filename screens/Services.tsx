import cn from 'classnames'
import {sectionPaddings} from "@/components/tailwind-classnames";
import {tet} from '@virtuslab/tetrisly-react';
import React from "react";
import {ServiceCard} from "@/components/ServiceCard";

export function Services() {
    return (
        <tet.section
            backgroundColor="$color-background-neutral-subtle"
        >
            <div className={cn('container grid grid-cols-2 gap-4', sectionPaddings)}>
                <div className="col-span-1 grid grid-cols-2 grid-rows-3 gap-4">
                    <div className="col-span-2">
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
                    <ServiceCard src="/images/web-apps.png" title="Сайты и приложения" className="col-start-2">
                        text
                    </ServiceCard>
                </div>
                <div className="col-span-1 grid grid-cols-2 grid-rows-3 gap-4">
                    <ServiceCard src="/images/web-services.png" title="Веб-сервисы" className="col-span-1">
                        test
                    </ServiceCard>
                    <ServiceCard src="/images/erp-crm.png" title="ERP и CRM-системы" className="col-span-1">
                        test
                    </ServiceCard>
                    <ServiceCard src="/images/it-consulting.png" title="ИТ-консалтинг и поддержка" className="col-span-1">
                        test
                    </ServiceCard>
                    <ServiceCard src="/images/it-algorithmics.png" title="ИИ-алгоритмы" className="row-start-3 col-span-1">
                        test
                    </ServiceCard>
                    {/*<ServiceCard src="" title={} className="row-start-3 col-span-1">*/}
                    {/*    test*/}
                    {/*</ServiceCard>*/}
                </div>
            </div>

        </tet.section>
    )
}