import { SceneType } from "../../../types";
import ActiveBar from "./ActiveBar";
import Asset3D from "./Asset3d/Asset3D";

const MiddleSection = ({
    scenes,
    id,
}: {
    scenes: Array<SceneType>;
    id: number;
}) => {
    return (
        <div className="box-border h-screen grow lg:p-10" id="asset3d">
            <div className="sm:h-[450px] sm:w-full lg:max-h-[750px] lg:w-full bg-gray-600">
                {/* <Asset3D scenes={scenes} /> */}
            </div>
            <ActiveBar id={id} />
        </div>
    );
};

export default MiddleSection;
