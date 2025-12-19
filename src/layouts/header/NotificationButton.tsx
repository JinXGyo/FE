import AlertIcon from "@/layouts/assets/alertIcon.svg"

export function NotificationButton(){

    const hasNotification = true;
    const count = 2; // 일단 하드 코딩

    return(

        <button className="
            relative
            rounded-full


            focus:outline-none
            
            transition  
        "
        aria-label="Notifications">
        
        <div className="relative">
            <img src={AlertIcon} className="w-5 h-5"/>

            <span className="
                absolute
                top-[-10px]
                right-[-10px]
        
                min-w-[18px]
                h-[18px]
                px-1

                flex
                items-center
                justify-center

                rounded-full
                bg-[#6B3E2E]
                text-white
                text-[11px]
                font-medium
            "
            >
                {count}
            </span>
        </div>

        </button>
    
    )
}