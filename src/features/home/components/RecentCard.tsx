import MockRecentCardImage from "../../../mock/mockRecentCardImage.jpg"

type RecentCardProps = {

    title : string;
    actionLabel : string;

}

export function RecentCard( {title, actionLabel} : RecentCardProps){

    return(

        <div className="w-full p-6">

            <h3 className="
                font-playfair
                text-lg
                text-[#6B5D4F]
                mb-4
                pl-2"
            >
                Recent {title}
            </h3>

            <div className="
                flex border-2
                border-[#5A4A3A26]
                rounded-2xl"
            >

                <img src={MockRecentCardImage} className="
                    w-32
                    h-44
                    border-transparent
                    rounded-l-2xl"/>

                <div className="
                    flex
                    flex-col
                    justify-start
                    pl-6
                    ">
                    <div className = "mt-6 mb-4">
                        <h4 className="text-base font-playfair text-[#2A2418]">
                            {/* Mock 데이터 */}
                            To the Lighthouse
                        </h4>
                        
                        <p className="font-inter text-sm text-[#6B5D4F]">
                            {/* Mock 데이터 */}
                            Virginia Woolf
                        </p>
                    </div>
                    
                    <button className="
                        bg-[#5A4A3A]
                        rounded-lg
                        justify-center
                        text-[#FAF8F4]
                        px-3
                        py-1.5
                        mt-4
                        "
                    >
                        {actionLabel}
                    </button>
                </div>

            </div> 

        
        </div>
    )

}