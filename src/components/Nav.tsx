//TODO: login/ i18n/ switch darkmode

'use client'
import React from 'react';
import { useTheme } from '@/hooks/ThemeContext';

// 你可以根据实际登录状态替换此处逻辑
const isLoggedIn = false;
const userAvatar = 'https://randomuser.me/api/portraits/men/32.jpg';

export default function Nav() {
    return (
        <nav className="transiton duration-500 w-full h-14 mb-14 flex items-center justify-between px-4 md:px-8 bg-transparent shadow-sm shadow-slate-500 backdrop-blur-lg border-gray-200 dark:border-neutral-800 fixed top-0 left-0 z-50">
            {/* 左侧：用户头像或登录按钮 */}
            <div className="flex items-center gap-2">
                <span className="ml-2 text-base font-semibold tracking-tight text-gray-900 dark:text-gray-100 select-none">Friends</span>
            </div>

            {/* 右侧：主题切换、多语言切换、登录入口 */}
            <div className="flex items-center gap-2">
                {/* 主题切换按钮 */}
                <ThemeToggle />
                {/* 多语言切换 */}
                <LangSwitcher />
                {/* 登录入口（移动端可隐藏） */}
                {!isLoggedIn && (
                    <button className="hidden md:inline px-3 py-1.5 rounded-full border border-blue-400 text-blue-500 text-xs font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/30">
                        登录
                    </button>
                )}
            </div>
        </nav>
    );
}

// 主题切换按钮
function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            aria-label="切换主题"
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100/80 dark:bg-neutral-800/80 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all shadow-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400/30"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {theme === 'dark' ?
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-8.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M6.34 6.34l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /> :
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />}
            </svg>
        </button>
    );
}

// 多语言切换按钮
function LangSwitcher() {
    const [lang, setLang] = React.useState('zh');
    const [open, setOpen] = React.useState(false);
    return (
        <div className="relative">
            <button
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100/80 dark:bg-neutral-800/80 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all shadow-sm text-xs font-bold text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400/30"
                onClick={() => setOpen((v) => !v)}
                aria-label="切换语言"
            >
                {lang === 'zh' ? '中' : 'EN'}
            </button>
            {open && (
                <div className="absolute right-0 mt-2 w-20 bg-white/95 dark:bg-neutral-900/95 rounded-lg shadow-lg ring-1 ring-black/5 dark:ring-white/10 py-1 z-10 animate-fade-in">
                    <button
                        className={`block w-full px-3 py-1.5 text-left text-xs rounded-t-lg hover:bg-blue-50 dark:hover:bg-neutral-800/60 transition-colors duration-150 ${lang === 'zh' ? 'font-bold text-blue-500' : 'text-gray-700 dark:text-gray-200'}`}
                        onClick={() => { setLang('zh'); setOpen(false); }}
                    >
                        中文
                    </button>
                    <button
                        className={`block w-full px-3 py-1.5 text-left text-xs rounded-b-lg hover:bg-blue-50 dark:hover:bg-neutral-800/60 transition-colors duration-150 ${lang === 'en' ? 'font-bold text-blue-500' : 'text-gray-700 dark:text-gray-200'}`}
                        onClick={() => { setLang('en'); setOpen(false); }}
                    >
                        English
                    </button>
                </div>
            )}
        </div>
    );
}

