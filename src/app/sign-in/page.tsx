import { Google } from "@/components/atoms/BrandIcon";
import { Button } from "@/components/atoms/Button";
import SignInCardSection from "@/components/organisms/about/SignInCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Booking Hotel",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil officiis rerum, hic facere omnis assumenda soluta repellat expedita enim fugit. Aliquam assumenda praesentium quod veritatis?",
};

function SignInPage() {
  return (
    <>
      <SignInCardSection />
    </>
  );
}

export default SignInPage;
