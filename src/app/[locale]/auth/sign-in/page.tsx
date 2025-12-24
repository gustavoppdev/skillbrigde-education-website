import { AuthForm } from "../components/AuthForm";
import AuthTestimonials from "../components/AuthTestimonials";

const SignInPage = () => {
  return (
    <main className="section-container grid grid-cols-1 lg:grid-cols-7 gap-12.5 md:gap-15 xl:gap-20 2xl:gap-25 mt-12.5 lg:mt-20 items-center">
      <section className="col-span-1 lg:col-span-4 order-2 lg:order-1">
        <AuthTestimonials />
      </section>
      <section className="col-span-1 lg:col-span-3 order-1 lg:order-2">
        <AuthForm layout="SignIn" />
      </section>
    </main>
  );
};

export default SignInPage;
