import AppLogo from "/appLogo.png"

export function BrandHeader() {

    return(

        <div className="
            flex 
            flex-col
            items-center 
            mt-12"
        >
        {/* flex: flexbox 레이아웃 사용 */}
        {/* flex-col: 세로 방향으로 배치 */}
        {/* items-center: 교차축 중앙 정렬 */}
        {/* mt-12: 상단 마진 3rem(48px) */}

            <img
                src={AppLogo}
                alt="logo"
                className="w-20 h-20 mb-6"
            />
            {/* w-20: 너비 5rem(80px) */}
            {/* h-20: 높이 5rem(80px) */}
            {/* mb-6: 하단 마진 1.5rem(24px) */}

            <h1 className="
                 mt-8 
                font-playfair 
                text-lg 
                leading-7 
                font-normal 
                text-[#2A2418]"
            >
                Literature In Together
            </h1>
                {/* mt-8: 상단 마진 2rem(32px) */}
                {/* font-playfair: 커스텀 폰트 "Playfair Display" 적용 */}
                {/* text-lg: 폰트 크기 1.125rem(18px) */}
                {/* leading-7: 줄 간격 1.75rem(28px) */}
                {/* font-normal: 폰트 굵기 400 */}
                {/* text-[#2A2418]: 텍스트 색상을 커스텀 색상 #2A2418로 설정 */}

            <p className="
                mt-8 
                font-inter 
                text-base
                leading-[26px] 
                text-[#6B5D4F]"
            >
                AI assistant for understanding English Literature
            </p>
                {/* mt-8: 상단 마진 2rem(32px) */}
                {/* font-inter: 커스텀 폰트 "Inter" 적용 */}
                {/* text-base: 폰트 크기 1rem(16px) */}
                {/* leading-[26px]: 줄 간격을 커스텀 값 26px로 설정 (임의값 사용) */}
                {/* text-[#6B5D4F]: 텍스트 색상을 커스텀 색상 #6B5D4F로 설정 */}
        </div>

    )


}