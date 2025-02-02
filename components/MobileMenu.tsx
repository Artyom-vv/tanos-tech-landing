import Modal from "react-modal";
import {ReactSVG} from "react-svg";
import React from "react";
import {Button, Divider, tet} from "@virtuslab/tetrisly-react";
import {FooterContacts, FooterInfo} from "@/screens/Footer";

export function MobileMenu({isModal, onClose, onSection}: {
    isModal: boolean, onClose: () => void,
    onSection: (id: string) => void
}) {

    const handleLinkClick = (section: string) => {
        onClose();
        requestAnimationFrame(() => {
            onSection(section);
        })
    }

    return (
        <Modal
            style={{
                content: {
                    backgroundColor: '#272E35',
                },
                overlay: {
                    zIndex: 999,
                    backgroundColor: '#0000004D',
                },
            }}
            isOpen={isModal}
            className={`h-full relative transition-all duration-300`}
        >
            <div className="container flex flex-col justify-between h-full overflow-x-auto">
                <div>
                    <div className="py-3 grid lg:grid-cols-8 gap-4">
                        <div className="col-span-2">
                            <Button
                                onClick={onClose}
                                variant="ghost"
                                appearance="inverted"
                                size="large"
                                beforeIcon="20-close"
                            >
                                Закрыть
                            </Button>
                        </div>
                        <div className="col-span-4 flex items-center justify-center">
                            <a href="">
                                <ReactSVG className="fill-white" src="/svg/logotype.svg"/>
                            </a>
                        </div>
                        <div className="col-span-2"></div>
                    </div>
                    <Divider custom={{color: '$color-border-neutral-strong'}}/>
                    <div className="flex flex-col gap-6 mt-[72px]">
                        <tet.a
                            text="$typo-hero-large"
                            color="$color-content-primary-inverted"
                            onClick={() => handleLinkClick('services')}
                        >
                            Услуги
                        </tet.a>
                        <tet.a
                            text="$typo-hero-large"
                            color="$color-content-primary-inverted"
                            onClick={() => handleLinkClick('projects')}
                        >
                            Кейсы
                        </tet.a>
                        <tet.a
                            text="$typo-hero-large"
                            color="$color-content-primary-inverted"
                            onClick={() => handleLinkClick('contacts')}
                        >
                            Контакты
                        </tet.a>
                        <tet.a
                            text="$typo-hero-large"
                            color="$color-content-primary-inverted"
                            onClick={() => handleLinkClick('ai')}
                        >
                            ИИ для бизнеса
                        </tet.a>
                    </div>
                </div>

                <div className="py-[72px]">
                    <FooterContacts/>
                    <Divider custom={{color: '$color-border-neutral-strong'}}/>
                    <FooterInfo/>
                </div>

            </div>
        </Modal>
    );
}