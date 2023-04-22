import ElipsesBg from "../bg/ElipsesBg";

import AUTHORS from "../../data/authors.json";

// TODO: quitar colors
const COLORS = ["bg-green-500", "bg-yellow-400", "bg-red-500", "bg-blue-400"];

const Credits = () => {
    return (
        <>
            <ElipsesBg colors={COLORS} />
            <div className="grid h-full w-full md:grid-cols-2 lg:grid-cols-3">
                {AUTHORS.map((author, idx) => (
                    <div
                        key={idx}
                        className="duration-400 mx-auto min-h-[300px] overflow-hidden rounded-xl bg-zinc-800  
                        text-gray-400 shadow-lg transition ease-out
                        hover:shadow-gray-600   
                        sm:my-4 sm:w-[300px] md:my-auto md:h-[300px] md:w-[250px] lg:h-[400px] lg:w-[350px]
                        "
                    >
                        <div className="h-[80%] bg-gray-300"></div>
                        {/* TODO: error con el texto */}
                        <div className="my-auto text-center">
                            <h1 className="text-lg font-semibold">
                                {author.name}
                            </h1>
                            <p className="text-md">{author.credits}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Credits;
