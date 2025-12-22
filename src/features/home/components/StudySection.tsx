import {SectionHeader} from "./SectionHeader.tsx"
import {RecentCard} from "./RecentCard.tsx"

type LearningSectionProps = {

    icon : string;
    title : string;
    description : string;
    actionLabel : string;

}

export function StudySection( {
    icon, 
    title, 
    description, 
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

            <RecentCard title={title} actionLabel={actionLabel}/>

        </section>
    )
}