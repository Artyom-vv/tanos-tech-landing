import React, {HTMLAttributes, ReactNode, useState} from "react";
import {Divider, tet} from "@virtuslab/tetrisly-react";
import cn from "classnames";
import {CustomTag} from "@/components/CustomTag";

interface Props {
    src: string
    title: string
    tags: string[]
    children: ReactNode
    firstTitle: string
    firstDescription: string
    secondTitle: string
    secondDescription: string
}

export function ProfileCaseCard({src, title, children, tags, firstTitle, firstDescription, secondDescription, secondTitle, ...props}: Props & HTMLAttributes<HTMLDivElement>) {
    const [flipped, setFlipped] = useState(false);

    return (
        <tet.div
            {...props}
            className={cn("w-[656px] h-[688px]", props.className)}
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
                padding="$space-component-padding-2xLarge"
            >
                <tet.h3
                    text="$typo-header-3xLarge"
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
                        <div className="flex gap-3">
                            {tags.map((tag, i) => (
                                <CustomTag key={i}>{tag}</CustomTag>
                            ))}
                        </div>
                    </div>

                    <div>

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

                        <tet.p
                            text="$typo-header-4xLarge"
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