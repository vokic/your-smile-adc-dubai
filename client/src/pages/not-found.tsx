import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/hooks/useLanguage";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <SEO
        title={t("notFound.seoTitle")}
        description={t("notFound.seoDescription")}
        path="/404"
        noindex
      />
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6 space-y-4">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">{t("notFound.title")}</h1>
          </div>

          <p className="text-sm text-gray-600">
            {t("notFound.body")}
          </p>

          <Button asChild className="w-full gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              {t("notFound.backHome")}
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
