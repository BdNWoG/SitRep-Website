import { Heading } from "@/components/heading"
import { Settings } from "lucide-react";

const SettingsPage = async () => {
    return (
        <div>
            <Heading title="Settings" description="Manage your account settings." 
            icon={Settings} iconColor="text-grey-700" bgColor="bg-grey-700/10"/>
            <div className="px-4 lg:px-8 space-y-4">
                <div className="text-muted-foreground text-sm">
                    You are currently on the Free Plan and the Waitlist for the Pro Plan.
                    You will be Able to Upgrade your plan when it is Available.
                </div>
            </div>
        </div>
    )
}

export default SettingsPage; 