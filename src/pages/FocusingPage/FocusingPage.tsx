import { ControlBar } from "../../shared/components/ControlBar";
import { SortDropdown } from "../../features/focusing/components/SortDropdown";
import { UploadButton } from "../../features/focusing/components/UploadButton";
import { StudyCard, type CardMetadata } from "../../features/home/components/StudyCard";
import type { FocusingCard } from "../../features/home/types";
import book1 from "@/mock/book1.jpg";
import book2 from "@/mock/book2.jpg";
import book3 from "@/mock/book3.jpg";
import focusingIcon from "../../assets/focusingIcon.svg";

type FocusingCardWithMeta = {
  card: FocusingCard;
  metadata?: CardMetadata;
};

const focusingCards: FocusingCardWithMeta[] = [
  {
    card: {
      id: "f1",
      title: "To the Lighthouse",
      author: "Virginia Woolf",
      thumbnail: book1,
    },
    metadata: { lastOpened: "Last opened 11h ago" },
  },
  {
    card: {
      id: "f2",
      title: "To the Lighthouse",
      author: "James Joyce",
      thumbnail: book2,
    },
    metadata: { lastOpened: "Last opened 1d ago" },
  },
  {
    card: {
      id: "f3",
      title: "To the Lighthouse",
      author: "William Shakespeare",
      thumbnail: book3,
    },
    metadata: { lastOpened: "Last opened 2d ago" },
  },
  {
    card: {
      id: "f4",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      thumbnail: book1,
    },
    metadata: { lastOpened: "Last opened 3d ago" },
  },
  {
    card: {
      id: "f5",
      title: "The Waste Land",
      author: "T.S. Eliot",
      thumbnail: book2,
    },
    metadata: { lastOpened: "Last opened 4d ago" },
  },
  {
    card: {
      id: "f6",
      title: "Wuthering Heights",
      author: "Emily Bronte",
      thumbnail: book3,
    },
    metadata: { lastOpened: "Last opened 5d ago" },
  },
];

export default function FocusingPage() {
    return (
        <div className="flex flex-col">
            <ControlBar
                title="Focusing"
                description="Continue your AI-assisted learning journey"
                icon={focusingIcon}
                iconAlt="focusing"
                searchPlaceholder="Search by title or author..."
                actions={
                    <div className="flex items-center gap-4">
                        <SortDropdown />
                        <UploadButton />
                    </div>
                }
            />

            <section className="
                bg-[#FAF8F4]
                shadow-sm
                p-4
                sm:p-6
            ">
                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-3
                    gap-4
                    sm:gap-6
                ">
                    {focusingCards.map(({ card, metadata }) => (
                        <StudyCard key={card.id} card={card} variant="grid" metadata={metadata}>
                        </StudyCard>
                    ))}
                </div>
            </section>
        </div>
    )
}
