import { Item, ItemType } from "./item";

export function Todo({ itemList }: { itemList: ItemType[] }) {
    return (
        <ul className="flex flex-col gap-1">
            {itemList.map((item, index) => (
                <Item
                    key={index + item.name}
                    checked={item.checked}
                    name={item.name}
                ></Item>
            ))}
        </ul>
    );
}
