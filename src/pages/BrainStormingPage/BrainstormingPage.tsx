import { ControlBar } from "../../shared/components/ControlBar";
import brainstormingIcon from "../../assets/brainstormingIcon.svg";
import { CreateGroupButton } from "../../features/brainstorming/components/CreateGroupButton";

export default function BrainStormingPage() {
    return (
        <div className="flex flex-col gap-6">
            <ControlBar
                title="Study Groups"
                description="Collaborate with classmates on literary works"
                icon={brainstormingIcon}
                iconAlt="brainstorming"
                searchPlaceholder="Search study groups..."
                actions={<CreateGroupButton />}
            />

            {/* Study Groups Content */}
        </div>
    )
}
