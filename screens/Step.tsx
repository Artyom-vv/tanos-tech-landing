import {tet} from "@virtuslab/tetrisly-react";
import React from "react";

const linear = "linear-gradient(180deg, #EAEDF0 0%, rgba(234, 237, 240, 0.991615) 11.79%, rgba(234, 237, 240, 0.967585) 21.38%, rgba(234, 237, 240, 0.9296) 29.12%, rgba(234, 237, 240, 0.879348) 35.34%, rgba(234, 237, 240, 0.818519) 40.37%, rgba(234, 237, 240, 0.7488) 44.56%, rgba(234, 237, 240, 0.671881) 48.24%, rgba(234, 237, 240, 0.589452) 51.76%, rgba(234, 237, 240, 0.5032) 55.44%, rgba(234, 237, 240, 0.414815) 59.63%, rgba(234, 237, 240, 0.325985) 64.66%, rgba(234, 237, 240, 0.2384) 70.88%, rgba(234, 237, 240, 0.153748) 78.62%, rgba(234, 237, 240, 0.0737185) 88.21%, rgba(234, 237, 240, 0) 100%);"

interface Props {
    step: number;
    children: React.ReactNode;
    height: string
    additionalInfo?: string
    selected?: boolean
}

export function Step({step, children, height, additionalInfo, selected}: Props) {
    return (
        <tet.div
            background={selected ? "" : linear}
            backgroundColor={selected ? "$color-background-brand-strong" : ""}
            padding="$space-component-padding-2xLarge"
            borderRadius="$border-radius-large"
            h={height}
            className="flex-shrink-0 basis-0 flex-grow flex flex-col"
        >
            <tet.p
                text="$typo-header-3xLarge"
                color={selected ? "$color-content-primary-inverted" : "$color-content-primary"}
                className="mb-4"
            >
                {step} этап
            </tet.p>
            <tet.p
                text="$typo-body-large"
                color={selected ? "$color-content-primary-inverted" : "$color-content-primary"}
            >
                {children}
            </tet.p>
            <tet.p
                text="$typo-body-medium"
                color="$color-content-tertiary-inverted"
                className="mt-auto"
            >
                *{additionalInfo}
            </tet.p>
        </tet.div>
    )
}