import cn from "classnames";
import {sectionPaddings} from "@/components/tailwind-classnames";
import {Button, Divider, tet} from "@virtuslab/tetrisly-react";
import React from "react";

export function Footer() {
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
                <tet.div
                    background="radial-gradient(100% 162% at 100% 100%, #272E35 0%, rgba(39, 46, 53, 0.991615) 11.79%, rgba(39, 46, 53, 0.967585) 21.38%, rgba(39, 46, 53, 0.9296) 29.12%, rgba(39, 46, 53, 0.879348) 35.34%, rgba(39, 46, 53, 0.818519) 40.37%, rgba(39, 46, 53, 0.7488) 44.56%, rgba(39, 46, 53, 0.671881) 48.24%, rgba(39, 46, 53, 0.589452) 51.76%, rgba(39, 46, 53, 0.5032) 55.44%, rgba(39, 46, 53, 0.414815) 59.63%, rgba(39, 46, 53, 0.325985) 64.66%, rgba(39, 46, 53, 0.2384) 70.88%, rgba(39, 46, 53, 0.153748) 78.62%, rgba(39, 46, 53, 0.0737185) 88.21%, rgba(39, 46, 53, 0) 100%)"
                    className="absolute w-full h-full top-0 left-0 z-[1]"
                ></tet.div>
                <tet.div
                    className="absolute w-full h-full top-0 left-0"
                    backgroundColor="$color-background-inverted"
                >
                    <img
                        className="h-[920px] w-[920px] absolute -bottom-[180px] -right-[320px] mix-blend-overlay z-0"
                        src="/images/footer-shape.png"
                        alt="shape"/>
                </tet.div>
            </tet.div>
        </footer>
    )
}