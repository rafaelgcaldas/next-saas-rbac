import { Header } from '@/components/header'

export default async function OrgLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <div className="pt-6">
        <Header />
      </div>

      <main className="mx-auto w-full max-w-[1200px] pt-4">{children}</main>
    </div>
  )
}