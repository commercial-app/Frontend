import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default async function page() {
  return (
    <main className="w-full min-h-screen pt-[100px] flex flex-col items-center">
      <div className="bg-white rounded-lg flex flex-col  items-center shadow-sm px-[80px] py-[80px]">
        <h1 className="text-[30px] font-bold mb-[60px]">Login</h1>
        <LoginForm />
        <div className="flex gap-[10px]">
          <p>Don't have an account? </p>
          <Link href="/register" className="text-blue-600 font-semibold">
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
