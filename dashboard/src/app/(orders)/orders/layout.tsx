interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <div className="container relative">
                <section>
                    <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
                        {children}
                    </div>
                </section>
            </div>
        </>
    )
}
