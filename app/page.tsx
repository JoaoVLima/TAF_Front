import { Todo } from "@/components/todo/todo";

export default function Home() {
    return (
        <main className="flex min-h-screen bg-black">
            <div className="flex flex-col max-h-230 h-[80vh] max-w-150  w-[70vw] bg-neutral-900 border border-neutral-400 text-white rounded-4xl p-7">
                <h1 className="text-3xl font-bold pb-5">Tarefas A Fazer</h1>
                <Todo
                    itemList={[
                        { checked: true, name: "Primeira Tarefa" },
                        { checked: false, name: "Segunda Tarefa" },
                        { checked: false, name: "Terceira Tarefa" },
                        { checked: false, name: "Quarta Tarefa" },
                    ]}
                ></Todo>
            </div>
        </main>
    );
}
