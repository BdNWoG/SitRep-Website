import { Heading } from "@/components/heading"
import { Settings } from "lucide-react";

const SettingsPage = async () => {
    return (
        <div>
            <Heading title="Settings" description="Manage your account settings." 
            icon={Settings} iconColor="text-grey-700" bgColor="bg-grey-700/10"/>
            <div className="px-4 lg:px-8 space-y-4 pb-3">
                <div className="text-muted-foreground text-lg text-amber-500">
                    You are currently on the Private Tier.
                </div>
            </div>
            <div className="px-4 lg:px-8 space-y-4 pb-3">
                <div className="text-muted-foreground text-lg text-amber-500">
                    You will be Able to Upgrade your plan when it is Available.
                </div>
            </div>
            <div className="px-4 lg:px-8 space-y-4 pb-3">
                <div className="text-muted-foreground text-lg text-amber-500">
                    You will be Able to customize your personal settings as well.
                </div>
            </div>
        </div>
    )
}

export default SettingsPage; 