import {tet} from "@virtuslab/tetrisly-react";
import React, {ReactNode} from "react";

interface HeaderLinkProps {
    children: ReactNode;
}

export const CustomLink = ({children}: HeaderLinkProps) => (
    <tet.a className="transition hover:text-gray-500 py-1 px-3 cursor-pointer whitespace-nowrap select-none"
           color="$color-action-neutral-normal"
           text="$typo-body-medium">{children}</tet.a>
)