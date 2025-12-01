"use client";

import { useState, ChangeEvent } from "react";

export type ItemType = {
    checked: boolean;
    text: string;
};

export function Item({ checked, text }: ItemType) {
    const [checkbox, setCheckbox] = useState(checked);

    const handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
        setCheckbox(event.target.checked);
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={checkbox}
                onChange={handleChangeCheckbox}
                className="mr-2"
            ></input>
            {text}
        </li>
    );
}
