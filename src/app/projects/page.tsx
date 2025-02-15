import BotWarning from "@/components/bot/warning";

export default function Projects() {
  return (
    <main className="min-h-screen bg-white max-w-7xl mx-auto px-4">
      <BotWarning visibility={true} buttons={true} title="This page is protected. Please contact the owner." />
    </main>
  );
}