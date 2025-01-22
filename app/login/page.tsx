import { InputOverlapLabel } from "@/components/input";
import { login, signup } from "./actions";
import { Button } from "@/components/button";

export default function LoginPage() {
  return (
    <form className="flex flex-col gap-3">
      <InputOverlapLabel
        id="email"
        name="email"
        type="email"
        label="Email"
        required
      />
      <InputOverlapLabel
        id="password"
        name="password"
        type="password"
        label="Password"
        required
      />
      <div className="flex justify-between">
        <Button formAction={login}>Log in</Button>
        <Button formAction={signup}>Sign up</Button>
      </div>
    </form>
  );
}
