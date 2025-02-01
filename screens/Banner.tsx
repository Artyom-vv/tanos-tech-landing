import cn from "classnames";
import {sectionPaddings} from "@/components/tailwind-classnames";
import {Button, tet} from "@virtuslab/tetrisly-react";

export function Banner() {
    return (
        <section className={cn(sectionPaddings)}>
            <tet.div
                backgroundColor="$color-action-primary-normal"
                className={cn("rounded-[32px] h-[316px] overflow-hidden flex items-center")}
            >
                <div className="container relative">
                    <div className="h-full grid grid-cols-2 gap-4 items-center relative z-10">
                        <div className="col-span-1">
                            <tet.h3
                                text="$typo-header-4xLarge"
                                color="$color-content-primary-inverted"
                                className={cn("mb-4")}
                            >
                                Tanos AI: <br/> преобразуйте свой бизнес <br/> вместе с ИИ
                            </tet.h3>
                            <tet.p
                                text="$typo-body-large"
                                color="$color-content-primary-inverted"
                            >
                                Превращаем возможности искусственного интеллекта в реальные бизнес-результаты по щелчку
                                пальцев
                            </tet.p>
                        </div>
                        <div className="col-span-1 flex justify-end">
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
                        className="h-[1144px] w-[1144px] absolute top-1/2 -right-[432px] -translate-y-1/2 saturate-150 z-0"
                        src="/images/banner-shape.webp"
                        alt="tanos banner"
                    />
                </div>
            </tet.div>
        </section>
    )
}