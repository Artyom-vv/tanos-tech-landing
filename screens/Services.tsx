import cn from 'classnames'
import {sectionPaddings} from "@/components/tailwind-classnames";
import {tet} from '@virtuslab/tetrisly-react';
import React from "react";

export function Services() {
    return (
        <tet.section
            backgroundColor="$color-background-neutral-subtle"
        >
            <div className={cn('container grid grid-cols-2 gap-4', sectionPaddings)}>
                <div className="col-span-1">
                    <tet.h2
                        text="$typo-header-3xLarge"
                        color="$color-content-primary"
                        className="mb-2"
                    >
                        Услуги
                    </tet.h2>
                    <tet.p
                        text="$typo-body-large"
                        color="$color-content-secondary"
                    >
                        Каждый проект - это новая возможность
                    </tet.p>
                </div>
                <div className="col-span-1"></div>
            </div>

        </tet.section>
    )
}