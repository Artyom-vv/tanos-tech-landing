import {tet} from "@virtuslab/tetrisly-react";
import React, {ReactNode} from "react";

interface HeaderLinkProps {
    children: ReactNode;
    to?: string;
}

export const CustomLink = ({children, to}: HeaderLinkProps) => (
    <tet.a className="transition hover:text-gray-500 py-1 px-3 cursor-pointer whitespace-nowrap select-none"
           color="$color-action-neutral-normal"
           text="$typo-body-medium">{children}</tet.a>
)