import Image from "next/image";

export default function Home() {
    return (
        <main className="flex h-screen justify-center items-center bg-black">
            <div className="flex flex-col h-[80vh] w-[70vh] bg-neutral-900 text-white rounded-4xl p-7">
                <h1 className="text-3xl font-bold">Tarefas A Fazer</h1>
                <ul>
                    <li>a</li>
                    <li>b</li>
                    <li>c</li>
                    <li>d</li>
                </ul>
            </div>
        </main>
    );
}
