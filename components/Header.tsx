import {Button, tet} from "@virtuslab/tetrisly-react";
import {ReactSVG} from "react-svg";
import React, {useContext} from "react";
import {CustomLink} from "@/components/CustomLink";
import {ModalContext, SectionContext} from "@/pages";

export function Header() {
    const {openModal} = useContext(ModalContext)
    const {onSection} = useContext(SectionContext)

    return (
        <tet.div borderBottomWidth="1px" borderBottomColor="$color-border-default"
                 backgroundColor="$color-background-default" className="xl:h-[64px] lg:h-[72px]">
            <div className="container grid xl:grid-cols-12 max-xl:grid-cols-8 gap-4 h-full items-center">
                <div className="col-span-2 xl:hidden">
                    <Button variant="ghost" appearance="secondary" size="large" beforeIcon="20-menu">
                        Меню
                    </Button>
                </div>
                <div className="xl:col-span-3 max-xl:col-start-3 max-xl:col-span-4 max-xl:justify-center max-xl:flex">
                    <a href="">
                        <ReactSVG src="/svg/logotype.svg"/>
                    </a>
                </div>
                <div className="max-xl:hidden col-start-7 col-span-3 flex gap-2">
                    <CustomLink onClick={() => onSection('services')}>Услуги</CustomLink>
                    <CustomLink onClick={() => onSection('projects')}>Кейсы</CustomLink>
                    <CustomLink onClick={() => onSection('contacts')}>Контакты</CustomLink>
                    <CustomLink onClick={() => onSection('ai')}>ИИ для бизнеса</CustomLink>

                </div>
                <div className="xl:col-span-3 max-xl:col-span-2 flex justify-end">
                    <Button onClick={openModal} type="button" appearance="primary" size="large" variant="ghost">Заказать
                        проект</Button>
                </div>
            </div>
        </tet.div>
    )
}