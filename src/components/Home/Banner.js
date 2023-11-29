function Banner() {
    return (
        <div className="mx-auto text-center bg-white my-4">
            <div className="mx-auto max-w-2xl py-8 lg:py-35">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Bienvenidos a nuestra tienda Online
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Promociones
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 bg-indigo-600 hover:bg-indigo-500 text-white border rounded-md px-3 py-2">
                            Compra Segura
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Banner;