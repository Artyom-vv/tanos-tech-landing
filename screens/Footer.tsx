import cn from "classnames";
import {sectionPaddings} from "@/components/tailwind-classnames";
import {Button, Divider, tet} from "@virtuslab/tetrisly-react";
import React, {useContext} from "react";
import {ModalContext} from "@/pages";

export function Footer() {
    const {openModal} = useContext(ModalContext)

    return (
        <footer className={cn(sectionPaddings)}>
            <tet.div
                borderRadius="32px"
                backgroundColor="$color-background-inverted"
                className={cn(sectionPaddings, "overflow-hidden relative")}>
                <div className="container relative z-10">
                    <div className="flex gap-4 mb-12">
                        <div className="flex flex-col items-start flex-grow">
                            <tet.a
                                href="mailto:hello@tanostech.com"
                                text="$typo-hero-large"
                                color="$color-content-primary-inverted"
                                className="mb-6"
                            >
                                hello@tanostech.com
                            </tet.a>
                            <tet.a
                                href="tel:79274454053"
                                text="$typo-hero-large"
                                color="$color-content-primary-inverted"
                            >
                                +7 (927) 445-40-53
                            </tet.a>
                        </div>
                        <Button variant="ghost"
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
                                                h: '168px',
                                                w: '168px',
                                                borderRadius: '$border-radius-full',
                                                transform: 'rotate(-5deg)'
                                            }
                                        },
                                    }
                                }}
                                appearance='inverted' size="large">Оставить заявку</Button>
                    </div>
                    <Divider custom={{color: '$color-border-neutral-strong'}}/>
                    <div className="flex gap-4 mt-12">
                        <tet.p
                            text="$typo-body-large"
                            color="$color-content-secondary-inverted"
                            className="flex-grow"
                        >
                            © ООО «Танос Тех» - аккредитованная ИТ-компаний №65381 от 11.11.2024
                        </tet.p>
                        <div className="flex gap-6">
                            <Button variant="bare" appearance="inverted" size="large">Telegram</Button>
                            <Button variant="bare" appearance="inverted" size="large">Whatsapp</Button>
                        </div>
                    </div>
                </div>
                <img src="/images/footer-gradient.png"
                     className="absolute w-full h-full top-0 left-0 z-[1]"
                     alt="gradient"/>
                <tet.div
                    className="container absolute w-full h-full top-0 -translate-x-1/2 left-1/2"
                    backgroundColor="$color-background-inverted"
                >
                    <img
                        className="h-[920px] w-[920px] absolute -bottom-[180px] -right-[320px] rotate-[85deg] z-0"
                        src="/images/footer-shape.webp"
                        alt="shape"/>
                </tet.div>
            </tet.div>
        </footer>
    )
}