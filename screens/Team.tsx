import cn from "classnames";
import {sectionPaddings} from "@/components/tailwind-classnames";
import {Divider, tet} from "@virtuslab/tetrisly-react";
import React from "react";
import {TeamMemberCard} from "@/components/TeamMemberCard";

export function Team() {
    return (
        <section className={cn(sectionPaddings)}>
            <div className="container grid grid-cols-2 gap-4">
                <div className="col-span-1">
                    <tet.h2
                        text="$typo-header-3xLarge"
                        color="$color-content-primary"
                        className="mb-2"
                    >
                        Команда
                    </tet.h2>
                </div>
                <div className="col-span-1">
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
                        className="mb-4"
                    >
                        Превращаем возможности искусственного интеллекта  в реальные бизнес-результаты
                    </tet.p>
                    <Divider custom={{color: '$color-border-default'}}/>
                    <div className="mt-8 grid grid-cols-2 grid-rows-2 gap-4">
                        <TeamMemberCard src="/images/team/1.png" title="Алексеев Александр" className="col-span-1">Более 5 лет в IT-разработке,  победитель крупнейших хакатонов СНГ</TeamMemberCard>
                        <TeamMemberCard src="/images/team/2.png" title="Артем Коргинов" className="col-span-1">Более 5 лет в IT-разработке,  победитель крупнейших хакатонов СНГ</TeamMemberCard>
                        <div className="row-start-2 col-span-2 flex gap-4 -translate-x-[336px]">
                            <TeamMemberCard src="/images/team/3.png" title="Артем Королев" className="col-span-1">Более 5 лет в IT-разработке,  победитель крупнейших хакатонов СНГ</TeamMemberCard>
                            <TeamMemberCard src="/images/team/4.png" title="Дмитрий Морозов" className="col-span-1">Более 5 лет в IT-разработке,  победитель крупнейших хакатонов СНГ</TeamMemberCard>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}