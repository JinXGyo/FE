import type { ReactNode } from "react";
import type { Card } from "../types"

type WorkCardVariant = "recent" | "bookmarked"

type StudyCardProps = {

    variant : WorkCardVariant;
    card : Card;
    actionLabel? : string;
    children? : ReactNode;

};

export function StudyCard( { variant, card, actionLabel, children } : StudyCardProps){

    const isRecent = variant === "recent";

    return(

        <div className={`
        
                rounded-2xl
                bg-white
                border-2
                border-[#5A4A3A26]
                overflow-hidden
                shadow-sm
                transition
                ${isRecent ? "flex" : "hover:shadow-md cursor-pointer"}
        
            `}
        >

            <img 
                src={card.thumbnail} 
                className={`

                            object-cover 
                            ${isRecent ? "w-32 h-44 border-transparent rounded-l-2xl" : "rounded-t-2x1 w-full h-40"}
                            
                        `}    
                />

            <div className={`
                    flex flex-col
                    ${isRecent ? "justify-start pl-6 mt-6" : "p-4"}
                `}
            >

                <h4 className="font-playfair text-base text-[#2A2418]">
                    {card.title}
                </h4>

                <p className="font-inter text-xs text=[#6B5D4F] mt-2">
                    {card.author}
                </p>

                {children}

                {isRecent && (
                    <button className="
                        bg-[#5A4A3A]
                        rounded-lg
                        justify-center
                        text-[#FAF8F4]
                        text-sm
                        px-3
                        py-1.5
                        mt-6
                        "
                    >
                        {actionLabel}
                    </button>
                )}

            </div>

        </div>

    )

}