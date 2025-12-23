import { StudyCard } from "./StudyCard";
import type { Card } from "../types"

type BookmarkGridProps = {

    title : string;
    cards : Card[];

}

export function BookmarkedSection( {title, cards} : BookmarkGridProps ){

    return(

        <div className="w-full p-6">

            <h3 className="
                font-playfair
                text-lg
                text-[#6B5D4F]
                mb-4
                pl-2"
            >
                Favorite {title}
            </h3>

            <div className="
                grid 
                grid-cols-3 
                gap-4
                ">

                {cards.map((card) => (

                    <StudyCard key={card.id} card={card} variant="bookmarked"/> 

                ))}

            </div>


        </div>

    )

}