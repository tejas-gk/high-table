import { RocketIcon } from "@radix-ui/react-icons"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

interface CallOutProps {
    title: string
    icon?: React.ReactNode
    description?: string
}
export function CallOut({
    title,
    icon,
    description,
}: CallOutProps) {
    return (
        <Alert>
            <RocketIcon className="h-4 w-4" />
            <AlertTitle>
                {title}
            </AlertTitle>
            <AlertDescription>
                {description}
            </AlertDescription>
        </Alert>
    )
}
