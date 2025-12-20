import AppLogo from "/appLogo.png"

export function BrandSection(){

    return(

        <div className="flex items-center gap-3">
            
            <img src={AppLogo} className="w-8 h-8" alt="logo"/>

            <div className="flex flex-col leading-tight">
                {/* leading-tight: 줄 간격 1.25 (tight) */}

                <span className="text-sm font-semibold text-gray-900 font-playfair">
                    {/* text-sm: 폰트 크기 0.875rem(14px) */}
                    {/* font-semibold: 폰트 굵기 600 */}
                    LIT    
                </span>
                
                <span className="text-xs text-gray-500 font-normal">
                    {/* text-xs: 폰트 크기 0.75rem(12px) */}
                    LITerature In Together
                </span>

            </div>

        </div>
    );

}