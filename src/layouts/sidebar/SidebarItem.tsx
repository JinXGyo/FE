type SidebarItemProps = {

    iconSrc: string;
    label: string;
    active?: boolean;

}

export function SidebarItem({ iconSrc, label, active = false }: SidebarItemProps){

    return(
    
        <div className={`
            h-12
            flex
            items-center
            gap-3
            px-3
            py-2
            rounded-lg
            bg-transparent

            text-sm
            transition
            ${
                active
                ? "!bg-[#E8DCC8] text-[#2A2418] font-medium"
                : "text-[#6B5D4F] hover:!bg-[#E8DCC8]/50"
            }
            `}>
            {/* rounded-lg: 테두리 반경 0.5rem(8px) */}
            {/* bg-transparent: 배경색 투명 */}
            {/* text-sm: 폰트 크기 0.875rem(14px) */}
            {/* transition: 모든 속성 변화에 애니메이션 적용 */}

            <img src={iconSrc} className="flex-shrink-0"/>
            <span className="flex-inline text-base text-[#2A2418]">{label}</span>
        </div>
   
    )
}