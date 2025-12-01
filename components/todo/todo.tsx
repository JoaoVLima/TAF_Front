import { ItemType } from "./item";
import { TodoList } from "./todoList";
import axios from "axios";

async function fetchItems(): Promise<ItemType[]> {
    const response = await axios.get("http://localhost:8000/tarefas/");
    return response.data.results;
}

export async function Todo() {
    const items = await fetchItems();

    return (
        <div
            className="flex flex-col max-h-230 h-[80vh] max-w-150  w-[70vw] 
                      bg-neutral-900 border border-neutral-400 rounded-4xl p-7"
        >
            <h1 className="text-3xl font-bold pb-5">Tarefas A Fazer</h1>
            <TodoList itemList={items}></TodoList>
        </div>
    );
}
