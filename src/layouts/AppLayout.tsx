import { Outlet } from "react-router-dom";
import { Header } from "./header/Header.tsx"
import { Sidebar } from "./sidebar/Sidebar.tsx"

export function AppLayout() {

    return(

        <div className="min-h-screen w-full bg-[#FAF8F4]">
            {/* min-h-screen: 최소 높이를 화면 전체 높이(100vh)로 설정 */}
            {/* w-full: 너비 100% */}
            {/* flex: flexbox 레이아웃 사용 */}
            {/* flex-col: 세로 방향(flex-direction: column) */}

            <Header/>


            <div className="flex flex-1 overflow-hidden">
                <Sidebar/>
                
                <main className="flex-1 overflow-y-auto pb-8">
                     {/* flex-1: 남은 공간을 모두 차지 */}
                        <Outlet/>
                </main>
            
            </div>

        </div>

    );

}