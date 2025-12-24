import { QuoteBanner } from "../../features/home/components/QuoteBanner.tsx"
import { StudySection } from "../../features/home/components/StudySection.tsx"
import FocusingIcon from "../../assets/focusingIcon.svg"
import BrainStormingIcon from "../../assets/brainstormingIcon.svg"
import { CardMetaData } from "../../features/home/components/CardMetaData.tsx"

{/* Mock Data */}

import book1 from "@/mock/book1.jpg";
import book2 from "@/mock/book2.jpg";
import book3 from "@/mock/book3.jpg";
import mockRecentCardImage from "@/mock/mockRecentCardImage.jpg"
import type { BrainStormingCard, FocusingCard } from "../../features/home/types.ts"

const recentCardOfFocusing: FocusingCard =
  {
    id: "r1",
    title: "To the Lighthouse",
    author: "Virginia Woolf",
    thumbnail: mockRecentCardImage,
  };

const bookmarkedCardsOfFocusing: FocusingCard[] = [
  {
    id: "f1",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    thumbnail: book1,
  },
  {
    id: "f2",
    title: "Hamlet",
    author: "William Shakespeare",
    thumbnail: book2,
  },
  {
    id: "f3",
    title: "Ulysses",
    author: "James Joyce",
    thumbnail: book3,
  },
];

const recentCard: BrainStormingCard =
  {
    id: "r1",
    title: "To the Lighthouse",
    author: "Virginia Woolf",
    thumbnail: mockRecentCardImage,
    members: 5,
    comments: 32
  };

const bookmarkedCards: BrainStormingCard[] = [
  {
    id: "f1",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    thumbnail: book1,
    members: 4,
    comments: 10
  },
  {
    id: "f2",
    title: "Hamlet",
    author: "William Shakespeare",
    thumbnail: book2,
    members: 3,
    comments: 4
  },
  {
    id: "f3",
    title: "Ulysses",
    author: "James Joyce",
    thumbnail: book3,
    members: 4,
    comments: 6
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
                recentCard={recentCardOfFocusing}
                bookmarkedCards={bookmarkedCardsOfFocusing}
            />

            <StudySection
                icon={BrainStormingIcon}
                title="Brain Storming"
                description="Collaborative group-based learning"
                actionLabel="Join Discussion"
                recentCard={recentCard}
                bookmarkedCards={bookmarkedCards}
                renderRecentMetaData={(card) => (
                  <CardMetaData
                    members={card.members}
                    comments={card.comments}
                  />
                )}
                renderBookmarkedMetaData={(card) => (
                  <CardMetaData
                    members={card.members}
                    comments={card.comments}
                  />
                )}
                          />

        </div>
    )

} 
