import React, {HTMLAttributes, ReactNode, useState} from "react";
import {Divider, tet} from "@virtuslab/tetrisly-react";
import cn from "classnames";
import {CustomTag} from "@/components/CustomTag";
import {useBreakpoint} from "@/hooks/useBreakpoint";
import {useHeaderTypo3xLarge} from "@/hooks/useHeaderTypo3xLarge";
import {usePadding2xLarge} from "@/hooks/usePadding2xLarge";

interface Props {
    src: string
    title: string
    tags: string[]
    children: ReactNode | ReactNode[]
    firstTitle?: string
    firstDescription?: string
    secondTitle: string
    secondDescription: string
}

export function ProfileCaseCard({src, title, children, tags, firstTitle, firstDescription, secondDescription, secondTitle, ...props}: Props & HTMLAttributes<HTMLDivElement>) {
    const [flipped, setFlipped] = useState(false);
    const breakpoint = useBreakpoint()
    const text3xLarge = useHeaderTypo3xLarge()
    const padding2xLarge = usePadding2xLarge()

    return (
        <tet.div
            {...props}
            className={cn("lg:size-[656px] md:w-[632px] md:h-[663px] sm:w-[328px] sm:h-[404px] flex-shrink-0", props.className)}
            background={flipped ? "" : `url("${src}")`}
            borderRadius="$border-radius-large"
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
        >
            <tet.div
                backgroundColor={flipped ? "$color-background-default" : "transparent"}
                borderRadius="$border-radius-large"
                className={cn("border-[1px] border-transparent h-full transition duration-300 flex flex-col", {
                    "!border-[#EAEDF0]": flipped
                })}
                padding={padding2xLarge}
            >
                <tet.h3
                    text={text3xLarge}
                    color={flipped ? "$color-content-primary" : "$color-content-primary-inverted"}
                    className="transition"
                >
                    {title}
                </tet.h3>
                <tet.div
                    opacity={flipped ? 1 : 0}
                    className="mt-2 transition flex-grow flex flex-col justify-between"
                >
                    <div>

                        <tet.p
                            text="$typo-body-large"
                            color="$color-content-secondary"
                            className="mb-6"
                        >
                            {children}
                        </tet.p>
                        <div className="flex gap-3 flex-wrap">
                            {tags.map((tag, i) => (
                                <CustomTag label={tag} key={i}/>
                            ))}
                        </div>
                    </div>

                    <div>

                        {firstDescription && firstTitle && (
                            <div className="max-md:hidden">
                                <tet.p
                                    text="$typo-header-4xLarge"
                                    color='$color-content-primary'
                                >
                                    {firstTitle}
                                </tet.p>
                                <tet.p
                                    text="$typo-body-large"
                                    color="$color-content-secondary"
                                    className="mt-2"
                                >
                                    {firstDescription}
                                </tet.p>

                                <div className="my-6">
                                    <Divider custom={{color: '$color-border-default'}}/>
                                </div>
                            </div>
                        )}

                        <tet.p
                            text={breakpoint === "sm" ? "$typo-header-xLarge" : "$typo-header-4xLarge"}
                            color='$color-content-primary'
                        >
                            {secondTitle}
                        </tet.p>
                        <tet.p
                            text="$typo-body-large"
                            color="$color-content-secondary"
                            className="mt-2"
                        >
                            {secondDescription}
                        </tet.p>
                    </div>

                </tet.div>

            </tet.div>
        </tet.div>
    )
}