import ElipsesBg from "../bg/ElipsesBg";

import AUTHORS from "../../data/authors.json";

// TODO: quitar colors
const COLORS = ["bg-green-500", "bg-yellow-400", "bg-red-500", "bg-blue-400"];

const Credits = () => {
    return (
        <>
            <ElipsesBg colors={COLORS} />
            <div className="grid  h-full w-full md:grid-cols-2 lg:grid-cols-3">
                {AUTHORS.map((author, idx) => (
                    <div
                        key={idx}
                        className="z-10 m-12 mx-auto flex  
                        h-full min-h-[300px] flex-col overflow-hidden  rounded-xl 
                        bg-zinc-800 text-center text-gray-400
                        shadow-lg
                        transition duration-300 ease-out hover:shadow-gray-600 sm:my-4 sm:w-[300px] md:my-auto md:h-[300px] lg:h-[400px]
                        "
                    >
                        <div className="h-[80%] bg-gray-300">sdf</div>
                        <div className="h-[20%] p-2">
                            <h1 className="text-lg font-semibold">
                                {author.name}
                            </h1>
                            <p className="text-md mt-1">{author.credits}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Credits;
