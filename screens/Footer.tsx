import cn from "classnames";
import {sectionPaddings} from "@/components/tailwind-classnames";
import { tet } from "@virtuslab/tetrisly-react";

export function Footer() {
    return (
        <footer className={cn(sectionPaddings)}>
            <tet.div
                borderRadius="32px"
                backgroundColor="$color-background-inverted"
                className={cn(sectionPaddings, "overflow-hidden relative")}>
                <div className="flex gap-4">
                    <tet.a
                        text="$typo-hero-large"
                        color="$color-content-primary-inverted"
                        className="mb-[24px]"
                    >
                        hello@tanostech.com
                    </tet.a>
                </div>
                <img
                    className="absolute h-[920px] w-[920px] -bottom-[180px] -right-[320px]"
                    src="/images/shape.png"
                    alt="shape"/>
            </tet.div>
        </footer>
    )
}