import {tet} from "@virtuslab/tetrisly-react";
import {HTMLAttributes, ReactNode} from "react";
import cn from 'classnames'

interface ServiceCardProps {
    src: string
    title: string
    children: ReactNode
}

export function ServiceCard({src, title, children, ...props}: ServiceCardProps & HTMLAttributes<HTMLDivElement>) {
    return (
        <tet.div
            {...props}
            className={cn("w-[320px] h-[320px]", props.className)}
            background={`url("${src}")`}
            borderRadius="$border-radius-large"
            padding="$space-component-padding-2xLarge"
        >
            <tet.h3
                text="$typo-header-3xLarge"
                color="$color-content-primary-inverted"
            >
                {title}
            </tet.h3>
            <tet.p
                text="$typo-body-large"
                color="$color-content-secondary"
            >
                {children}
            </tet.p>
        </tet.div>
    // borderColor="$color-border-default"
    // borderWidth="1px"
    )
}