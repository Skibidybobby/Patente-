import { Button } from '@/components/ui/Button'
import { signOut } from '@/lib/auth/actions'

export function SignOutButton() {
  return (
    <form action={signOut}>
      <Button type="submit" variant="ghost" size="sm">
        Esci
      </Button>
    </form>
  )
}
