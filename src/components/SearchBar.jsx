import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchBar({ setCity }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setCity(input);
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">

            <Input
                placeholder="Search city..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
            />

            <Button type="submit">
                Search
            </Button>

        </form>
    );
}