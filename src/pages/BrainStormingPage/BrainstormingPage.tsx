import { ControlBar } from "../../shared/components/ControlBar";
import brainstormingIcon from "../../assets/brainstormingIcon.svg";
import { CreateGroupButton } from "../../features/brainstorming/components/CreateGroupButton";
import { GroupCard } from "../../features/brainstorming/components/GroupCard";

const studyGroups = [
  {
    id: "g1",
    title: "Modernist Literature Study Group",
    description: "Exploring Joyce, Woolf, and contemporary modernist works",
    members: 5,
    works: 3,
    updatedAgo: "45d ago",
    owner: "You",
    participants: ["EW", "JS", "SK", "ME"],
    newCount: 4,
  },
  {
    id: "g2",
    title: "Victorian Poetry Analysis",
    description: "Deep dive into Tennyson, Browning, and the Victorian era",
    members: 4,
    works: 5,
    updatedAgo: "46d ago",
    owner: "Emma Watson",
    participants: ["EW", "JS", "YG", "LM"],
  },
  {
    id: "g3",
    title: "Shakespeare Tragedies",
    description: "Collaborative analysis of Macbeth, Hamlet, and King Lear",
    members: 6,
    works: 4,
    updatedAgo: "47d ago",
    owner: "You",
    participants: ["JS", "SK", "ME", "LM"],
    newCount: 12,
  },
  {
    id: "g4",
    title: "Romantic Period Exploration",
    description: "Wordsworth, Coleridge, and the sublime in nature poetry",
    members: 5,
    works: 6,
    updatedAgo: "48d ago",
    owner: "Evelyn Chase",
    participants: ["EW", "JS", "SK", "LM", "YG", "AB", "CD"],
  },
];

export default function BrainStormingPage() {
    return (
        <div className="flex flex-col">
            <ControlBar
                title="Brain Storming"
                description="Collaborate with classmates on literary works"
                icon={brainstormingIcon}
                iconAlt="brainstorming"
                searchPlaceholder="Search study groups..."
                actions={<CreateGroupButton />}
            />

            <section className="
                bg-[#FAF8F4]
                p-4
                sm:p-6
                flex
                flex-col
                gap-4
            ">
                {studyGroups.map((group) => (
                    <GroupCard key={group.id} group={group} />
                ))}
            </section>
        </div>
    )
}
