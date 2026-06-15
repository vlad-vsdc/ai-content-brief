import { useState } from "react";
import { TopBar } from "../components/TopBar";
import type { BriefFormValues } from "../types/brief";
import { BriefForm } from "../components/BriefForm";

const [formValues, setFormValues] = useState<BriefFormValues>({
  topic: "",
  audience: "",
  tone: "professional",
  keywords: "",
});

export function App() {
  const [apiKey, setApiKey] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-[#e6edf3]">
      <TopBar apiKey={apiKey} onApiKeyChange={setApiKey} />

      <main className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[420px_1fr]">
        <section className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <BriefForm
            values={formValues}
            isLoading={false}
            onChange={setFormValues}
            onSubmit={() => {
              console.log(formValues);
            }}
          />
        </section>

        <section className="min-h-[520px] rounded-2xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
          Output panel
        </section>
      </main>
    </div>
  );
}
