import { useTranslations } from "next-intl";
import { backend, databases, frontend, misc } from "../utils/stack";
import ColumnStack from "./ColumnStack";
export default function Stack() {
  const t = useTranslations("");
  return (
    <section
      id="stack"
      className="min-h-screen w-full py-12 px-4 md:px-16 backdrop-blur-md text-white"
    >
      <h2 className="text-3xl font-bold mb-12">Stack</h2>

      <div className="flex items-center justify-center min-h-[calc(100vh-20rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <ColumnStack
            stack={frontend}
            title="Frontend"
            color="bg-gradient-to-r from-pink-500 to-yellow-500"
          />
          <ColumnStack
            stack={backend}
            title="Backend"
            color="bg-gradient-to-r from-indigo-500 to-purple-600"
          />
          <ColumnStack
            stack={databases}
            title={t("DATABASES")}
            color="bg-gradient-to-r from-emerald-500 to-teal-500"
          />
          <ColumnStack
            stack={misc}
            title={t("MISC")}
            color="bg-gradient-to-r from-blue-500 to-cyan-500"
          />
        </div>
      </div>
    </section>
  );
}
