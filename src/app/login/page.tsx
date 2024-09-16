import LoginForm from "@/components/LoginForm";

export default function page() {
  return (
    <main className="bg-gray-50 w-full min-h-screen pt-[100px] flex flex-col items-center">
      <div className="bg-white rounded-lg flex flex-col  items-center shadow-sm px-[80px] py-[80px]">
        <h1 className="text-[30px] font-bold mb-[60px]">Login</h1>
        <LoginForm />
      </div>
    </main>
  );
}