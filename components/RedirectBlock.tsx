import {Button, tet} from "@virtuslab/tetrisly-react";

interface Props { title: string, description: string, children: string, link: string }

export function RedirectBlock({children, title, description, link}: Props) {
    return (
        <tet.div
            borderRadius="$border-radius-large"
            padding="$space-component-padding-2xLarge"
            backgroundColor="$color-background-default"
            className="flex-grow basis-0 flex-shrink-0"
        >
            <div className="mb-4">
                <tet.h4
                    text="$typo-header-3xLarge"
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
                <Button
                    appearance="primary"
                    variant="bare"
                    size="large"
                    afterIcon="20-arrow-up-right"
                >
                    {children}
                </Button>
            </a>
        </tet.div>
    )
}