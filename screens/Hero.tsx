import {Header} from "@/components/Header";
import {Button, tet} from "@virtuslab/tetrisly-react";
import {ReactSVG} from "react-svg";
import cn from "classnames";
import {sectionPaddings} from "@/components/tailwind-classnames";
import {HeroPanel} from "@/components/HeroPanel";

const linearGradient = "radial-gradient(100% 162% at 0% 100%, #F5F7F9 0%, rgba(245, 247, 249, 0.991615) 11.79%, rgba(245, 247, 249, 0.967585) 21.38%, rgba(245, 247, 249, 0.9296) 29.12%, rgba(245, 247, 249, 0.879348) 35.34%, rgba(245, 247, 249, 0.818519) 40.37%, rgba(245, 247, 249, 0.7488) 44.56%, rgba(245, 247, 249, 0.671881) 48.24%, rgba(245, 247, 249, 0.589452) 51.76%, rgba(245, 247, 249, 0.5032) 55.44%, rgba(245, 247, 249, 0.414815) 59.63%, rgba(245, 247, 249, 0.325985) 64.66%, rgba(245, 247, 249, 0.2384) 70.88%, rgba(245, 247, 249, 0.153748) 78.62%, rgba(245, 247, 249, 0.0737185) 88.21%, rgba(245, 247, 249, 0) 100%)"

export function Hero() {

    return (
        <tet.section
            background={linearGradient}
            className="flex flex-col overflow-hidden relative">
            <Header/>
            <div className={cn('container h-[800px] flex-grow  grid grid-cols-2 gap-4', sectionPaddings)}>
                <div className="col-span-1">
                    <tet.h1 text="$typo-hero-large" color="$color-content-primary">Tanos tech - полный цикл разработки
                        it-решений
                    </tet.h1>
                    <div className="flex gap-4">
                        <tet.h1 text="$typo-hero-large" color="$color-content-primary"> от идеи</tet.h1>
                        <div className="arrow flex items-center flex-grow">
                            <tet.span backgroundColor="$color-action-primary-normal"
                                     className="block line h-[5px] flex-grow -mr-[1px]">
                            </tet.span>
                            <ReactSVG className="-mb-[1px]" src="/svg/arrow-right.svg"></ReactSVG>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <tet.h1 text="$typo-hero-large" color="$color-content-primary" className="mb-8">
                        <br/>
                        <br/>
                        до реализации
                    </tet.h1>
                    <tet.p text="$typo-body-large" color="$color-content-secondary" className="mb-8">Наша цель -
                        создавать прибыльные продукты <br/> на основе современных технологий, <br/> мы специализируемся
                        на следующих
                        аспектах:
                    </tet.p>
                    <div className="flex gap-4 mb-[100px]">
                        <HeroPanel icon="20-check-badge">Грантовое финансирование</HeroPanel>
                        <HeroPanel icon="20-bolt">Искусственный интеллект</HeroPanel>
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
                            appearance='inverted' size="large">Заказать проект</Button>
                </div>
            </div>
            <img width="1002"
                 height="1002"
                 src="/images/hero-shape.webp"
                 alt="tanos tech"
                 className="absolute h-[864px] w-[864px] -bottom-[376px] -left-[320px]"/>
        </tet.section>
    )
}