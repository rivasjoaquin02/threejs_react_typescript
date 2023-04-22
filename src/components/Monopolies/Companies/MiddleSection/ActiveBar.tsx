const ActiveBar = ({ id }: { id: number }) => {
    const getColor = (idx: number): string => {
        if (idx === id) return "bg-white";
        return "bg-secondary-100";
    };

    return (
        <div className=" flex h-20 items-center justify-center ">
            {Array(3)
                .fill(0)
                .map((v, idx) => {
                    return (
                        <div
                            className={`mx-2 h-1 w-16 rounded-lg ${getColor(
                                idx + 1
                            )} shadow-lg hover:bg-secondary-200`}
                        ></div>
                    );
                })}
        </div>
    );
};

export default ActiveBar;
