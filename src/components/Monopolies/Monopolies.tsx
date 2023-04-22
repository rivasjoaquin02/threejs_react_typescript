import { Link } from "react-router-dom";

// types
import { CompaniesType } from "../types";

// bg
import ElipsesBg from "../bg/ElipsesBg";
const COLORS = ["bg-green-500", "bg-yellow-400", "bg-red-500", "bg-blue-400"];

const Monopolies = ({ companies }: { companies: Array<CompaniesType> }) => {
    return (
        <>
            <ElipsesBg colors={COLORS} />
            <div className="grid  h-full w-full md:grid-cols-2 lg:grid-cols-3">
                {companies.map((company, idx) => (
                    <Link
                        to={`/monopolies/${company.aka}`}
                        className="z-10 m-12 mx-auto min-h-[300px]  
                        overflow-hidden rounded-xl bg-zinc-800 text-gray-400  shadow-lg 
                        transition duration-300 ease-out
                        hover:shadow-gray-600
                        sm:my-4 sm:w-[300px] md:my-auto md:h-[300px] lg:h-[400px]
                        "
                    >
                        <div
                            key={idx}
                            className="flex h-full flex-col text-center"
                        >
                            <div className="h-[80%] bg-gray-300">sdf</div>
                            <div className="h-[20%] p-2 sm:p-1 ">
                                <h1 className="text-lg font-semibold">
                                    {company.name}
                                </h1>
                                <p className="text-md mt-1">
                                    {company.website}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Monopolies;
