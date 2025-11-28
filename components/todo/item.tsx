"use client";

import { useState, ChangeEvent } from "react";

export type ItemType = {
    checked: boolean;
    name: string;
};

export function Item({ checked, name }: ItemType) {
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
            {name}
        </li>
    );
}
