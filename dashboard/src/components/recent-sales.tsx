import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Order } from "@prisma/client"
type OrderItem = {
    amount: number;
};

type OrderProps = Order & {
    OrderItems: OrderItem[];
    user: {
        name: string;
    };
};
type RecentSalesProps = {
    data: OrderProps[];
};
export function RecentSales({
    data
}: RecentSalesProps
) {
    console.log(data)
    const userSpent = data.reduce((acc: any, item: any) => {
        // @ts-ignore
        return acc + item.OrderItems.reduce((acc, item) => {
            return acc + item.amount
        }, 0)
    }, 0)
    return (
        <div className="space-y-8">
            {
                data.slice(0, 5).map((item) => {
                    return (
                        <div className="flex items-center" key={item.id}>
                            <Avatar className="h-9 w-9">
                                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                                <AvatarFallback>OM</AvatarFallback>
                            </Avatar>
                            <div className="ml-4 space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    {item?.user?.name}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {item?.user?.email}
                                </p>
                            </div>
                            <div className="ml-auto font-medium">+₹{userSpent}</div>
                        </div>
                    )
                })

            }
        </div>
    )
}