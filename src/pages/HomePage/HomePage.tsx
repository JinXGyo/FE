import { QuoteBanner } from "../../features/home/components/QuoteBanner.tsx"
import { StudySection } from "../../features/home/components/StudySection.tsx"
import FocusingIcon from "../../assets/focusingIcon.svg"

export default function HomePage(){

    return(
        <div className="flex flex-col gap-6">
            
            <QuoteBanner/>

            <StudySection 
                icon={FocusingIcon}
                title="Focusing"
                description="Individual AI-assisted study"
                actionLabel="Continue Focusing"
            />

            


        </div>
    )

} 
