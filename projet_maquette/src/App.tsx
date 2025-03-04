import React, { useState, useEffect } from 'react';
import { ShoppingBag, Phone, Info, ChevronUp } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll to top button when user scrolls down 300px
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="font-sans bg-orange-50 text-gray-800">
      {/* Header */}
      <header className="fixed w-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <ShoppingBag className="mr-2" size={28} />
              <h1 className="text-2xl font-bold">SportyBag</h1>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className={`font-medium hover:text-yellow-200 transition-colors ${activeSection === 'home' ? 'text-yellow-200 underline underline-offset-4' : ''}`}
                  >
                    Accueil
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('product')}
                    className={`font-medium hover:text-yellow-200 transition-colors ${activeSection === 'product' ? 'text-yellow-200 underline underline-offset-4' : ''}`}
                  >
                    Produit
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className={`font-medium hover:text-yellow-200 transition-colors ${activeSection === 'contact' ? 'text-yellow-200 underline underline-offset-4' : ''}`}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-orange-50 to-amber-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">Le Sac de Sport Ultime</h2>
                <p className="text-xl mb-8 text-gray-700">
                  Découvrez notre sac de sport révolutionnaire, conçu pour les athlètes exigeants qui ne font aucun compromis sur la qualité et le style.
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => scrollToSection('product')}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-105"
                  >
                    Découvrir
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-white hover:bg-gray-100 text-orange-500 font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-105 border-2 border-orange-500"
                  >
                    Nous contacter
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Sac de sport premium" 
                  className="rounded-lg shadow-2xl transform hover:rotate-2 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section id="product" className="min-h-screen py-20 bg-gradient-to-b from-amber-100 to-orange-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-orange-600 mb-16">Notre Produit Phare</h2>
            
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <img 
                  src="https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Sac de sport détails" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-orange-500 mb-4">SportyBag Pro</h3>
                <p className="text-lg mb-6">
                  Notre sac de sport premium combine fonctionnalité, durabilité et style. Conçu avec des matériaux de haute qualité et une attention particulière aux détails.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-orange-500 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Matériau imperméable et résistant aux déchirures</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-orange-500 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Compartiment séparé pour chaussures et vêtements humides</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-orange-500 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Poches multiples pour une organisation optimale</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-orange-500 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Bretelles rembourrées ergonomiques</span>
                  </li>
                </ul>
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-orange-600 mr-4">89,99 €</span>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all transform hover:scale-105">
                    En savoir plus
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-orange-500 mb-2">Durable</h3>
                <p className="text-gray-600">Conçu pour durer avec des matériaux de haute qualité et des coutures renforcées.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-orange-500 mb-2">Spacieux</h3>
                <p className="text-gray-600">Capacité généreuse avec des compartiments intelligemment organisés.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-orange-500 mb-2">Personnalisable</h3>
                <p className="text-gray-600">Disponible en plusieurs coloris et avec options de personnalisation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20 bg-gradient-to-b from-orange-100 to-red-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-orange-600 mb-16">Contactez-nous</h2>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h3 className="text-2xl font-bold text-orange-500 mb-6">Nous sommes à votre écoute</h3>
                <p className="text-lg mb-8 text-gray-700">
                  Vous avez des questions sur notre sac de sport ou besoin d'informations supplémentaires ? 
                  Notre équipe est disponible pour vous aider.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-orange-500 p-2 rounded-full mr-4">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Téléphone</h4>
                      <p className="text-gray-600">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 p-2 rounded-full mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Email</h4>
                      <p className="text-gray-600">contact@sportybag.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 p-2 rounded-full mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Adresse</h4>
                      <p className="text-gray-600">123 Avenue du Sport, 75001 Paris, France</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="font-bold text-gray-800 mb-4">Suivez-nous</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-orange-500 mb-6">Envoyez-nous un message</h3>
                <form>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Votre email"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Sujet</label>
                    <select 
                      id="subject" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="info">Demande d'informations</option>
                      <option value="support">Support technique</option>
                      <option value="partnership">Partenariat</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Votre message"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105"
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-orange-600 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <ShoppingBag className="mr-2" size={24} />
                <h2 className="text-xl font-bold">SportyBag</h2>
              </div>
              <p className="max-w-xs text-orange-100">
                Le sac de sport ultime pour les athlètes qui ne font aucun compromis sur la qualité et le style.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Liens rapides</h3>
                <ul className="space-y-2">
                  <li><button onClick={() => scrollToSection('home')} className="text-orange-200 hover:text-white transition-colors">Accueil</button></li>
                  <li><button onClick={() => scrollToSection('product')} className="text-orange-200 hover:text-white transition-colors">Produit</button></li>
                  <li><button onClick={() => scrollToSection('contact')} className="text-orange-200 hover:text-white transition-colors">Contact</button></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Légal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-orange-200 hover:text-white transition-colors">Conditions d'utilisation</a></li>
                  <li><a href="#" className="text-orange-200 hover:text-white transition-colors">Politique de confidentialité</a></li>
                  <li><a href="#" className="text-orange-200 hover:text-white transition-colors">Mentions légales</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-orange-200">+33 1 23 45 67 89</li>
                  <li className="text-orange-200">contact@sportybag.com</li>
                  <li className="text-orange-200">123 Avenue du Sport, Paris</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-orange-500 mt-8 pt-8 text-center text-orange-200">
            <p>&copy; 2025 SportyBag. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110 z-10"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;