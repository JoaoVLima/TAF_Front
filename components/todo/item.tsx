"use client";

import { useState } from "react";

export type ItemType = {
    checked: boolean;
    name: string;
};

export function Item({ checked, name }: ItemType) {
    const [Checked, setChecked] = useState(checked);

    const handleChange = (event: {
        target: { checked: boolean | ((prevState: boolean) => boolean) };
    }) => {
        setChecked(event.target.checked);
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={Checked}
                onChange={handleChange}
                className="mr-2"
            ></input>
            {name}
        </li>
    );
}
