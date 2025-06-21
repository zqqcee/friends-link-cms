import Nav from '@/components/Nav';
import { ThemeProvider } from '@/hooks/ThemeContext';

export default function FriendsApplyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider>
            <div className="relative bg-gradient-to-t dark:from-slate-900 dark:to-slate-500 h-screen from-slate-400 to-slate-200">
                <Nav />
                {children}
            </div>
        </ThemeProvider>
    );
}
