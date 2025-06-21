import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class', // 使用 class 策略而不是 media 查询
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
export default config