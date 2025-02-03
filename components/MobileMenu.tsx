import Modal from "react-modal";
import {ReactSVG} from "react-svg";
import React from "react";
import {Button, Divider, IconButton, tet} from "@virtuslab/tetrisly-react";
import {FooterContent} from "@/screens/Footer";
import useHeroLargeTypo from "@/hooks/useHeroLargeTypo";

export function MobileMenu({isModal, onClose, onSection}: {
    isModal: boolean, onClose: () => void,
    onSection: (id: string) => void
}) {
    const heroLargeTypo = useHeroLargeTypo();

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
                    <div className="py-3 max-md:py-2 md:grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-2 gap-x-4">
                        <div className="lg:col-span-2 md:col-span-2 max-md:hidden">
                            <Button
                                className="max-md:!hidden"
                                onClick={onClose}
                                variant="ghost"
                                appearance="inverted"
                                size="large"
                                beforeIcon="20-close"
                            >
                                Закрыть
                            </Button>
                        </div>
                        <div className="lg:col-span-4 md:col-span-2 flex items-center md:justify-center">
                            <div className="md:hidden flex-grow basis-0">
                                <IconButton
                                    onClick={onClose}
                                    variant="ghost"
                                    appearance="inverted"
                                    size="large"
                                    icon="20-close"
                                >
                                </IconButton>
                            </div>

                            <a href="/">
                                <ReactSVG className="fill-white" src="/svg/logotype.svg"/>
                            </a>

                            <div className="md:hidden flex-grow basis-0">
                            </div>
                        </div>
                        <div className="col-span-2"></div>
                    </div>
                    <Divider custom={{color: '$color-border-neutral-strong'}}/>
                    <div className="flex flex-col gap-6 max-md:gap-4 lg:mt-[72px] md:mt-12 sm:mt-8">
                        <tet.a
                            text={heroLargeTypo}
                            color="$color-content-primary-inverted"
                            onClick={() => handleLinkClick('services')}
                        >
                            Услуги
                        </tet.a>
                        <tet.a
                            text={heroLargeTypo}
                            color="$color-content-primary-inverted"
                            onClick={() => handleLinkClick('projects')}
                        >
                            Кейсы
                        </tet.a>
                        <tet.a
                            text={heroLargeTypo}
                            color="$color-content-primary-inverted"
                            onClick={() => handleLinkClick('contacts')}
                        >
                            Контакты
                        </tet.a>
                        <tet.a
                            text={heroLargeTypo}
                            color="$color-content-primary-inverted"
                            onClick={() => handleLinkClick('ai')}
                        >
                            ИИ для бизнеса
                        </tet.a>
                    </div>
                </div>

                <div className="lg:py-[72px] max-md:py-8">
                    <FooterContent/>
                </div>

            </div>
        </Modal>
    );
}