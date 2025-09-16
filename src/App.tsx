import React, { useState } from 'react';
import { Menu, X, Scale, Shield, FileText, Phone, Mail, MapPin, Clock, Award, Users, Briefcase, CheckCircle } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img 
                src="/Logo_Salvio-Silva-Advogado - Blue H.webp" 
                alt="Dr. Salvio Silva - Advocacia Criminal" 
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-[#00348f] transition-colors font-medium">Início</a>
              <a href="#about" className="text-gray-700 hover:text-[#00348f] transition-colors font-medium">Sobre</a>
              <a href="#services" className="text-gray-700 hover:text-[#00348f] transition-colors font-medium">Serviços</a>
              <a href="#contact" className="text-gray-700 hover:text-[#00348f] transition-colors font-medium">Contato</a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#00348f]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-[#00348f] transition-colors font-medium">Início</a>
                <a href="#about" className="text-gray-700 hover:text-[#00348f] transition-colors font-medium">Sobre</a>
                <a href="#services" className="text-gray-700 hover:text-[#00348f] transition-colors font-medium">Serviços</a>
                <a href="#contact" className="text-gray-700 hover:text-[#00348f] transition-colors font-medium">Contato</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-[#002758] text-white py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-8xl md:text-8xl font-bold mb-6 leading-tight">
              Defesa Criminal
              <span className="block text-[#FFD700]">Especializada</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Entre em contato
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#00348f] transition-all duration-300">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Dr. Salvio Silva
                <span className="block text-[#00348f] text-xl font-normal mt-2">OAB/SP 123.456</span>
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Advogado especialista em direito criminal com mais de 15 anos de experiência, 
                formado pela Universidade de São Paulo (USP) e pós-graduado em Ciências Criminais 
                pela PUC-SP.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-[#FFD700]" />
                  <span className="text-gray-700">15+ Anos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-[#FFD700]" />
                  <span className="text-gray-700">500+ Clientes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="h-6 w-6 text-[#FFD700]" />
                  <span className="text-gray-700">1000+ Casos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#FFD700]" />
                  <span className="text-gray-700">95% Sucesso</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h4 className="text-2xl font-bold text-white mb-6">Formação & Especialização</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-[#FFD700] pl-4">
                  <h5 className="text-[#FFD700] font-semibold">Graduação</h5>
                  <p className="text-gray-300">Direito - Universidade de São Paulo (USP)</p>
                </div>
                <div className="border-l-4 border-[#FFD700] pl-4">
                  <h5 className="text-[#FFD700] font-semibold">Pós-Graduação</h5>
                  <p className="text-gray-300">Ciências Criminais - PUC-SP</p>
                </div>
                <div className="border-l-4 border-[#FFD700] pl-4">
                  <h5 className="text-[#FFD700] font-semibold">Especialização</h5>
                  <p className="text-gray-300">Direito Penal e Processual Penal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Áreas de Atuação</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Especializado em todas as esferas do direito criminal, oferecendo defesa técnica de excelência.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Crimes Contra a Vida",
                description: "Defesa em casos de homicídio, lesão corporal, aborto e outros crimes contra a vida."
              },
              {
                icon: FileText,
                title: "Crimes Patrimoniais",
                description: "Furto, roubo, estelionato, apropriação indébita e demais crimes contra o patrimônio."
              },
              {
                icon: Scale,
                title: "Crimes Tributários",
                description: "Sonegação fiscal, crimes contra a ordem tributária e regularização fiscal."
              },
              {
                icon: Users,
                title: "Crimes de Trânsito",
                description: "Homicídio culposo, lesão corporal culposa, embriaguez ao volante e habilitação cassada."
              },
              {
                icon: Briefcase,
                title: "Crimes Econômicos",
                description: "Lavagem de dinheiro, crimes do sistema financeiro e contra a economia popular."
              },
              {
                icon: Award,
                title: "Recursos e Habeas Corpus",
                description: "Interposição de recursos em todas as instâncias e impetração de habeas corpus."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <service.icon className="h-12 w-12 text-[#00348f] mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-4">
                  <span className="inline-block w-12 h-1 bg-[#FFD700] rounded"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#00348f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Precisa de Assistência Jurídica Criminal?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato para uma consulta gratuita e saiba como podemos defender seus direitos.
          </p>
          <button className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
            ENTRE EM CONTATO
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-white mb-6">Entre em Contato</h3>
            <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
              Estamos prontos para atendê-lo com a excelência que seu caso merece. 
              Entre em contato conosco para agendar sua consulta.
            </p>
            
            {/* WhatsApp CTA destacado */}
            <div className="bg-green-600 p-8 rounded-lg mb-12 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <Phone className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">WhatsApp</h4>
              <p className="text-3xl font-bold text-white mb-2">(93) 99224-1438</p>
              <p className="text-green-100 mb-4">Atendimento imediato</p>
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                Chamar no WhatsApp
              </button>
            </div>
            
            {/* Outros contatos */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
                <Mail className="h-8 w-8 text-[#FFD700] mx-auto mb-4" />
                <h5 className="text-white font-semibold text-lg mb-2">E-mail</h5>
                <p className="text-white font-medium mb-1">advsalviosilva@gmail.com</p>
                <p className="text-gray-400 text-sm">Atendimento Rápido</p>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
                <MapPin className="h-8 w-8 text-[#FFD700] mx-auto mb-4" />
                <h5 className="text-white font-semibold text-lg mb-2">Escritório</h5>
                <p className="text-white font-medium mb-1">Av. Paulista, 1000</p>
                <p className="text-gray-400 text-sm">Santarém - PA</p>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
                <Clock className="h-8 w-8 text-[#FFD700] mx-auto mb-4" />
                <h5 className="text-white font-semibold text-lg mb-2">Horário</h5>
                <p className="text-white font-medium mb-1">Seg-Sex: 8h às 18h</p>
                <p className="text-gray-400 text-sm">Emergências 24h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/Logo_Salvio-Silva-Advogado - Blue H.webp" 
                  alt="Dr. Salvio Silva - Advocacia Criminal" 
                  className="h-10 w-auto"
                />
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Links Rápidos</h5>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-[#FFD700] transition-colors">Início</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-[#FFD700] transition-colors">Sobre</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-[#FFD700] transition-colors">Serviços</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-[#FFD700] transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Informações Legais</h5>
              <p className="text-gray-400 text-sm mb-2">OAB/PA 39.968</p>
              <p className="text-gray-400 text-sm mb-2">Advogado Criminalista Santarém - PA</p>
              <p className="text-gray-400 text-sm">
                Este site segue as diretrizes do Código de Ética e Disciplina da OAB.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Dr. Salvio Silva - Advocacia Criminal. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;