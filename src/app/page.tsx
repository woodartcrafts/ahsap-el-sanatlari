import Image from 'next/image'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ShoppingCart, Heart, Share2, Menu, X } from 'lucide-react'

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Ahşap Dekoratif Kutu",
      price: "₺150",
      image: "/product1.jpg",
      description: "El yapımı ahşap dekoratif kutu"
    },
    {
      id: 2,
      name: "Ahşap Çerçeve",
      price: "₺200",
      image: "/product2.jpg", 
      description: "Özel tasarım ahşap çerçeve"
    },
    {
      id: 3,
      name: "Ahşap Mumluk",
      price: "₺120",
      image: "/product3.jpg",
      description: "Dekoratif ahşap mumluk"
    },
    {
      id: 4,
      name: "Ahşap Tepsi",
      price: "₺180",
      image: "/product4.jpg",
      description: "El yapımı ahşap tepsi"
    }
  ]

  return (
    <div className="min-h-screen rustic-bg">
      {/* Header */}
      <header className="rustic-overlay shadow-lg sticky top-0 z-50 border-b border-amber-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">Ahşap El Sanatları</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-amber-600 transition-colors">Ana Sayfa</a>
              <a href="#products" className="text-gray-600 hover:text-amber-600 transition-colors">Ürünler</a>
              <a href="#about" className="text-gray-600 hover:text-amber-600 transition-colors">Hakkımızda</a>
              <a href="#contact" className="text-gray-600 hover:text-amber-600 transition-colors">İletişim</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-amber-600 transition-colors">
                <Heart size={20} />
              </button>
              <button className="p-2 text-gray-600 hover:text-amber-600 transition-colors">
                <ShoppingCart size={20} />
              </button>
              <button className="md:hidden p-2 text-gray-600 hover:text-amber-600 transition-colors">
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 hero-rustic">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            El Yapımı <span className="text-amber-600">Ahşap</span> Sanatları
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Özel tasarım ahşap el sanatları ürünlerimizle evinize doğal güzellik katın. 
            Her parça özenle el yapımıdır.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Ürünleri İncele
            </button>
            <button className="btn-secondary">
              Hakkımızda
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 rustic-overlay">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Özel Tasarım Ürünlerimiz
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden card-hover border border-amber-200">
                <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
                  <div className="text-4xl">🪵</div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h4>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-amber-600 transition-colors">
                        <Heart size={16} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-amber-600 transition-colors">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                  <button className="w-full mt-4 btn-primary">
                    Satın Al
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 rustic-overlay">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                Hakkımızda
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                20 yılı aşkın deneyimimizle, geleneksel el sanatları tekniklerini 
                modern tasarımlarla birleştirerek özel ahşap ürünler üretiyoruz.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Her ürünümüz özenle seçilmiş ahşaplardan, el yapımı olarak üretilir 
                ve benzersiz karaktere sahiptir.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">500+</div>
                  <div className="text-gray-600">Mutlu Müşteri</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">1000+</div>
                  <div className="text-gray-600">Ürün</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">20+</div>
                  <div className="text-gray-600">Yıl Deneyim</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl p-8">
              <div className="text-6xl text-center text-amber-600 mb-4">🏺</div>
              <h4 className="text-2xl font-bold text-center text-gray-800 mb-4">
                El Sanatları Geleneği
              </h4>
              <p className="text-gray-600 text-center">
                Geleneksel tekniklerle modern tasarımı buluşturan 
                özel koleksiyonumuzu keşfedin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 rustic-overlay">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
            İletişim
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-6">
                Bizimle İletişime Geçin
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="text-amber-600" size={20} />
                  <span className="text-gray-600">+90 555 123 45 67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-amber-600" size={20} />
                  <span className="text-gray-600">info@ahsapelsanatlari.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-amber-600" size={20} />
                  <span className="text-gray-600">İstanbul, Türkiye</span>
                </div>
              </div>
              <div className="mt-8">
                <h5 className="text-lg font-semibold text-gray-800 mb-4">Sosyal Medya</h5>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="p-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="p-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-8">
              <h4 className="text-2xl font-semibold text-gray-800 mb-6">
                Mesaj Gönderin
              </h4>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Adınız" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
                <input 
                  type="email" 
                  placeholder="E-posta" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
                <textarea 
                  placeholder="Mesajınız" 
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                ></textarea>
                <button type="submit" className="w-full btn-primary">
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Ahşap El Sanatları</h4>
              <p className="text-gray-300">
                El yapımı özel tasarım ahşap ürünler.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Ürünler</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Dekoratif Ürünler</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Mobilya</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Hediyelik Eşyalar</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Hizmetler</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Özel Tasarım</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Kurumsal Hediye</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Sipariş</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">İletişim</h5>
              <ul className="space-y-2 text-gray-300">
                <li>+90 555 123 45 67</li>
                <li>info@ahsapelsanatlari.com</li>
                <li>İstanbul, Türkiye</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Ahşap El Sanatları. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}