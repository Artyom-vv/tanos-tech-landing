import React, {HTMLAttributes, useState} from "react";
import {Tag, theme} from "@virtuslab/tetrisly-react";
import {TagProps} from "@virtuslab/tetrisly-react";

export interface CustomTagProps extends TagProps {
    value: string;
}

interface TagSelectorProps {
    tags: CustomTagProps[];
    value: string | null;
    onTagChange?: (value: string | null) => void;
}

export const TagSelector = ({tags, onTagChange, value, ...props}: TagSelectorProps & HTMLAttributes<HTMLDivElement>) => {
    const handleTagClick = (tagValue: string) => {
        const newActiveTag = tagValue === value ? null : tagValue;
        if (onTagChange) {
            onTagChange(newActiveTag); // Обновляем активный тег
        }
    };

    return (
        <div {...props}>
            {tags.map((tag) => (
                <CustomTag
                    key={tag.value} // Уникальный ключ для каждого тега
                    onClick={() => handleTagClick(tag.value)}
                    label={tag.label}
                    state={value === tag.value ? "selected" : undefined} // Используем значение из пропса value
                />
            ))}
        </div>
    );
};

export const CustomTag = ({...props}: TagProps) => (
    <Tag {...props} custom={{
        h: "auto",
        userSelect: "none",
        hasOnClick: {
            backgroundColor: {
                selected: "$color-interaction-neutral-subtle-active"
            }
        },
        innerElements: {
            label: {
                ...theme.texts["$typo-body-large"],
            }
        }
    }}/>
)