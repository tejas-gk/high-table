const Breadcrumbs = ({ crumbs }) => {
    return (
        <nav className="text-sm font-medium mb-4">
            <ol className="list-none p-0 inline-flex">
                {crumbs.map((crumb, index) => (
                    <li key={index} className="flex items-center">
                        <span className="text-gray-500">{crumb.title}</span>
                        {index < crumbs.length - 1 && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-4 h-4 mx-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
