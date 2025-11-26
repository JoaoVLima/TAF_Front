import { Todo } from "@/components/todo/todo";

export default function Home() {
    return (
        <main className="flex min-h-screen bg-black">
            <div className="flex w-screen justify-center items-center">
                <Todo></Todo>
            </div>
        </main>
    );
}
