import Layout from "../components/Layout"

export default function RootLayout({children,popular,latest}: {children: React.ReactNode,popular:React.ReactNode,latest:React.ReactNode}){
    return (
        <html lang="en">
            <body>
                <Layout>
                    {children}
                    {popular}
                    {latest}
                </Layout>
            </body>
        </html>
    )
}

//페이지 라우터의 _app.js, _document.js 파일 대체
//루트 레이아웃만 html, body태그 포함
