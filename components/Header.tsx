import {Button, IconButton, tet} from "@virtuslab/tetrisly-react";
import {ReactSVG} from "react-svg";
import React, {useContext, useState} from "react";
import {CustomLink} from "@/components/CustomLink";
import {ModalContext, SectionContext} from "@/pages";
import {MobileMenu} from "@/components/MobileMenu";

export function Header() {
    const [menuModal, setMenuModal] = useState(false);
    const {openModal: openRequestModal} = useContext(ModalContext)
    const {onSection} = useContext(SectionContext)

    return (
        <>
            <MobileMenu onSection={onSection} onClose={() => setMenuModal(false)} isModal={menuModal}/>
            <tet.div borderBottomWidth="1px" borderBottomColor="$color-border-default"
                     backgroundColor="$color-background-default" className="xl:h-[64px] md:h-[72px] max-md:h-[64px]">
                <div className="container grid xl:grid-cols-12 max-xl:grid-cols-8 gap-x-4 h-full items-center">
                    <div className="col-span-2 xl:hidden">
                        <Button
                            className="max-md:!hidden"
                            onClick={() => setMenuModal(true)}
                            variant="ghost" appearance="secondary" size="large"
                            beforeIcon="20-menu">
                            Меню
                        </Button>
                        <IconButton
                            onClick={() => setMenuModal(true)}
                            className="md:!hidden"
                            variant="ghost" appearance="secondary" size="large" icon="20-menu"></IconButton>
                    </div>
                    <div
                        className="xl:col-span-3 max-xl:col-start-3 max-xl:col-span-4 max-xl:justify-center max-xl:flex">
                        <a href="">
                            <ReactSVG className="fill-[#272E35]" src="/svg/logotype.svg"/>
                        </a>
                    </div>
                    <div className="max-xl:hidden col-start-7 col-span-3 flex gap-2">
                        <CustomLink onClick={() => onSection('services')}>Услуги</CustomLink>
                        <CustomLink onClick={() => onSection('projects')}>Кейсы</CustomLink>
                        <CustomLink onClick={() => onSection('contacts')}>Контакты</CustomLink>
                        <CustomLink onClick={() => onSection('ai')}>ИИ для бизнеса</CustomLink>

                    </div>
                    <div className="xl:col-span-3 max-xl:col-span-2 flex justify-end">
                        <Button
                            className="max-md:!hidden"
                            onClick={openRequestModal}
                            type="button" appearance="primary" size="large"
                            variant="ghost">Заказать
                            проект</Button>
                        <Button
                            onClick={openRequestModal}
                            className="md:!hidden"
                            appearance="inverted"
                            size="large"
                            variant="ghost"
                        >
                            <ReactSVG className="size-[20px]" src="/svg/tetrisly-arrow-right.svg"/>
                        </Button>
                    </div>
                </div>
            </tet.div>
        </>
    )
}