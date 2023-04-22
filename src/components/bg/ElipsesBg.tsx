const ElipsesBg = ({ colors }: { colors: Array<string> }) => {
    console.log(colors);

    return (
        <div className="relative">
            <div
                key="1"
                className={`top-30 absolute left-96 h-52 w-52 rounded-full ${colors[0]} blur-[150px] `}
            ></div>
            <div
                key="2"
                className={`absolute right-20 top-20 h-52 w-52 rounded-full ${colors[1]} blur-[150px] `}
            ></div>
            <div
                key="3"
                className={`absolute left-48 top-96 h-52 w-52 rounded-full ${colors[2]} blur-[150px] `}
            ></div>
            <div
                key="4"
                className={`absolute right-36 top-96 h-52 w-52 rounded-full ${colors[3]} blur-[150px] `}
            ></div>
        </div>
    );
};

export default ElipsesBg;
