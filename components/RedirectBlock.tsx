import {Button, tet} from "@virtuslab/tetrisly-react";
import {Tooltip} from "@/components/Tooltip";
import {useHeaderTypo3xLarge} from "@/hooks/useHeaderTypo3xLarge";
import {usePadding2xLarge} from "@/hooks/usePadding2xLarge";

interface Props { title: string, description: string, children: string, link: string }

export function RedirectBlock({children, title, description, link}: Props) {

    const typoHeader3xLarge = useHeaderTypo3xLarge()
    const padding2xLarge = usePadding2xLarge()

    return (
        <tet.div
            borderRadius="$border-radius-large"
            padding={padding2xLarge}
            backgroundColor="$color-background-default"
            borderWidth="1px"
            borderColor="$color-border-default"
            className="flex-grow basis-0 flex-shrink-0"
        >
            <div className="mb-4">
                <tet.h4
                    text={typoHeader3xLarge}
                    color="$color-content-primary"
                    className="mb-2"
                >
                    {title}
                </tet.h4>
                <tet.p
                    text="$typo-body-large"
                    color="$color-content-secondary"
                >
                    {description}
                </tet.p>
            </div>
            <a href={link}>
                <Tooltip text="В разработке" >
                    <Button
                        state="disabled"
                        appearance="primary"
                        variant="bare"
                        size="large"
                        afterIcon="20-arrow-up-right"
                    >
                        {children}
                    </Button>
                </Tooltip>
            </a>
        </tet.div>
    )
}