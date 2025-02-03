import {Header} from "@/components/Header";
import {Button, tet} from "@virtuslab/tetrisly-react";
import {ReactSVG} from "react-svg";
import cn from "classnames";
import {sectionPaddings} from "@/components/tailwind-classnames";
import {HeroPanel} from "@/components/HeroPanel";
import {useContext} from "react";
import {ModalContext} from "@/pages";
import {useBreakpoint} from "@/hooks/useBreakpoint";
import useHydration from "@/hooks/useHedration";
import {useButtonSize} from "@/hooks/useButtonSize";

const linearGradientLeft = "radial-gradient(100% 162% at 0% 100%, #F5F7F9 0%, rgba(245, 247, 249, 0.991615) 11.79%, rgba(245, 247, 249, 0.967585) 21.38%, rgba(245, 247, 249, 0.9296) 29.12%, rgba(245, 247, 249, 0.879348) 35.34%, rgba(245, 247, 249, 0.818519) 40.37%, rgba(245, 247, 249, 0.7488) 44.56%, rgba(245, 247, 249, 0.671881) 48.24%, rgba(245, 247, 249, 0.589452) 51.76%, rgba(245, 247, 249, 0.5032) 55.44%, rgba(245, 247, 249, 0.414815) 59.63%, rgba(245, 247, 249, 0.325985) 64.66%, rgba(245, 247, 249, 0.2384) 70.88%, rgba(245, 247, 249, 0.153748) 78.62%, rgba(245, 247, 249, 0.0737185) 88.21%, rgba(245, 247, 249, 0) 100%)"
const linearGradientRight = "radial-gradient(100% 162% at 100% 100%, #F5F7F9 0%, rgba(245, 247, 249, 0.991615) 11.79%, rgba(245, 247, 249, 0.967585) 21.38%, rgba(245, 247, 249, 0.9296) 29.12%, rgba(245, 247, 249, 0.879348) 35.34%, rgba(245, 247, 249, 0.818519) 40.37%, rgba(245, 247, 249, 0.7488) 44.56%, rgba(245, 247, 249, 0.671881) 48.24%, rgba(245, 247, 249, 0.589452) 51.76%, rgba(245, 247, 249, 0.5032) 55.44%, rgba(245, 247, 249, 0.414815) 59.63%, rgba(245, 247, 249, 0.325985) 64.66%, rgba(245, 247, 249, 0.2384) 70.88%, rgba(245, 247, 249, 0.153748) 78.62%, rgba(245, 247, 249, 0.0737185) 88.21%, rgba(245, 247, 249, 0) 100%)";

export function Hero() {
    const {openModal} = useContext(ModalContext)
    const breakpoint = useBreakpoint()
    const hydrated = useHydration()
    const buttonSize = useButtonSize()

    const getLinearBackground = () => {
        switch (breakpoint) {
            case "xl":
            case "md":
                return linearGradientLeft;
            case "lg":
                return linearGradientRight;
            default:
                return linearGradientRight;
        }
    }

    return (
        <tet.section
            background={getLinearBackground()}
            className="flex flex-col overflow-hidden relative">
            <Header/>
            <div
                className={cn('container xl:h-[800px] lg:h-[708px] flex-grow relative grid xl:grid-cols-2 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-2 max-xl:auto-rows-min gap-x-4 z-10', sectionPaddings)}>
                <div className="xl:col-span-1 max-xl:hidden">
                    <tet.h1 text="$typo-hero-large"
                            color="$color-content-primary">Tanos tech - полный цикл разработки
                        it-решений
                    </tet.h1>
                    <div className="flex gap-4">
                        <tet.h1 text="$typo-hero-large" color="$color-content-primary"> от идеи</tet.h1>
                        <div className="arrow flex items-center flex-grow">
                            <tet.span backgroundColor="$color-action-primary-normal"
                                      className="block line h-[5px] flex-grow -mr-[1px]">
                            </tet.span>
                            <ReactSVG className="w-[36px] h-[34px] -mb-[1px]" src="/svg/arrow-right.svg"></ReactSVG>
                        </div>
                    </div>
                </div>
                <div className="xl:hidden lg:col-span-8 md:col-span-6 sm:col-span-2">
                    {hydrated && (
                        <tet.h1 text={breakpoint === "sm" ? "$typo-header-4xLarge" : "$typo-hero-large"}
                                color="$color-content-primary" className="max-xl:mb-8 max-md:mb-6">
                            Tanos tech - полный цикл разработки <br className="md:hidden"/> it-решений от идеи <ReactSVG className="inline-block max-md:size-[24px] -mb-1" src="/svg/arrow-right.svg"></ReactSVG> до реализации
                        </tet.h1>
                    )}
                </div>
                <div
                    className="xl:col-span-1 xl:col-start-2 xl:row-start-1 max-xl:row-start-2 lg:col-span-8 md:col-span-6 sm:col-span-2 flex flex-col">
                    <tet.h1 text="$typo-hero-large" color="$color-content-primary" className="mb-8 max-xl:hidden">
                        <br/>
                        <br/>
                        до реализации
                    </tet.h1>
                    <tet.p text="$typo-body-large" color="$color-content-secondary" className="mb-8 max-md:mb-6 max-md:text">
                        <span className="max-md:hidden">Наша цель -
                        создавать прибыльные продукты <br/> на основе современных технологий, <br/>мы специализируемся
                        на следующих
                        аспектах:</span>
                        <span className="md:hidden">Мы специализируемся на следующих аспектах it-решений:</span>
                    </tet.p>
                    <div className="flex max-md:flex-col gap-4 max-md:gap-2 max-md:items-start xl:mb-[100px] lg:mb-[72px]">
                        <HeroPanel icon="20-check-badge">Грантовое финансирование</HeroPanel>
                        <HeroPanel icon="20-bolt">Искусственный интеллект</HeroPanel>
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
                                            ...buttonSize,
                                            borderRadius: '$border-radius-full',
                                            transform: 'rotate(-5deg)'
                                        }
                                    },
                                }
                            }}
                            className="max-lg:ml-auto max-lg:mt-[72px] max-md:mt-[60px]"
                            appearance='inverted' size="large">Заказать проект</Button>
                </div>
            </div>
            <img width="3680"
                 height="3680"
                 src="/images/hero-shape.webp"
                 alt="tanos tech"
                 className="absolute lg:size-[864px] md:size-[616px] sm:size-[344px] xl:-bottom-[376px] xl:-left-[320px] lg:-right-[360px] lg:left-auto lg:-bottom-[360px] md:-left-[260px] md:-bottom-[260px]
                 sm:-left-[156px] sm:-bottom-[156px]
                  max-lg:rotate-[80deg] z-[1]"/>
        </tet.section>
    )
}