import { notFound } from 'next/navigation'
import { casesData } from '@/data/cases'
import CasePage from '@/components/CasePage'

export async function generateStaticParams() {
  return casesData.map((c) => ({ id: c.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const c = casesData.find((c) => c.id === id)
  if (!c) return {}
  return {
    title: `${c.titleRu} — After Human`,
  }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const c = casesData.find((c) => c.id === id)
  if (!c) notFound()

  return <CasePage caseData={c} />
}
