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
        <div className="flex h-full grow flex-col md:pl-10 lg:p-10">
            <Asset3D scenes={scenes} />
            <ActiveBar id={id} />
        </div>
    );
};

export default MiddleSection;
