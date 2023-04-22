const Info = ({
    name,
    description,
    website,
}: {
    name: string;
    description: string;
    website: string;
}) => {
    return (
        <div className="z-10 min-h-[280px] flex-none px-10 pt-11 text-gray-400 md:w-[400px] ">
            <h1 className="border-b pb-3 text-5xl font-semibold">{name}</h1>
            <p className="sm:my-6 md:my-10">{description}</p>
            <a
                href={website}
                className="rounded-lg bg-primary p-3 text-gray-400 shadow-md hover:shadow-lg"
            >
                Aprender Mas
            </a>
        </div>
    );
};

export default Info;
