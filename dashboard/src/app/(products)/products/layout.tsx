

interface LayoutProps {
    children: React.ReactNode
}

export default function ExamplesLayout({ children }: LayoutProps) {
    return (
        <>
            <div className="container relative">
                <section>
                    {/* <ExamplesNav /> */}
                    <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
                        {children}
                    </div>
                </section>
            </div>
        </>
    )
}
