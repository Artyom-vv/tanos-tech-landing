import {HTMLAttributes, ReactNode, useState} from "react";
import {tet} from "@virtuslab/tetrisly-react";
import cn from "classnames";

interface TeamMemberCardProps {
    src: string
    title: string
    children: ReactNode
}

export function TeamMemberCard({src, title, children, ...props}: TeamMemberCardProps & HTMLAttributes<HTMLDivElement>) {
    const [flipped, setFlipped] = useState(false);

    return (
        <tet.div
            {...props}
            className={cn("w-[320px] h-[320px]", props.className)}
            background={flipped ? "" : `url("${src}")`}
            borderRadius="$border-radius-large"
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
        >
            <tet.div
                backgroundColor={flipped ? "$color-background-default" : "transparent"}
                borderRadius="$border-radius-large"
                className={cn("border-[1px] border-transparent h-full transition flex", {
                    "!border-[#EAEDF0]": flipped,
                    "flex-col-reverse": !flipped,
                    "flex-col": flipped
                })}
                padding="$space-component-padding-2xLarge"
            >
                <tet.h3
                    text="$typo-header-3xLarge"
                    color={flipped ? "$color-content-primary" : "$color-content-primary-inverted"}
                    className={cn("transition", )}
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