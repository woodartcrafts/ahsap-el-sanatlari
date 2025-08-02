import Image from 'next/image'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ShoppingCart, Heart, Share2, Menu, X, ArrowDown, Star, Award, Users, Clock } from 'lucide-react'

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Ahşap Dekoratif Kutu",
      price: "₺150",
      image: "/product1.jpg",
      description: "El yapımı ahşap dekoratif kutu",
      rating: 4.8,
      reviews: 24
    },
    {
      id: 2,
      name: "Ahşap Çerçeve",
      price: "₺200",
      image: "/product2.jpg", 
      description: "Özel tasarım ahşap çerçeve",
      rating: 4.9,
      reviews: 31
    },
    {
      id: 3,
      name: "Ahşap Mumluk",
      price: "₺120",
      image: "/product3.jpg",
      description: "Dekoratif ahşap mumluk",
      rating: 4.7,
      reviews: 18
    },
    {
      id: 4,
      name: "Ahşap Tepsi",
      price: "₺180",
      image: "/product4.jpg",
      description: "El yapımı ahşap tepsi",
      rating: 4.6,
      reviews: 22
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 hero-title">Ahşap El Sanatları</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-navy-600 transition-colors nav-link">Ana Sayfa</a>
              <a href="#products" className="text-gray-600 hover:text-navy-600 transition-colors nav-link">Ürünler</a>
              <a href="#about" className="text-gray-600 hover:text-navy-600 transition-colors nav-link">Hakkımızda</a>
              <a href="/blog" className="text-gray-600 hover:text-navy-600 transition-colors nav-link">Blog</a>
              <a href="#contact" className="text-gray-600 hover:text-navy-600 transition-colors nav-link">İletişim</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-navy-600 transition-colors">
                <Heart size={20} />
              </button>
              <button className="p-2 text-gray-600 hover:text-navy-600 transition-colors">
                <ShoppingCart size={20} />
              </button>
              <button className="md:hidden p-2 text-gray-600 hover:text-navy-600 transition-colors">
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Rustic Workshop Background */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Rustic Workshop Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-800/70 to-blue-900/80">
          {/* Workshop Pattern Overlay */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='workshop' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Crect width='100' height='100' fill='none'/%3E%3Cpath d='M20 20 L80 20 L80 80 L20 80 Z' stroke='%233b4bdb' stroke-width='2' fill='none' opacity='0.3'/%3E%3Ccircle cx='50' cy='50' r='3' fill='%233b4bdb' opacity='0.4'/%3E%3Cpath d='M10 10 L90 90 M90 10 L10 90' stroke='%233b4bdb' stroke-width='1' opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23workshop)'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
          
          {/* Wood Grain Texture */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='wood' x='0' y='0' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Crect width='60' height='60' fill='%233b4bdb' opacity='0.1'/%3E%3Cpath d='M0 10 L60 10 M0 20 L60 20 M0 30 L60 30 M0 40 L60 40 M0 50 L60 50' stroke='%233b4bdb' stroke-width='1' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='60' height='60' fill='url(%23wood)'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Floating Workshop Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-navy-600/30 rounded-full border-2 border-navy-500/50"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-12 h-12 bg-blue-500/30 rounded-full border-2 border-blue-400/50"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <div className="w-20 h-20 bg-navy-400/30 rounded-full border-2 border-navy-300/50"></div>
        </div>
        
        {/* Workshop Tools Icons */}
        <div className="absolute top-1/4 right-1/4 text-navy-600/40 text-6xl animate-pulse">🔨</div>
        <div className="absolute bottom-1/4 left-1/4 text-navy-600/40 text-5xl animate-pulse" style={{animationDelay: '1s'}}>🪚</div>
        <div className="absolute top-1/3 left-1/3 text-navy-600/40 text-4xl animate-pulse" style={{animationDelay: '2s'}}>🔧</div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-navy-100/90 backdrop-blur-sm text-navy-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award size={16} />
              <span>20+ Yıl Deneyim</span>
            </div>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl hero-title">
            El Yapımı <span className="text-navy-300 bg-gradient-to-r from-navy-300 to-blue-300 bg-clip-text text-transparent">Ahşap</span> Sanatları
          </h2>
          
          <p className="text-xl md:text-2xl text-navy-100 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Geleneksel atölyemizde özenle işlenen ahşap el sanatları ürünlerimizle 
            evinize doğal güzellik katın. Her parça benzersiz karaktere sahiptir.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary text-lg px-8 py-4 bg-navy-600 hover:bg-navy-700 border-2 border-navy-500 btn">
              Ürünleri İncele
            </button>
            <button className="btn-secondary text-lg px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/30 btn">
              Atölyemizi Ziyaret Et
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-navy-300 mb-2">500+</div>
              <div className="text-navy-100">Mutlu Müşteri</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-navy-300 mb-2">1000+</div>
              <div className="text-navy-100">El Yapımı Ürün</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-navy-300 mb-2">20+</div>
              <div className="text-navy-100">Yıl Deneyim</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-navy-300" size={24} />
        </div>
      </section>

      {/* Products Section with Parallax */}
      <section id="products" className="py-20 bg-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-800 mb-6 section-title">
              Özel Tasarım <span className="text-navy-600">Ürünlerimiz</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Geleneksel el sanatları tekniklerini modern tasarımlarla birleştiren özel koleksiyonumuz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden card-hover transform hover:scale-105 transition-all duration-500">
                <div className="h-48 bg-gradient-to-br from-navy-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">🪵</div>
                  <div className="absolute top-4 right-4 bg-navy-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    El Yapımı
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 product-title">{product.name}</h4>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-navy-600">{product.price}</span>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-navy-600 transition-colors">
                        <Heart size={16} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-navy-600 transition-colors">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                  <button className="w-full mt-4 btn-primary btn">
                    Satın Al
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Parallax */}
      <section id="about" className="py-20 relative overflow-hidden">
        {/* Background Parallax */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-50 to-blue-100 transform scale-110"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 bg-navy-100 text-navy-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Clock size={16} />
                  <span>20+ Yıl Deneyim</span>
                </div>
              </div>
              
              <h3 className="text-5xl font-bold text-gray-800 mb-6 section-title">
                Hakkımızda
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                20 yılı aşkın deneyimimizle, geleneksel el sanatları tekniklerini 
                modern tasarımlarla birleştirerek özel ahşap ürünler üretiyoruz.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Her ürünümüz özenle seçilmiş ahşaplardan, el yapımı olarak üretilir 
                ve benzersiz karaktere sahiptir. Müşteri memnuniyeti bizim önceliğimizdir.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                  <Users className="w-8 h-8 text-navy-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-navy-600">500+</div>
                  <div className="text-gray-600 text-sm">Mutlu Müşteri</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                  <Award className="w-8 h-8 text-navy-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-navy-600">1000+</div>
                  <div className="text-gray-600 text-sm">Ürün</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                  <Clock className="w-8 h-8 text-navy-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-navy-600">20+</div>
                  <div className="text-gray-600 text-sm">Yıl Deneyim</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-navy-100 to-blue-200 rounded-3xl p-8 shadow-2xl">
              <div className="text-8xl text-center text-navy-600 mb-6">🏺</div>
              <h4 className="text-3xl font-bold text-center text-gray-800 mb-4">
                El Sanatları Geleneği
              </h4>
              <p className="text-gray-600 text-center text-lg leading-relaxed">
                Geleneksel tekniklerle modern tasarımı buluşturan 
                özel koleksiyonumuzu keşfedin. Her parça bir sanat eseridir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-800 mb-6 section-title">
              Son <span className="text-navy-600">Blog Yazılarımız</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ahşap el sanatları hakkında bilgilendirici yazılar ve teknikler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-navy-50 to-blue-100 rounded-2xl p-6 card-hover">
              <div className="text-4xl mb-4">📝</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3 product-title">
                Ahşap El Sanatlarının Tarihi
              </h4>
              <p className="text-gray-600 mb-4">
                Türk el sanatlarında ahşap işçiliğinin binlerce yıllık tarihi...
              </p>
              <a href="/blog" className="text-navy-600 hover:text-navy-700 font-semibold">
                Devamını Oku →
              </a>
            </div>
            <div className="bg-gradient-to-br from-navy-50 to-blue-100 rounded-2xl p-6 card-hover">
              <div className="text-4xl mb-4">🔧</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3 product-title">
                Ahşap İşleme Teknikleri
              </h4>
              <p className="text-gray-600 mb-4">
                Ahşap işleme sanatına yeni başlayanlar için temel teknikler...
              </p>
              <a href="/blog" className="text-navy-600 hover:text-navy-700 font-semibold">
                Devamını Oku →
              </a>
            </div>
            <div className="bg-gradient-to-br from-navy-50 to-blue-100 rounded-2xl p-6 card-hover">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3 product-title">
                Ahşap Bakım Yöntemleri
              </h4>
              <p className="text-gray-600 mb-4">
                Ahşap ürünlerinizin uzun yıllar güzel kalması için bakım...
              </p>
              <a href="/blog" className="text-navy-600 hover:text-navy-700 font-semibold">
                Devamını Oku →
              </a>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/blog" className="btn-primary text-lg px-8 py-4 btn">
              Tüm Blog Yazılarını Gör
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h3 className="text-5xl font-bold text-center text-gray-800 mb-12 section-title">
            İletişim
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-3xl font-semibold text-gray-800 mb-6 product-title">
                Bizimle İletişime Geçin
              </h4>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg">
                  <Phone className="text-navy-600" size={24} />
                  <div>
                    <div className="font-semibold text-gray-800">Telefon</div>
                    <div className="text-gray-600">+90 555 123 45 67</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg">
                  <Mail className="text-navy-600" size={24} />
                  <div>
                    <div className="font-semibold text-gray-800">E-posta</div>
                    <div className="text-gray-600">info@ahsapelsanatlari.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg">
                  <MapPin className="text-navy-600" size={24} />
                  <div>
                    <div className="font-semibold text-gray-800">Adres</div>
                    <div className="text-gray-600">İstanbul, Türkiye</div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h5 className="text-xl font-semibold text-gray-800 mb-4">Sosyal Medya</h5>
                <div className="flex space-x-4">
                  <a href="#" className="p-4 bg-navy-600 text-white rounded-xl hover:bg-navy-700 transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="p-4 bg-navy-600 text-white rounded-xl hover:bg-navy-700 transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="p-4 bg-navy-600 text-white rounded-xl hover:bg-navy-700 transition-colors">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-navy-50 to-blue-100 rounded-2xl p-8 shadow-xl">
              <h4 className="text-3xl font-semibold text-gray-800 mb-6 product-title">
                Mesaj Gönderin
              </h4>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Adınız" 
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-600 text-lg"
                />
                <input 
                  type="email" 
                  placeholder="E-posta" 
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-600 text-lg"
                />
                <textarea 
                  placeholder="Mesajınız" 
                  rows={4}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-600 text-lg"
                ></textarea>
                <button type="submit" className="w-full btn-primary text-lg py-4 btn">
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4 product-title">Ahşap El Sanatları</h4>
              <p className="text-gray-300 leading-relaxed">
                El yapımı özel tasarım ahşap ürünler. 20 yıllık deneyimimizle 
                geleneksel teknikleri modern tasarımlarla birleştiriyoruz.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-lg nav-link">Ürünler</h5>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-navy-400 transition-colors">Dekoratif Ürünler</a></li>
                <li><a href="#" className="hover:text-navy-400 transition-colors">Mobilya</a></li>
                <li><a href="#" className="hover:text-navy-400 transition-colors">Hediyelik Eşyalar</a></li>
                <li><a href="#" className="hover:text-navy-400 transition-colors">Özel Tasarım</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-lg nav-link">Hizmetler</h5>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-navy-400 transition-colors">Özel Tasarım</a></li>
                <li><a href="#" className="hover:text-navy-400 transition-colors">Kurumsal Hediye</a></li>
                <li><a href="#" className="hover:text-navy-400 transition-colors">Sipariş</a></li>
                <li><a href="#" className="hover:text-navy-400 transition-colors">Danışmanlık</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-lg nav-link">İletişim</h5>
              <ul className="space-y-3 text-gray-300">
                <li>+90 555 123 45 67</li>
                <li>info@ahsapelsanatlari.com</li>
                <li>İstanbul, Türkiye</li>
                <li>Pazartesi - Cumartesi</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Ahşap El Sanatları. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
