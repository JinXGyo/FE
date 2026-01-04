import { StudyCard } from "./StudyCard"
import type { Card, BrainStormingCard } from "../types"
import { CardMetaData } from "./CardMetaData";
import type { ReactNode } from "react";

type RecentSectionProps = {

    card : Card;
    title : string;
    actionLabel : string;
    renderRecentMetaData?: (card: BrainStormingCard) => ReactNode;

}

export function RecentSection( {card, title, actionLabel, renderRecentMetaData} : RecentSectionProps ){

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
                variant="horizontal"
                card={card}
                actionLabel={actionLabel}
            >
                {renderRecentMetaData?.(card as BrainStormingCard)}
            </StudyCard>

        </div>

    )
}
