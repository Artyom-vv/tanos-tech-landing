import React, {ReactNode} from "react";
import {tet} from "@virtuslab/tetrisly-react";

export const CustomTag = ({children}: { children: ReactNode }) => (
    <tet.div
        className="h-[32px]"
        display="flex"
        alignItems="center"
        borderRadius="$border-radius-medium"
        backgroundColor="$color-background-neutral-subtle"
        px="$space-component-padding-medium"
    >
        {children}
    </tet.div>
)