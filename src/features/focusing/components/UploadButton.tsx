import uploadIcon from "../assets/uploadIcon.svg";

type UploadButtonProps = {
    onClick?: () => void;
}

export function UploadButton({ onClick }: UploadButtonProps) {
    return (
        <button 
            onClick={onClick}
            className="
                flex
                items-center
                gap-2
                px-4
                h-10
                rounded-lg
                bg-[#5A4A3A]
                text-white
                text-sm
                font-inter
                hover:bg-[#4A3A2A]
                transition
            ">
            <img src={uploadIcon} alt="upload" />
            Upload Study
        </button>
    )
}