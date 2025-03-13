import { metadata } from "./metadata";

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{metadata.title}</h1>
      <p className="mt-4 text-gray-600">{metadata.description}</p>
    </div>
  );
}

