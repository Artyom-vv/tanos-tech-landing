import {tet} from "@virtuslab/tetrisly-react";
import {HTMLAttributes, ReactNode, useState} from "react";
import cn from 'classnames'

interface ServiceCardProps {
    src: string
    title: string
    children: ReactNode
}

export function ServiceCard({src, title, children, ...props}: ServiceCardProps & HTMLAttributes<HTMLDivElement>) {
    const [flipped, setFlipped] = useState(false);

    return (
        <tet.div
            {...props}
            className={cn("lg:size-[320px] max-lg:size-[308px] max-md:size-[328px]", props.className)}
            background={flipped ? "" : `url("${src}")`}
            backgroundSize="cover"
            borderRadius="$border-radius-large"
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
        >
            <tet.div
                backgroundColor={flipped ? "$color-background-default" : "transparent"}
                borderRadius="$border-radius-large"
                className={cn("border-[1px] border-transparent h-full transition", {
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
                <tet.p
                    text="$typo-body-large"
                    color="$color-content-secondary"
                    className="mt-2 transition"
                    opacity={flipped ? 1 : 0}
                >
                    {children}
                </tet.p>
            </tet.div>
        </tet.div>
    )
}