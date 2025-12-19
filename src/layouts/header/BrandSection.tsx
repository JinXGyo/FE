import AppLogo from "/appLogo.png"

export function BrandSection(){

    return(

        <div className="flex items-center gap-3 cursor-pointer">
            
            <img src={AppLogo} className="w-8 h-8" alt="logo"/>

            <div className="flex flex-col leading-tight">

                <span className="text-sm font-semibold text-gray-900">
                    LIT    
                </span>
                <span className="text-xs text-gray-500">
                    LITerature In Together
                </span>

            </div>

        </div>
    );

}