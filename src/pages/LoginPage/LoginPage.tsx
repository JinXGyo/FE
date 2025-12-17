import AppLogo from "/appLogo.png";
import LoginCardFooter from "../../features/auth/assets/loginCardFooter.png"
import {GoogleLoginButton} from "../../features/auth/components/GoogleLoginButton.tsx"

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

                    <GoogleLoginButton/>

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