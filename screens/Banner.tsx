import cn from "classnames";
import {sectionPaddings} from "@/components/tailwind-classnames";
import {Button, tet} from "@virtuslab/tetrisly-react";

export function Banner() {
    return (
        <section className={cn(sectionPaddings)}>
            <tet.div
                backgroundColor="$color-action-primary-normal"
                className={cn("rounded-[32px] overflow-hidden flex items-center")}
            >
                <div className="container xl:py-14 lg:py-[72px] md:py-12 relative">
                    <div className="h-full grid lg:grid-cols-2 md:grid-cols-6 gap-x-4 items-center relative z-10">
                        <div className="lg:col-span-1 md:col-span-6">
                            <tet.h3
                                text="$typo-header-4xLarge"
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
                                Превращаем возможности искусственного интеллекта <br className="lg:hidden"/> в реальные бизнес-результаты по щелчку
                                пальцев
                            </tet.p>
                        </div>
                        <div className="lg:col-span-1 max-lg:row-start-2 max-lg:col-span-6 max-lg:mt-[72px] flex justify-end">
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
                                                    h: '168px',
                                                    w: '168px',
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
                        className="xl:h-[1144px] xl:min-w-[1144px] max-xl:h-[880px] max-xl:min-w-[880px] absolute lg:top-1/2 lg:-right-[432px] lg:-translate-y-1/2 md:-right-[308px] max-lg:-bottom-[308px] saturate-150 z-0"
                        src="/images/banner-shape.webp"
                        alt="tanos banner"
                    />
                </div>
            </tet.div>
        </section>
    )
}