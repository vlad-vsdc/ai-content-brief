import type { BriefFormValues, Tone } from "../types/brief";

type BriefFormProps = {
  values: BriefFormValues;
  isLoading: boolean;
  onChange: (values: BriefFormValues) => void;
  onSubmit: () => void;
};

const toneOptions: Array<{ value: Tone; label: string }> = [
  { value: "professional", label: "Professional" },
  { value: "friendly", label: "Friendly" },
  { value: "technical", label: "Technical" },
  { value: "persuasive", label: "Persuasive" },
  { value: "casual", label: "Casual" },
];

export function BriefForm({
  values,
  isLoading,
  onChange,
  onSubmit,
}: BriefFormProps) {
  const updateField = <Key extends keyof BriefFormValues>(
    key: Key,
    value: BriefFormValues[Key],
  ) => {
    onChange({ ...values, [key]: value });
  };

  return (
    <form
      className="space-y-5"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200">
          Topic
        </label>
        <input
          value={values.topic}
          onChange={(event) => updateField("topic", event.target.value)}
          placeholder="e.g. AI tools for small businesses"
          className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-[#e6edf3] outline-none transition duration-200 placeholder:text-slate-400 focus:border-cyan-300/60 focus:shadow-[0_0_24px_rgba(34,211,238,0.22)]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200">
          Target audience
        </label>
        <input
          value={values.audience}
          onChange={(event) => updateField("audience", event.target.value)}
          placeholder="e.g. startup founders"
          className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-[#e6edf3] outline-none transition duration-200 placeholder:text-slate-400 focus:border-cyan-300/60 focus:shadow-[0_0_24px_rgba(34,211,238,0.22)]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200">
          Tone
        </label>
        <select
          value={values.tone}
          onChange={(event) => updateField("tone", event.target.value as Tone)}
          className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-[#e6edf3] outline-none transition duration-200 focus:border-cyan-300/60 focus:shadow-[0_0_24px_rgba(34,211,238,0.22)]"
        >
          {toneOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200">
          Keywords
        </label>
        <textarea
          value={values.keywords}
          onChange={(event) => updateField("keywords", event.target.value)}
          placeholder="Optional, comma-separated"
          rows={4}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-[#e6edf3] outline-none transition duration-200 placeholder:text-slate-400 focus:border-cyan-300/60 focus:shadow-[0_0_24px_rgba(34,211,238,0.22)]"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition duration-200 hover:scale-[1.01] hover:shadow-cyan-400/30 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
      >
        {isLoading ? "Generating..." : "Generate brief"}
      </button>
    </form>
  );
}
