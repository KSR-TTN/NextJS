import { useState } from "react";
import ClientSide from "./client-side";
import { useRouter } from "next/router";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"client" | "ssr" | "ssg">("client");
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Next.js Data Fetching Demo</h1>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          {["client", "ssr", "ssg"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
              }`}
              onClick={() => setActiveTab(tab as "client" | "ssr" | "ssg")}
            >
              {tab === "client" && "Client-Side"}
              {tab === "ssr" && "Server-Side (SSR)"}
              {tab === "ssg" && "Static Site (SSG)"}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          {activeTab === "client" && <ClientSide />}
          {activeTab === "ssr" && (
            <button
              onClick={() => navigateTo("/server-side/1")}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              🚀 View Server-Side Example (ID: 1)
            </button>
          )}
          {activeTab === "ssg" && (
            <button
              onClick={() => navigateTo("/static/1")}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              📸 View Static Site Example (ID: 1)
            </button>
          )}
        </div>
      </div>

      <footer className="text-center mt-12 text-gray-600">
        © {new Date().getFullYear()} Next.js Demo | Styled with Tailwind CSS
      </footer>
    </div>
  );
}
