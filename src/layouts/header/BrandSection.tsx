import AppLogo from "/appLogo.png"

export function BrandSection(){

    return(

        <div className="flex items-center gap-3">
            
            <img src={AppLogo} className="w-8 h-8" alt="logo"/>

            <div className="flex flex-col leading-tight text-left">
                {/* flex: flexbox 레이아웃 사용 */}
                {/* flex-col: 세로 방향(flex-direction: column) */}
                {/* leading-tight: 줄 간격 1.25 (tight) */}
                {/* text-left: 텍스트 왼쪽 정렬 */}

                <span className="text-sm font-semibold text-gray-900 font-playfair">
                    {/* text-sm: 폰트 크기 0.875rem(14px) */}
                    {/* font-semibold: 폰트 굵기 600 */}
                    {/* text-gray-900: 텍스트 색상 회색(900톤) */}
                    {/* font-playfair: 커스텀 폰트 "Playfair Display" 적용 */}
                    {/* text-left: 텍스트 왼쪽 정렬 */}
                    LIT    
                </span>
                
                <span className="text-xs text-gray-500 font-normal">
                    {/* text-xs: 폰트 크기 0.75rem(12px) */}
                    {/* text-gray-500: 텍스트 색상 회색(500톤) */}
                    {/* font-normal: 폰트 굵기 400 */}
                    {/* text-left: 텍스트 왼쪽 정렬 */}
                    LITerature In Together
                </span>

            </div>

        </div>
    );

}