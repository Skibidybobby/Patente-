import { PageShell } from '@/components/ui/PageShell'
import { StudioSession } from '@/components/studio/StudioSession'

export const metadata = { title: 'Studio' }
export const dynamic = 'force-dynamic'

export default function StudioPage() {
  return (
    <PageShell title="Studio" subtitle="Metodo R.O.T.T.A.">
      <StudioSession />
    </PageShell>
  )
}
