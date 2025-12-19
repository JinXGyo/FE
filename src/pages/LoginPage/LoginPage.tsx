import { GoogleLoginButton } from "../../features/auth/components/GoogleLoginButton.tsx"
import { LoginCard } from "../../features/auth/components/LoginCard";
import { BrandHeader } from "../../features/auth/components/BrandHeader";
import { LoginCardFooter } from "../../features/auth/components/LoginCardFooter";

export default function LoginPage() {

    return (

        <div className="
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

                <LoginCard>
                
                    <BrandHeader/>

                    <GoogleLoginButton/>

                    <LoginCardFooter/>

                </LoginCard>
        </div>
    )

}