import {tet} from "@virtuslab/tetrisly-react";
import React, {ReactNode} from "react";

interface HeaderLinkProps {
    children: ReactNode;
    onClick?: () => void;
}

export const CustomLink = ({children, onClick}: HeaderLinkProps) => (
    <tet.a
        onClick={onClick}
        className="transition hover:text-gray-500 py-1 px-3 cursor-pointer whitespace-nowrap select-none"
        color="$color-action-neutral-normal"
        text="$typo-body-medium">{children}</tet.a>
)