import LoginCardFooterImage from "../assets/loginCardFooter.png"

export function LoginCardFooter(){

    return(

        <div className="mt-6">
        {/* mt-6: 상단 마진 1.5rem(24px) */}
        {/* justify-center: 주축(main-axis) 중앙 정렬 */}

            <img src={LoginCardFooterImage} alt="login-card-footer"/>
        </div>

    )
}