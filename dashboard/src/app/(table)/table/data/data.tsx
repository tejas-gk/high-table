import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
} from "@radix-ui/react-icons"

export const labels = [
    {
        value: "bug",
        label: "Bug",
    },
    {
        value: "feature",
        label: "Feature",
    },
    {
        value: "documentation",
        label: "Documentation",
    },
]

export const statuses = [
    {
        value: "SHIPPED",
        label: "shipped",
        icon: QuestionMarkCircledIcon,
    },
    {
        value: "NOT_SHIPPED",
        label: "not shipped",
        icon: CircleIcon,
    },
    {
        value: "CANCELLED",
        label: "cancelled",
        icon: StopwatchIcon,
    },
    {
        value: "DELIVERED",
        label: "delivered",
        icon: CheckCircledIcon,
    },
    {
        value: "CANELLED",
        label: "Canceled",
        icon: CrossCircledIcon,
    },
]

export const priorities = [
    {
        label: "Low",
        value: "LOW",
        icon: ArrowDownIcon,
    },
    {
        label: "Medium",
        value: "MEDIUM",
        icon: ArrowRightIcon,
    },
    {
        label: "High",
        value: "HIGH",
        icon: ArrowUpIcon,
    },
]
