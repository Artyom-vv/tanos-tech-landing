import {Icon, IconName} from "@virtuslab/tetrisly-icons";
import {ReactNode} from "react";
import {tet} from "@virtuslab/tetrisly-react";

export const HeroPanel = ({icon, children}: { icon: IconName, children: ReactNode }) => (
    <tet.div backgroundColor="$color-background-default"
             display="flex"
             alignItems="center"
             gap="4"
             borderColor="$color-border-default"
             borderWidth="1"
             borderRadius="$border-radius-large"
             px="$space-component-padding-large"
             className="py-[10px]"
    >
        <Icon name={icon}/>
        <tet.p text="$typo-body-large" color="$color-content-primary">{children}
        </tet.p>
    </tet.div>
)