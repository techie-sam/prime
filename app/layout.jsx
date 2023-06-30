import React from 'react'
import 'styles/globals.css'

export const metadata = {
    title: "Prime",
    description: "Generated "
}
export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className='bg-gray0 h-screen dark:bg-gray-900'>
                <div>{children}</div>
            </body>
        </html>
    )
}