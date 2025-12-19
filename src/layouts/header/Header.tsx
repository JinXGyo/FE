import { BrandSection } from "./BrandSection.tsx"
import { NotificationButton } from "./NotificationButton.tsx"

import LogoutIcon from "@/layouts/assets/logoutIcon.svg"

export default function Header(){

    return (

        <header className="
            h-16
            w-full
            px-6
            flex
            items-center
            justify-between
            border-b
            border-gray-200
            bg-white
        ">
            <BrandSection/>

            <div className="flex items-center gap-6">

                <NotificationButton/>

                <div className="logout">
                    <img src={LogoutIcon} className="logout-icon" alt="logout-icon"/>
                    Logout
                </div>

                {/* 사용자의 프로필 사진 */}
            </div>
        </header>

    )

}