import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form/Form";
import { Input } from "../../ui/input/Input";
import { loginSchema } from "../../../libs/dto/auth/login";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../ui/buttons/Button";
import { Link } from "react-router-dom";
import { useLogin } from "../../../api/auth";

type FormValues = z.infer<typeof loginSchema>;

const AdminAuthForm = ({}) => {
  const { login, loading } = useLogin();

  const form = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { identifier: "", password: "" },
  });

  const handleSubmit = () => {};
  return (
    <Form {...form}>
      <form className="w-full max-w-[500px] bg-light_nav_bg/30 p-4 sm:p-5 rounded-md shadow-sm max-h-[calc(100vh_-_3rem)] flex flex-col items-center gap-4">
        {/* username or email */}
        <FormField
          name="identifier"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`Email`}</FormLabel>
              <FormControl>
                <Input placeholder="john.doe@example.com" {...field} />
              </FormControl>
              <FormDescription>{`You can also enter your username.`}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* password */}
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`Password`}</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormDescription>
                {/* <Trans> */}
                Hold <code className="text-xs font-bold">Ctrl</code> to display
                your password temporarily.
                {/* </Trans> */}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-4 flex items-center gap-x-4">
          <Button
            type="submit"
            disabled={loading}
            className="flex-1 text-semibold"
          >
            {`Sign in`}
          </Button>

          <Button asChild variant="link" className="px-4">
            <Link to="/auth/forgot-password">{`Forgot Password?`}</Link>
          </Button>
        </div>

        {/* <MainButton
          onClick={() => {
            handleSubmit();
          }}
        >
          LOGIN
        </MainButton> */}
      </form>
    </Form>
  );
};

export default AdminAuthForm;
