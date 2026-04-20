import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./ui/Button";




export default function Header({ onOpenToolsModal }) { // Recebe a função como prop
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
const handleScroll = (e, targetId) => {
  e.preventDefault()
  const element = document.getElementById(targetId)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
}
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Educação", href: "/educacao", isExternal: true },
    { label: "Ferramentas", href: "#", isModal: true },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contato", href: "#contato" },
  ];

  const handleNavClick = (e, href, isModal = false, isExternal = false) => {
    if (isExternal) {
      setIsMobileMenuOpen(false);
      return; // deixa o Link do react-router agir
    }
    e.preventDefault();

    if (isModal) {
      onOpenToolsModal();
      setIsMobileMenuOpen(false);
      return;
    }

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark-900/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <a 
            href="#" 
            className="flex items-center gap-3 group"
            onClick={(e) => handleNavClick(e, "#")}
          >
            <img src="/Logo Iuptec ciano e amarelo claro.png" alt="Iuptec" className="h-14" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.isExternal ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="relative group cursor-pointer"
                >
                  <span className="text-white/80 hover:text-iuptec-teal transition-colors duration-300 font-medium">
                    {item.label}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-iuptec-teal transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.isModal)}
                  className="relative group cursor-pointer"
                >
                  <span className="text-white/80 hover:text-iuptec-teal transition-colors duration-300 font-medium">
                    {item.label}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-iuptec-teal transition-all duration-300 group-hover:w-full" />
                </a>
              )
            )}
          </nav>

          <Button
            className="flex flex-col sm:flex-row gap-4"
            variant="animated"
            onClick={() => window.dispatchEvent(new CustomEvent('openChat'))}
          >
            Fale Conosco
          </Button>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden pt-20 bg-dark-950">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col gap-4">
              {navItems.map((item) =>
                item.isExternal ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 text-lg font-medium text-white/90 hover:text-iuptec-teal transition-colors text-left"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={(e) => {
                      if (item.isModal) {
                        onOpenToolsModal();
                      } else {
                        handleNavClick(e, item.href, item.isModal);
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    className="py-3 text-lg font-medium text-white/90 hover:text-iuptec-teal transition-colors text-left"
                  >
                    {item.label}
                  </button>
                )
              )}
              <Button
                className="flex flex-col sm:flex-row gap-4"
                variant="animated"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('openChat'));
                }}
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}