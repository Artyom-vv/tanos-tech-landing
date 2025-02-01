import React, {HTMLAttributes, useState} from "react";
import {Tag, theme} from "@virtuslab/tetrisly-react";
import {TagProps} from "@virtuslab/tetrisly-react";

export interface CustomTagProps extends TagProps {
    value: string;
}

interface TagSelectorProps {
    tags: CustomTagProps[];
    onChange?: (value: string | null) => void;
}

export const TagSelector = ({tags, onChange, ...props}: TagSelectorProps & HTMLAttributes<HTMLDivElement>) => {
    const [activeTag, setActiveTag] = useState<string | null>(null);

    // Функция обработки клика по тегу
    const handleTagClick = (value: string) => {
        const newActiveTag = value === activeTag ? null : value;
        setActiveTag(newActiveTag);

        if (onChange) {
            onChange(newActiveTag);
        }
    };

    return (
        <div {...props}>
            {tags.map((tag) => (
                <CustomTag
                    key={tag.value} // Уникальный ключ для каждого тега
                    onClick={() => handleTagClick(tag.value)}
                    label={tag.label}
                    state={activeTag === tag.value ? "selected" : undefined}
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