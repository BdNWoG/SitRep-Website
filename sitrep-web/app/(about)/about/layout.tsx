const AboutLayout = ({ 
    children 
}: { children: React.ReactNode }) => {
    return (
        <main className="h-full bg-[#4267bc] overflow-auto">
            <div className="mx-auto max-w-screen-xl h-full w-full">
                {children}
            </div>
        </main>
    );
}

export default AboutLayout;