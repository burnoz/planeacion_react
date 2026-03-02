import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const ExpertApp = () => {
    const [categories, setCategories] = useState(['tinkaton']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <div className="app-container">
            <h1>🎬 GifExpertApp</h1>
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />
            <div className="categories-container">
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </div>
        </div>
    )
}