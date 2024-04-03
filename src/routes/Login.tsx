import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const LogIn = () => {
  return (
    <div className="mt-10 flex justify-center">
      <form className="flex max-w-md flex-col gap-4 bg-white-200 p-10 shadow-2xl">
        <div>
          <div className="mb-2 block text-black-100">
            <Label htmlFor="email1" value="Correo:" />
          </div>
          <TextInput id="email1" type="email" placeholder="ejemplo@dominio.com" required />
        </div>
        <div>
          <div className="mb-2 block text-black-100">
            <Label htmlFor="password1" value="Contraseña" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" className="bg-white-100 accent-accent" />
          <Label htmlFor="remember" className="text-black-100">Recordarme</Label>
        </div>
        <Button className="bg-primary text-white-100 hover:bg-accent-200">Enviar</Button>
      </form>
    </div>
  )
}

export default LogIn;