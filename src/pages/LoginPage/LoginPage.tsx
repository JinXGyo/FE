export default function LoginPage() {

    return (
        <div className="login-card">

            <div className="logo-image">
                <img src="public/appLogo.png" alt="logo"/>
            </div>

            <div className="text-components">
                <div className="title">
                    Literature In Together
                </div>

                <div className="description">
                    AI assistant for understanding English Literature
                </div>
            </div>

            <div className="google-login-button">
                <button className="google-login">
                        {/* <img src = "/src/assets/googleLogo.png" alt="googleLogo"/> */}
                        Continue with Google
                </button>
            </div>

        </div>


    )

}