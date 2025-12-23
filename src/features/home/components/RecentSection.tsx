import { StudyCard } from "./StudyCard"
import type { Card } from "../types"

type RecentSectionProps = {

    card : Card;
    title : string;
    actionLabel : string;

}

export function RecentSection( {card, title, actionLabel} : RecentSectionProps, ){

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

            <StudyCard
                key={card.id}
                variant="recent"
                card={card}
                actionLabel={actionLabel}
            />

        </div>

    )
}