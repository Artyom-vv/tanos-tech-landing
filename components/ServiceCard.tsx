import {tet} from "@virtuslab/tetrisly-react";
import {HTMLAttributes, ReactNode, useState} from "react";
import cn from 'classnames'

interface ServiceCardProps {
    src: string
    title: string
    children: ReactNode
}

const overlayLinearGradient = "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.00251556) 11.79%, rgba(0, 0, 0, 0.00972445) 21.38%, rgba(0, 0, 0, 0.02112) 29.12%, rgba(0, 0, 0, 0.0361956) 35.34%, rgba(0, 0, 0, 0.0544444) 40.37%, rgba(0, 0, 0, 0.07536) 44.56%, rgba(0, 0, 0, 0.0984356) 48.24%, rgba(0, 0, 0, 0.123164) 51.76%, rgba(0, 0, 0, 0.14904) 55.44%, rgba(0, 0, 0, 0.175556) 59.63%, rgba(0, 0, 0, 0.202204) 64.66%, rgba(0, 0, 0, 0.22848) 70.88%, rgba(0, 0, 0, 0.253876) 78.62%, rgba(0, 0, 0, 0.277884) 88.21%, rgba(0, 0, 0, 0.3) 100%);"

export function ServiceCard({src, title, children, ...props}: ServiceCardProps & HTMLAttributes<HTMLDivElement>) {
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