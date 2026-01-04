import { ControlBar } from "../../shared/components/ControlBar";
import { SortDropdown } from "../../features/focusing/components/SortDropdown";
import { UploadButton } from "../../features/focusing/components/UploadButton";
import focusingIcon from "../../assets/focusingIcon.svg";

export default function FocusingPage() {
    return (
        <div className="flex flex-col gap-6">
            <ControlBar
                title="My Studies"
                description="Continue your AI-assisted learning journey"
                icon={focusingIcon}
                iconAlt="focusing"
                searchPlaceholder="Search by title or author..."
                actions={
                    <div className="flex items-center gap-4">
                        <SortDropdown />
                        <UploadButton />
                    </div>
                }
            />

            {/* 카드 Grid */}
        </div>
    )
}