import {HTMLAttributes, ReactNode, useState} from "react";
import {tet} from "@virtuslab/tetrisly-react";
import cn from "classnames";
import {CustomTag} from "@/components/CustomTag";

interface TeamMemberCardProps {
    src: string
    title: string
    tags: string[]
    children: ReactNode
}

export function TeamMemberCard({src, title, children, tags = [], ...props}: TeamMemberCardProps & HTMLAttributes<HTMLDivElement>) {
    const [flipped, setFlipped] = useState(false);

    return (
        <tet.div
            {...props}
            className={cn("lg:w-[320px] lg:h-[320px] max-lg:w-[308px] max-lg:h-[308px] max-md:w-[328px] max-md:h-[328px]", props.className)}
            background={flipped ? "" : `url("${src}")`}
            backgroundSize="cover"
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
                <tet.div
                    opacity={flipped ? 1 : 0}
                    className="mt-auto flex gap-3 flex-wrap">
                    {tags.map((tag, i) => (
                        <CustomTag key={i} label={tag}/>
                    ))}
                </tet.div>
            </tet.div>
        </tet.div>
    )
}