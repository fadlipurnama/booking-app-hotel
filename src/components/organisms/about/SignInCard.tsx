import { Google } from "@/components/atoms/BrandIcon";
import { Button } from "@/components/atoms/Button";
import { signIn } from "@/auth";

function SignInCardSection() {
const handleGoogleSignIn = async () => {
  'use server'; // Deklarasi ini harus di baris pertama fungsi
  await signIn('google');
};
  return (
    <section className="min-h-screen flex items-center">
      <div className="bg-primary-bg w-full max-w-md mx-auto rounded-sm shadow-lg p-8">
        <h2 className="text-4xl font-bold mb-1 ">Sign In</h2>
        <p className="font-medium text-subtle-text">Sign In to your account</p>

        <div className="text-center mt-10">
          <form action={handleGoogleSignIn}>
            <Button
              size="lg"
              variant="primary"
              className="w-full items-center "
            >
              <Google className="size-7" />
              Sign In With Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignInCardSection;
