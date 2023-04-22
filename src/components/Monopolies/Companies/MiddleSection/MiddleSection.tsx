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
        <div className="h-full flex flex-col grow md:pl-10 lg:p-10" >
            <div className="aspect-square bg-gray-600 ">
                {/* <Asset3D scenes={scenes} /> */}
            </div>
            <ActiveBar id={id} />
        </div>
    );
};

export default MiddleSection;
