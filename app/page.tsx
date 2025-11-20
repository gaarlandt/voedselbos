import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "./config";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation / Header */}
      <header className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="text-2xl font-serif font-bold">L</div>
        <nav>
          <Link href={siteConfig.links.contact} className="px-4 py-2 border border-foreground/20 hover:bg-foreground/5 transition-colors text-sm uppercase tracking-widest">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col lg:flex-row items-center justify-center px-6 py-12 lg:py-24 max-w-7xl mx-auto w-full gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl lg:text-6xl font-serif leading-tight">
            Wij creëren een toekomstbestendig plan voor landgoedeigenaar, senior, en natuur.
          </h1>
        </div>
        <div className="lg:w-1/2 relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-xl">
          <Image
            src={siteConfig.images.hero}
            alt="Sfeerbeeld Voedselbos"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-12">
        <div className="h-16 w-px bg-foreground/20"></div>
      </div>

      {/* Vision Text */}
      <section className="px-6 py-12 max-w-3xl mx-auto text-center space-y-6">
        <p className="text-lg leading-relaxed font-serif">
          Landgood helpt landgoedeigenaren aan een stabiele inkomstenstroom, door de ontwikkeling van woningen voor ouderen. Voor meer biodiversiteit en gemeenschapszin ontwikkelen we voedselbossen. Wij creëren hiermee een aantal zaken:
        </p>
      </section>

      {/* Portfolio / Grid Section */}
      <section className="px-6 py-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div className="space-y-4">
            <div className="aspect-square relative rounded-sm overflow-hidden shadow-md">
              <Image src={siteConfig.images.house} alt="Fijne woningen" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="text-center text-sm uppercase tracking-wider text-foreground/80">Fijne woningen</p>
          </div>
          {/* Item 2 */}
          <div className="space-y-4 md:mt-12">
            <div className="aspect-video relative rounded-sm overflow-hidden shadow-md">
              <Image src={siteConfig.images.biodiversity} alt="Biodiversiteit" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="text-center text-sm uppercase tracking-wider text-foreground/80">Biodiversiteit</p>
          </div>
          {/* Item 3 */}
          <div className="space-y-4">
            <div className="aspect-[3/4] relative rounded-sm overflow-hidden shadow-md">
              <Image src={siteConfig.images.community} alt="Gemeenschapszin" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="text-center text-sm uppercase tracking-wider text-foreground/80">Gemeenschapszin</p>
          </div>
        </div>
        <div className="mt-12 flex justify-end">
          <div className="w-full md:w-1/3 space-y-4">
            <div className="aspect-video relative rounded-sm overflow-hidden shadow-md">
              <Image src={siteConfig.images.manor} alt="Perspectief voor landgoederen" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="text-center text-sm uppercase tracking-wider text-foreground/80">Perspectief voor landgoederen</p>
          </div>
        </div>
      </section>

      {/* Detailed Vision Section */}
      <section className="px-6 py-24 max-w-4xl mx-auto text-center space-y-8 bg-white/40 rounded-3xl my-12 mx-6">
        <h2 className="text-3xl font-serif text-accent-primary">Onze visie</h2>
        <p className="text-lg leading-relaxed">
          Wij geloven dat landgoederen opnieuw een centrale rol kunnen spelen in het landschap en de samenleving. Dat doen we door het ontwikkelen van kleinschalige woonclusters in erfpacht, gericht op ouderen die bewust kiezen voor een natuurlijker leven, zingeving en gemeenschapszin. In combinatie met een voedselbos ontstaat een nieuwe drager voor het landgoed, die ook bijdraagt aan biodiversiteit en recreatieve waarde VOOR JURRIAAN.
        </p>
        <div className="pt-8">
          <Link href={siteConfig.links.readMore} className="px-8 py-4 border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white transition-colors font-serif">
            Lees meer over onze beweegredenen
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm text-foreground/40">
        <p>&copy; {new Date().getFullYear()} Voedselbos. Alle rechten voorbehouden.</p>
      </footer>
    </main>
  );
}
