import {SectionHeader} from "./SectionHeader.tsx"
import {RecentSection} from "./RecentSection.tsx"
import {BookmarkedSection} from "./BookmarkedSection.tsx"
import type { BrainStormingCard, Card } from "../types"
import type { ReactNode } from "react"

type LearningSectionProps = {

    icon : string;
    title : string;
    description : string;

    recentCard : Card;
    bookmarkedCards : Card[];
    actionLabel : string;

    renderRecentMetaData?: (card: BrainStormingCard) => ReactNode;
    renderBookmarkedMetaData?: (card: BrainStormingCard) => ReactNode;
}

export function StudySection( {
    icon, 
    title, 
    description, 
    recentCard,
    bookmarkedCards,
    actionLabel,
    renderRecentMetaData,
    renderBookmarkedMetaData
} : LearningSectionProps ) {
    return(

        <section className="
            flex 
            flex-col 
            items-start 
            gap-4 
            bg-white
            border-1 
            border-[#5A4A3A26]
            rounded-2xl
            mx-8
        ">

            <SectionHeader icon={icon} title={title} description={description}/>

            <RecentSection title={title} card={recentCard} actionLabel={actionLabel} renderRecentMetaData={renderRecentMetaData}/>

            <BookmarkedSection title={title} cards={bookmarkedCards} renderBookmarkedMetaData={renderBookmarkedMetaData}/>

        </section>
    )
}