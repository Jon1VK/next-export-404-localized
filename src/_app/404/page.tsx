import { Link, useTranslations } from "next-globe-gen";

export default function NotFoundPage() {
  const t = useTranslations("notFound");

  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/">{t("goHome")}</Link>
    </div>
  );
}
