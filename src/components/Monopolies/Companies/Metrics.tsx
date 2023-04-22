import { useEffect, useState } from "react";
import { MetricsType } from "../../types";

const Metrics = ({
    metrics,
    colors,
}: {
    metrics: Array<MetricsType>;
    colors: Array<string>;
}) => {
    const [widths, setWidths] = useState<Array<string>>(
        Array(4).fill("w-[250px]")
    );

    // TODO: what is the error
    // TODO: add the svg of the semicircule
    useEffect(() => {
        // the product with the most amount of units its the 100%
        const maxUnits = Math.max(...metrics.map((product) => product.units));

        const newWidths = metrics.map(
            (product) => `w-[${Math.round((product.units * 250) / maxUnits)}px]`
        );

        setWidths(newWidths);
    }, []);

    return (
        <div className="mt-10 sm:hidden md:block lg:w-[250px]">
            <ul>
                {widths.map((width, idx) => {
                    return (
                        <li
                            key={idx}
                            className={`my-10 h-10 ${width} rounded-l-xl ${colors[idx]} shadow-xl  hover:shadow-gray-800`}
                        ></li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Metrics;
