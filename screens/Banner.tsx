import cn from "classnames";
import {sectionPaddings} from "@/components/tailwind-classnames";
import {Button, tet} from "@virtuslab/tetrisly-react";
import {useBreakpoint} from "@/hooks/useBreakpoint";
import {useButtonSize} from "@/hooks/useButtonSize";

export function Banner() {
    const breakpoint = useBreakpoint()
    const buttonSize = useButtonSize()

    return (
        <section className={cn(sectionPaddings)}>
            <tet.div
                backgroundColor="$color-action-primary-normal"
                className={cn("md:rounded-[32px] max-md:rounded-[16px] overflow-hidden flex items-center")}
            >
                <div className="container xl:py-14 lg:py-[72px] md:py-12 max-md:py-8 relative">
                    <div
                        className="h-full grid lg:grid-cols-2 md:grid-cols-6 max-md:grid-cols-2 gap-x-4 items-center relative z-10">
                        <div className="lg:col-span-1 md:col-span-6 max-md:col-span-2">
                            <tet.h3
                                text={breakpoint === "sm" ? "$typo-header-3xLarge" : "$typo-header-4xLarge"}
                                color="$color-content-primary-inverted"
                                className={cn("mb-4")}
                            >
                                Tanos AI: <br className="max-xl:hidden"/> преобразуйте свой бизнес <br
                                className="max-xl:hidden"/> вместе с ИИ
                            </tet.h3>
                            <tet.p
                                text="$typo-body-large"
                                color="$color-content-primary-inverted"
                            >
                                Превращаем возможности искусственного интеллекта <br className="lg:hidden max-md:hidden"/> в реальные
                                бизнес-результаты по щелчку
                                пальцев
                            </tet.p>
                        </div>
                        <div
                            className="lg:col-span-1 max-lg:row-start-2 max-lg:col-span-6 max-md:col-span-2 max-lg:mt-[72px] max-md:mt-8 flex justify-end">
                            <Button variant="ghost"
                                    custom={{
                                        ghost: {
                                            appearance: {
                                                primary: {
                                                    boxShadow: '',
                                                    bg: {
                                                        _: '$color-action-inverted-normal',
                                                        hover: '$color-action-inverted-hover',
                                                        active: '$color-action-inverted-active',
                                                    },
                                                    ...buttonSize,
                                                    borderRadius: '$border-radius-full',
                                                    transform: 'rotate(-5deg)'
                                                }
                                            },
                                        }
                                    }}
                                    appearance='primary' size="large">Подробнее</Button>
                        </div>
                    </div>
                    <img
                        className="
                            min-h-[1144px] max-xl:min-h-[880px] max-md:min-h-[532px]
                            min-w-[1144px] max-xl:min-w-[880px] max-md:min-w-[532px]
                            absolute lg:top-1/2
                            lg:-right-[432px] lg:-translate-y-1/2
                            md:-right-[308px] max-lg:-bottom-[308px]
                            max-md:-right-[130px] max-md:-bottom-[162px]
                            saturate-150 z-0
                        "
                        src="/images/banner-shape.webp"
                        alt="tanos banner"
                    />
                </div>
            </tet.div>
        </section>
    )
}