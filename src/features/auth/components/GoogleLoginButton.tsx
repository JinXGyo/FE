import GoogleLogo from "../assets/googleLogo.png"

export function GoogleLoginButton() {

    return(

        <div className="google-login-button">
            {/* Google 로그인 버튼 */}
            <button className="
                mt-10 
                inline-flex 
                items-center 
                justify-center 
                gap-5 
                       
                h-12 
                px-28

                text-gray-700
                rounded-lg 
                border-2 border-[#D1D5DC] 
                bg-white 

                shadow-[0_0_0_1px_rgba(209,213,220,0.8)]
                hover:shadow-[0_0_0_1px_rgba(184,189,199,0.9)] 
                transition-all 
                active:scale-[0.985]
                duration-200
            "
            >
            {/* mt-10: 상단 마진 2.5rem(40px) */}
            {/* inline-flex: 인라인 flexbox 레이아웃 */}
            {/* items-center: 교차축(cross-axis) 중앙 정렬 */}
            {/* justify-center: 주축(main-axis) 중앙 정렬 */}
            {/* gap-5: 자식 요소 간 간격 1.25rem(20px) */}
            {/* h-12: 높이 3rem(48px) */}
            {/* px-28: 좌우 패딩 7rem(112px) */}
            {/* text-gray-700: 텍스트 색상 회색(700톤) */}
            {/* rounded-lg: 테두리 반경 0.5rem(8px)로 둥근 모서리 */}
            {/* border-2 border-[#D1D5DC]: 테두리 2px, 색상 #D1D5DC */}
            {/* bg-white: 배경색 흰색 */}
            {/* shadow-[0_0_0_1px_rgba(209,213,220,0.8)]: 커스텀 그림자 효과 (1px 테두리 효과) */}
            {/* hover:shadow-[0_0_0_1px_rgba(184,189,199,0.9)]: 호버 시 그림자 색상 변경 */}
            {/* transition-all: 모든 속성 변화에 애니메이션 적용 */}
            {/* active:scale-[0.985]: 클릭 시 98.5% 크기로 축소 효과 */}
            {/* duration-200: 애니메이션 지속 시간 200ms */}

                <img src={GoogleLogo} alt="google-logo" className="w-5 h-5" />
                    {/* w-5: 너비 1.25rem(20px) */}
                    {/* h-5: 높이 1.25rem(20px) */}

                    <span className="
                        font-inter
                        text-sm 
                        text-[#2A2418]">
                        Continue with Google
                    </span>
                        {/* font-inter: 커스텀 폰트 "Inter" 적용 */}
                        {/* text-sm: 폰트 크기 0.875rem(14px) */}
                        {/* text-[#2A2418]: 텍스트 색상을 커스텀 색상 #2A2418로 설정 */}
                        
                        </button>
                    </div>
    )
}