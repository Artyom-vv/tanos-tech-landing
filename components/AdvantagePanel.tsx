import {Icon, IconName} from "@virtuslab/tetrisly-icons";
import React, {ReactNode} from "react";
import {tet} from "@virtuslab/tetrisly-react";

export const AdvantagePanel = ({children, icon}: { icon: IconName, children: ReactNode }) => (
    <tet.div
        className="basis-[calc(50%-8px)]"
        borderRadius="$border-radius-large"
        p="$space-component-padding-large"
        borderWidth="1px"
        borderColor="$color-border-default"
        display="flex"
        alignItems="start"
        flexDirection="column"
        gap="$space-component-gap-large"
    >
        <tet.div
            className="h-[40px] w-[40px]"
            borderRadius="$border-radius-medium"
            backgroundColor="$color-background-neutral-subtle"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Icon name={icon}/>
        </tet.div>
        <tet.p text="$typo-body-large" color="$color-content-secondary">
            {children}
        </tet.p>
    </tet.div>
)