import CardWebeoParty from "../accesories/card-webeoparty"
import Chat from "../accesories/chat"
export default function Extras() {
    return (
        <div className="flex md:flex-row flex-col">
            <div className="md:w-4/12 w-72 lg:pt-4 lg:px-2">
                <Chat />
            </div>
            <div className="md:w-8/12 px-6">
                <CardWebeoParty />
            </div>

        </div>
    )
}