import {SectionHeader} from "./SectionHeader.tsx"
import {RecentSection} from "./RecentSection.tsx"
import {BookmarkedSection} from "./BookmarkedSection.tsx"
import type {Card} from "../types"

type LearningSectionProps = {

    icon : string;
    title : string;
    description : string;

    recentCard : Card;
    bookmarkedCards : Card[];
    actionLabel : string;

}

export function StudySection( {
    icon, 
    title, 
    description, 
    recentCard,
    bookmarkedCards,
    actionLabel
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
        ">

            <SectionHeader icon={icon} title={title} description={description}/>

            <RecentSection title={title} card={recentCard} actionLabel={actionLabel}/>

            <BookmarkedSection title={title} cards={bookmarkedCards}/>

        </section>
    )
}