const ActiveBar = ({ id }: { id: number }) => {
    return (
        <div className=" mx-auto flex h-20 w-full items-center justify-center align-bottom">
            <div className="mx-2 h-1 w-16 rounded-lg bg-secondary-100 shadow-lg hover:bg-secondary-200"></div>
            <div className="mx-2 h-1 w-16 rounded-lg bg-white shadow-lg hover:bg-secondary-200"></div>
            <div className="mx-2 h-1 w-16 rounded-lg bg-secondary-100 shadow-lg hover:bg-secondary-200"></div>
        </div>
    );
};

export default ActiveBar;
