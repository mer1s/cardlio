const NotFound = () => {
    return (
        <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white flex items-center justify-center px-6">
            <div className="w-full max-w-xl space-y-6">
                <div className="space-y-1 text-center pb-5">
                    <h1 className="text-5xl tracking-normal font-medium">
                        Oops...
                    </h1>
                    <p className="text-zinc-400 text-lg pt-2">
                        The page you’re looking for doesn’t exist or may have been moved.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default NotFound