export default function FriendsApplyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-800 h-screen">
            {children}
        </div>
    );
}
