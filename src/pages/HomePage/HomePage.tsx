import { QuoteBanner } from "../../features/home/components/QuoteBanner.tsx"
import { StudySection } from "../../features/home/components/StudySection.tsx"
import FocusingIcon from "../../assets/focusingIcon.svg"
import BrainStormingIcon from "../../assets/brainstormingIcon.svg"

{/* Mock Data */}

import book1 from "@/mock/book1.jpg";
import book2 from "@/mock/book2.jpg";
import book3 from "@/mock/book3.jpg";

const recentCard =
  {
    id: "r1",
    title: "To the Lighthouse",
    author: "Virginia Woolf",
    thumbnail: book1,
  };

const bookmarkedCards = [
  {
    id: "f1",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    thumbnail: book2,
  },
  {
    id: "f2",
    title: "Hamlet",
    author: "William Shakespeare",
    thumbnail: book3,
  },
  {
    id: "f3",
    title: "Ulysses",
    author: "James Joyce",
    thumbnail: book1,
  },
];


export default function HomePage(){

    return(
        <div className="flex flex-col gap-6">
            
            <QuoteBanner/>

            <StudySection 
                icon={FocusingIcon}
                title="Focusing"
                description="Individual AI-assisted study"
                actionLabel="Continue Focusing"
                recentCard={recentCard}
                bookmarkedCards={bookmarkedCards}
            />

            <StudySection
                icon={BrainStormingIcon}
                title="Brain Storming"
                description="Collaborative group-based learning"
                actionLabel="Join Discussion"
                recentCard={recentCard}
                bookmarkedCards={bookmarkedCards}

            />

        </div>
    )

} 
