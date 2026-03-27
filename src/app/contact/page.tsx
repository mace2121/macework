"use client";

import { siteContent } from "@/content/site-content";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { SubPageHeader } from "@/components/subpage-header";
import { LeadForm } from "@/components/lead-form";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <SubPageHeader 
        badge="İletişim"
        title="Bize Ulaşın"
        description="Fikrinizi ürüne dönüştürmek veya markanızı dijitalde büyütmek için ilk adımı atın. Kahve eşliğinde stratejinizi konuşalım."
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-10">
              <div className="space-y-6">
                <h3 className="text-xl font-bold border-b border-border pb-4">İletişim Bilgileri</h3>
                
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-macework/10 flex items-center justify-center text-macework group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">E-posta</p>
                    <a href={`mailto:${siteContent.contact.email}`} className="text-lg font-bold hover:text-macework transition-colors">
                      {siteContent.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Telefon</p>
                    <a href={`tel:${siteContent.contact.phone}`} className="text-lg font-bold hover:text-primary transition-colors">
                      {siteContent.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Adres</p>
                    <p className="text-base font-bold whitespace-pre-line leading-relaxed">
                      {siteContent.contact.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-muted/50 border border-border space-y-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                   <MessageSquare className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-lg leading-tight">Hızlı Cevap Garantisi</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tüm başvurularınıza en geç 24 saat içerisinde uzman ekibimiz tarafından geri dönüş sağlanır.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
               <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
