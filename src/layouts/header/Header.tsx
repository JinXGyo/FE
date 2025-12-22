import { BrandSection } from "./BrandSection.tsx"
import { NotificationButton } from "./NotificationButton.tsx"
import { LogoutButton } from "./LogoutButton.tsx" 
import { HeaderAvatar } from "./HeaderAvatar.tsx"

export function Header(){

    return (

        <header className="
            h-16
            w-full
            px-8
            flex
            items-center
            justify-between
            border-b
            border-gray-200
            bg-white
        ">
           
            <BrandSection/>

            <div className="flex items-center gap-8">

                <NotificationButton/>

                <LogoutButton/>

                <HeaderAvatar/>
            
            </div>
        </header>

    )

}