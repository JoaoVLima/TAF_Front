"use client";

import { useState, ChangeEvent, KeyboardEvent } from "react";
import { Item, ItemType } from "./item";

export function TodoList({ itemList = [] }: { itemList?: ItemType[] }) {
    const [items, setItems] = useState<ItemType[]>(itemList);
    const [input, setInput] = useState("");

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const addItem = (item: string) => {
        item = item.trim();
        if (!item) return;
        setItems((prevItems) => [...prevItems, { checked: false, name: item }]);
    };

    const handleKeyDownInput = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addItem(input);
            setInput("");
        }
    };

    return (
        <ul className="flex flex-col gap-1">
            {items.map((item, index) => (
                <Item
                    key={index + item.name}
                    checked={item.checked}
                    name={item.name}
                />
            ))}

            <li className="flex mt-1 w-full">
                <input
                    type="text"
                    id="newItem"
                    value={input}
                    onChange={handleChangeInput}
                    onKeyDown={handleKeyDownInput}
                    className="w-full px-3 py-2.5 animate-pulse focus:animate-none"
                    placeholder="Digite aqui para adicionar..."
                />
            </li>
        </ul>
    );
}
