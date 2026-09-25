import { GoogleIcon } from '@components/google-icon'
import { Button } from '@components/ui/button'
import { useAuth } from '@hooks/use-auth'

export function SignIn() {
  const { signInWithGoogle, isLoading } = useAuth()

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4">
      <div className="flex w-full max-w-sm flex-col items-center gap-6 text-center">
        <div className="flex flex-col gap-1.5">
          <h1 className="font-semibold text-2xl tracking-tight">
            Bem-vindo de volta
          </h1>
          <p className="text-muted-foreground text-sm">
            Entre com sua conta do Google para acessar o OAuth2 API Flow.
          </p>
        </div>

        <Button
          variant="outline"
          onClick={signInWithGoogle}
          className="w-full gap-2"
          isLoading={isLoading}
        >
          <GoogleIcon />
          Entrar com o Google
        </Button>
      </div>
    </div>
  )
}
