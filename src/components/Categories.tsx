import {getAllCategories} from "../questions/allquestions";

export function Categories() {
    const allCategories = getAllCategories();
    return (
        <>
            { allCategories.map((category) => {
                return (
                    <div key={category.name} className="retro-font h-20 w-60 m-5 text-yellow-300 border-dashed border-white border-4">{category.name}</div>
                )
            })}
        </>
    );
}
