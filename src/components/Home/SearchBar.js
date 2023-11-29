function Searchbar() {
    return (
        <div class="flex justify-center items-center mt-5 mb-16">
            <input
                type="text"
                placeholder="Buscar..."
                class="w-1/3 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-indigo-600"
            />
            <button class="px-4 py-2 bg-black text-white rounded-r-md hover:bg-slate-800 focus:outline-none border border-black">
                Buscar
            </button>
        </div>
    );
}

export default Searchbar;