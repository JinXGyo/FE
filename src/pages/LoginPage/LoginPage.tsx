import AppLogo from "/appLogo.png";
import GoogleLogo from "../../assets/googleLogo.png"
import LoginCardFooter from "../../assets/loginCardFooter.png"

export default function LoginPage() {

    return (
        <div
          className="
            min-h-screen 
            flex items-center justify-center 
            bg-[#FAF8F4] 
            bg-[linear-gradient(180deg,#F5F1E8_0%,#FAF8F3_50%,#F0EBE0_100%)]"
        >
            {/* 최상위 컨테이너: 화면 전체를 덮는 배경 */}
            {/* min-h-screen: 최소 높이를 화면 전체 높이(100vh)로 설정 */}
            {/* flex items-center justify-center: flexbox 레이아웃, 수직/수평 중앙 정렬 */}
            {/* bg-[#FAF8F4]: 배경색을 커스텀 색상 #FAF8F4로 설정 (임의값 사용) */}
            {/* bg-[linear-gradient(...)]: 위에서 아래로(180deg) 그라데이션 배경 */}
            {/* 로그인 카드 컨테이너 */}
            <div className="
                w-full max-w-[448px] 
                min-h-[455px] 
                rounded-2xl 
                border border-[#D4C5A9]/30
                bg-white/80 
                shadow-2xl 
                flex flex-col 
                items-center"
            >
                {/* w-full max-w-[448px]: 너비 100%, 최대 너비 448px로 제한 */}
                {/* min-h-[455px]: 최소 높이 455px */}
                {/* rounded-2xl: 테두리 반경을 매우 크게(1rem) 설정하여 둥근 모서리 */}
                {/* border border-[#D4C5A9]/30: 테두리 1px, 색상 #D4C5A9를 30% 투명도로 적용 */}
                {/* bg-white/80: 배경색 흰색을 80% 불투명도로 설정 */}
                {/* shadow-2xl: 매우 큰 그림자 효과 적용 */}
                {/* flex flex-col: flexbox 레이아웃, 세로 방향(flex-direction: column) */}
                {/* items-center: 교차축(cross-axis) 중앙 정렬 */}
                
                <div className="
                    flex 
                    flex-col
                    items-center 
                    mt-12">
                    {/* flex: flexbox 레이아웃 사용 */}
                    {/* flex-col: 세로 방향으로 배치 */}
                    {/* items-center: 교차축 중앙 정렬 */}
                    {/* mt-12: 상단 마진 3rem(48px) */}

                    <img
                    src={AppLogo}
                    alt="logo"
                    className="w-20 h-20 mb-6"/>
                    {/* w-20: 너비 5rem(80px) */}
                    {/* h-20: 높이 5rem(80px) */}
                    {/* mb-6: 하단 마진 1.5rem(24px) */}

                    <h1 className="
                        mt-8 
                        font-playfair 
                        text-lg 
                        leading-7 
                        font-normal 
                        text-[#2A2418]">
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

                    <div className="google-login-button">
                        {/* Google 로그인 버튼 */}
                        <button
                            className="
                                mt-10 
                                inline-flex 
                                items-center 
                                justify-center 
                                gap-5 
                                text-gray-700
                                h-12 
                                px-20 
                                rounded-lg 
                                border border-[#D1D5DC] 
                                bg-white 
                                shadow-sm 
                                hover:bg-gray-50 
                                hover:shadow-md 
                                transition-all 
                                duration-200
                            "
                        >
                            {/* mt-10: 상단 마진 2.5rem(40px) */}
                            {/* inline-flex: 인라인 flexbox 레이아웃 */}
                            {/* items-center: 교차축(cross-axis) 중앙 정렬 */}
                            {/* justify-center: 주축(main-axis) 중앙 정렬 */}
                            {/* gap-5: 자식 요소 간 간격 1.25rem(20px) */}
                            {/* text-gray-700: 텍스트 색상 회색(700톤) */}
                            {/* h-12: 높이 3rem(48px) */}
                            {/* px-20: 좌우 패딩 5rem(80px) */}
                            {/* rounded-lg: 테두리 반경 0.5rem(8px)로 둥근 모서리 */}
                            {/* border border-[#D1D5DC]: 테두리 1px, 색상 #D1D5DC */}
                            {/* bg-white: 배경색 흰색 */}
                            {/* shadow-sm: 작은 그림자 효과 */}
                            {/* hover:bg-gray-50: 호버 시 배경색을 연한 회색으로 변경 */}
                            {/* hover:shadow-md: 호버 시 중간 크기 그림자로 변경 */}
                            {/* transition-all: 모든 속성 변화에 애니메이션 적용 */}
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

                    <div className="mt-6 justify-center">
                        {/* mt-6: 상단 마진 1.5rem(24px) */}
                        {/* justify-center: 주축(main-axis) 중앙 정렬 */}
                        <img src={LoginCardFooter} alt="login-card-footer"/>
                    </div>

                </div>
            </div>
        </div>
    )

}