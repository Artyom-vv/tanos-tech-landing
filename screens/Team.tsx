import cn from "classnames";
import {sectionPaddings} from "@/components/tailwind-classnames";
import {Divider, tet} from "@virtuslab/tetrisly-react";
import React from "react";
import {TeamMemberCard} from "@/components/TeamMemberCard";

export function Team() {
    return (
        <section className={cn(sectionPaddings)}>
            <div className="container grid xl:grid-cols-2 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-2 gap-x-4">
                <div className="xl:col-span-1 lg:col-span-2 sm:col-span-2 max-lg:hidden">
                    <tet.h2
                        text="$typo-header-3xLarge"
                        color="$color-content-primary"
                        className="mb-2"
                    >
                        Команда
                    </tet.h2>
                </div>
                <div className="xl:col-span-1 lg:col-span-6 md:col-span-6 sm:col-span-2">
                    <tet.h2
                        text="$typo-header-3xLarge"
                        color="$color-content-primary"
                        className="mb-4"
                    >
                        Мы – команда экспертов, специализирующаяся на разработке и внедрении ИИ-решений для бизнеса
                    </tet.h2>
                    <tet.p
                        text="$typo-body-large"
                        color="$color-content-secondary"
                    >
                        Превращаем возможности искусственного интеллекта  в реальные бизнес-результаты
                    </tet.p>

                    <div className="my-8">
                        <Divider custom={{color: '$color-border-default'}}/>
                    </div>

                    <div className="md:grid max-md:flex max-md:flex-col grid-cols-2 grid-rows-2 gap-4">
                        <TeamMemberCard src="/images/team/1.png" title="Алексеев Александр" className="col-span-1">Более 5 лет в IT-разработке,  победитель крупнейших хакатонов СНГ</TeamMemberCard>
                        <TeamMemberCard src="/images/team/2.png" title="Артем Коргинов" className="col-span-1">Более 5 лет в IT-разработке,  победитель крупнейших хакатонов СНГ</TeamMemberCard>
                        <div className="row-start-2 col-span-2 flex max-md:flex-col gap-4 xl:-translate-x-[336px]">
                            <TeamMemberCard src="/images/team/3.png" title="Артем Королев" className="col-span-1">Более 5 лет в IT-разработке,  победитель крупнейших хакатонов СНГ</TeamMemberCard>
                            <TeamMemberCard src="/images/team/4.png" title="Дмитрий Морозов" className="col-span-1">Более 5 лет в IT-разработке,  победитель крупнейших хакатонов СНГ</TeamMemberCard>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}