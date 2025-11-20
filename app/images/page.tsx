import fs from 'fs';
import path from 'path';
import Link from 'next/link';

// This function runs at build time to list images
async function getImages() {
    const imagesDir = path.join(process.cwd(), 'public/images');
    try {
        const files = await fs.promises.readdir(imagesDir);
        return files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
    } catch (error) {
        return [];
    }
}

export default async function ImagesPage() {
    const images = await getImages();

    return (
        <main className="min-h-screen p-6">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-serif text-accent-primary">Afbeeldingen</h1>
                    <Link href="/" className="text-sm underline">Terug naar Home</Link>
                </div>

                <p className="text-foreground/60">
                    Plaats afbeeldingen in de <code>public/images</code> map. Ze verschijnen hier automatisch.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {images.length > 0 ? (
                        images.map((image) => (
                            <div key={image} className="space-y-2">
                                <div className="aspect-square relative bg-white/20 border border-foreground/10 rounded-lg overflow-hidden">
                                    {/* We use standard img tag here for simplicity in this overview page, 
                      but in production you'd use next/image with unoptimized=true */}
                                    <img
                                        src={`/voedselbos/images/${image}`}
                                        alt={image}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <p className="text-xs truncate font-mono">{image}</p>
                                <p className="text-xs text-foreground/40 select-all">/images/{image}</p>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-12 text-center border-2 border-dashed border-foreground/10 rounded-lg">
                            <p>Geen afbeeldingen gevonden in public/images</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
