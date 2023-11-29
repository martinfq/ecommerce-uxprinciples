import Categories from "./Categories";

function CategoriesList() {
    return (
        <>
            <h2 className="ml-10 my-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">CategoriesList</h2>
            <div class="flex justify-center items-center my-12">
                <Categories />
                <Categories />
                <Categories />
                <Categories />

            </div>
        </>
    );
}

export default CategoriesList;