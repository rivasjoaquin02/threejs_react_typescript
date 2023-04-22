import Info from "./Info";
import MiddleSection from "./MiddleSection/MiddleSection";
import Metrics from "./Metrics";

// backgound decoration
import ElipsesBg from "../../bg/ElipsesBg";

// types
import { CompaniesType } from "../../types";

const Companies = ({ company, id }: { company: CompaniesType; id: number }) => {
    const { name, description, website, metrics, scenes, colors } = company;

    return (
        <>
            <ElipsesBg colors={colors} />
            <div className="box-border flex h-full sm:flex-col md:flex-row ">
                <Info name={name} description={description} website={website} />
                <MiddleSection scenes={scenes} id={id} />
                <Metrics metrics={metrics} colors={colors} />
            </div>
        </>
    );
};

export default Companies;
