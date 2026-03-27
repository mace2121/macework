import Link from "next/link";
import { siteContent } from "../content/site-content";
import { Share2, Globe, Users } from "lucide-react";

const icons: Record<string, React.ElementType> = {
  linkedin: Share2,
  twitter: Globe,
  instagram: Users,
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight">Macework<span className="text-macework">.</span></span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              {siteContent.footer.description}
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Hızlı Linkler</h4>
            <ul className="space-y-2">
              {siteContent.header.navigation.map((nav, i) => (
                <li key={i}>
                  <Link href={nav.href} className="text-sm text-muted-foreground hover:text-macework transition-colors">
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">İletişim</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{siteContent.contact.email}</li>
              <li>{siteContent.contact.phone}</li>
            </ul>
            <div className="flex items-center gap-4 pt-4">
              {siteContent.contact.social.map((social, i) => {
                const Icon = icons[social.icon];
                return (
                  <Link key={i} href={social.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {Icon && <Icon className="w-5 h-5" />}
                    <span className="sr-only">{social.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">{siteContent.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
