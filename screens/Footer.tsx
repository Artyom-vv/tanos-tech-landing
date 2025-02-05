import cn from "classnames";
import {sectionPaddings} from "@/components/tailwind-classnames";
import {Button, Divider, tet} from "@virtuslab/tetrisly-react";
import React, {useContext} from "react";
import {ModalContext} from "@/pages";
import useHeroLargeTypo from "@/hooks/useHeroLargeTypo";

export function FooterContacts() {
    const {openModal} = useContext(ModalContext)
    const heroLargeTypo = useHeroLargeTypo();

    return (
        <div className="flex max-md:flex-col gap-x-4 max-md:gap-y-8">
            <div className="flex flex-col items-start justify-center flex-grow">
                <tet.a
                    href="mailto:hello@tanostech.com"
                    text={heroLargeTypo}
                    color="$color-content-primary-inverted"
                    className="lg:mb-6 max-lg:mb-4"
                >
                    hello@tanostech.com
                </tet.a>
                <tet.a
                    href="tel:79274454053"
                    text={heroLargeTypo}
                    color="$color-content-primary-inverted"
                >
                    +7 (927) 445-40-53
                </tet.a>
            </div>
            <Button
                className="max-md:ml-auto"
                variant="ghost"
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
    )
}

export function FooterInfo() {
    return (
        <div className="flex max-lg:flex-col gap-4">
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
    )
}

export function FooterContent() {
    return (
        <>
            <FooterContacts/>
            <div className="py-12">
                <Divider custom={{color: '$color-border-neutral-strong'}}/>
            </div>
            <FooterInfo/>
        </>
    )
}

export function Footer() {

    return (
        <footer className={cn(sectionPaddings, "max-xl:!pb-0")}>
            <tet.div
                backgroundColor="$color-background-inverted"
                className="overflow-hidden xl:container !px-0 relative max-xl:!rounded-b-none xl:py-16 md:rounded-[32px] max-md:rounded-[16px]">
                <div className="container relative z-10 max-xl:py-12 max-md:py-8">
                    <FooterContent/>
                </div>
                <img src="/images/footer-gradient.png"
                     className="absolute w-full h-full top-0 left-0 z-[1]"
                     alt="gradient"/>
                <tet.div
                    className="container absolute w-full h-full top-0 -translate-x-1/2 left-1/2"
                    backgroundColor="$color-background-inverted"
                >
                    <img
                        className="
                            absolute
                            xl:min-h-[920px]
                            xl:max-h-[920px]
                            xl:min-w-[920px]
                            xl:max-w-[920px]
                            max-xl:min-w-[664px]
                            max-xl:max-w-[664px]
                            max-xl:min-h-[664px]
                            max-xl:max-h-[664px]
                            max-md:min-w-[500px]
                            max-md:max-w-[500px]
                            max-md:min-h-[500px]
                            max-md:max-h-[500px]
                            xl:-bottom-[180px]
                            xl:-right-[320px]
                            max-xl:-top-[200px]
                            max-xl:-right-[200px]
                            max-md:-top-[20px]
                            max-md:-right-[156px]
                            rotate-[85deg]
                            z-0
                        "
                        src="/images/footer-shape.webp"
                        alt="shape"/>
                </tet.div>
            </tet.div>
        </footer>
    )
}