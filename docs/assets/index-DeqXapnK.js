(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const x=`<section id="seccion-about-hero"></section>\r
<section id="seccion-metodologia"></section>\r
<section id="seccion-equipo"></section>\r
<section id="seccion-premios"></section>\r
<div id="common-components"></div>`,b=`<section id="seccion-aviso-legal" class="py-16 px-4 md:px-8 lg:px-20">\r
</section>\r
<div id="common-components"></div>`,f=`<section id="seccion-contacto-principal"></section>\r
<div id="common-components"></div>`,h=`<section class="min-h-screen bg-[#f5f0e6] flex items-center justify-center px-4">\r
    <div class="text-center max-w-2xl mx-auto">\r
\r
        <div class="mb-8">\r
            <h1 class="text-9xl md:text-[12rem] font-black text-gray-900 leading-none">404</h1>\r
        </div>\r
\r
        <div class="mb-8">\r
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">\r
                Página no encontrada\r
            </h2>\r
            <p class="text-gray-600 text-lg max-w-md mx-auto">\r
                Lo sentimos, la página que buscas no existe o ha sido movida.\r
            </p>\r
        </div>\r
\r
        <div class="mb-8 max-w-xs mx-auto">\r
            <svg class="w-full h-auto" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                <rect x="40" y="50" width="120" height="8" rx="4" fill="#E5E7EB" />\r
                <rect x="40" y="70" width="80" height="8" rx="4" fill="#E5E7EB" />\r
                <rect x="40" y="90" width="100" height="8" rx="4" fill="#E5E7EB" />\r
                <circle cx="100" cy="25" r="20" fill="#F3F4F6" stroke="#D1D5DB" stroke-width="2" />\r
                <circle cx="95" cy="20" r="2" fill="#9CA3AF" />\r
                <circle cx="105" cy="20" r="2" fill="#9CA3AF" />\r
                <path d="M90 35 Q100 45 110 35" stroke="#9CA3AF" stroke-width="2" fill="none" />\r
            </svg>\r
        </div>\r
\r
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">\r
            <a href="/"\r
                class="inline-block px-6 py-3 bg-[#f5f0e6] text-black font-semibold rounded border border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition duration-200">\r
                Volver al Inicio\r
            </a>\r
\r
            <a href="/contacto"\r
                class="inline-block px-6 py-3 bg-black text-white font-semibold rounded border border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition duration-200">\r
                Contactar Soporte\r
            </a>\r
        </div>\r
\r
        <div class="mt-8 pt-6 border-t border-gray-300">\r
            <p class="text-gray-500 text-sm mb-3">También puedes visitar:</p>\r
            <div class="flex justify-center gap-6 text-sm">\r
                <a href="/services" class="text-orange-500 hover:underline">Servicios</a>\r
                <a href="/about" class="text-orange-500 hover:underline">Sobre Nosotros</a>\r
                <a href="/contacto" class="text-orange-500 hover:underline">Contacto</a>\r
            </div>\r
        </div>\r
\r
    </div>\r
</section>\r
\r
<div id="common-components"></div>`,y=`<div id="hero"></div>\r
<div id="seccion-estrategia"></div>\r
<div id="seccion-servicios"></div>\r
<div id="seccion-contacto"></div>\r
<div id="common-components"></div>`,w=`<section id="seccion-politica" class="py-16 px-4 md:px-8 lg:px-20">\r
</section>\r
<div id="common-components"></div>`,k=`<section id="seccion-servicios-hero"></section>\r
<section id="seccion-servicios-ofertas"></section>\r
<section id="seccion-contacto-formulario"></section>\r
<div id="common-components"></div>`,_=`<footer class="relative bg-black text-white overflow-hidden">\r
    <!-- Gradiente superior decorativo -->\r
    <div class="h-4 w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500"></div>\r
\r
    <!-- Fondos decorativos sutiles -->\r
    <div class="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>\r
    <div class="absolute top-10 right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"></div>\r
\r
    <div class="relative max-w-7xl mx-auto px-6 py-12">\r
        <!-- Contenido principal -->\r
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">\r
            <!-- Columna 1: Empresa -->\r
            <div class="space-y-4">\r
                <div class="flex items-center gap-3 mb-4">\r
                    <!-- Logo placeholder - puedes reemplazar con tu logo -->\r
                    <div\r
                        class="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">\r
                        <span class="text-white font-bold text-lg">M</span>\r
                    </div>\r
                    <h2 class="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">\r
                        Mentema\r
                    </h2>\r
                </div>\r
\r
                <p class="text-gray-300 text-sm leading-relaxed">\r
                    Agencia creativa integral especializada en transformar ideas en marcas memorables con estrategia,\r
                    diseño y tecnología.\r
                </p>\r
\r
                <!-- Información de contacto -->\r
                <div class="space-y-2 pt-2">\r
                    <div class="flex items-center gap-2 text-gray-400 text-sm">\r
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />\r
                        </svg>\r
                        <span>Calle del Éxito, 5 – 30001, Murcia</span>\r
                    </div>\r
                    <div class="flex items-center gap-2 text-gray-400 text-sm">\r
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />\r
                        </svg>\r
                        <a href="mailto:info@mentema.agency"\r
                            class="text-blue-400 hover:text-blue-300 transition-colors duration-300">\r
                            info@mentema.agency\r
                        </a>\r
                    </div>\r
                    <div class="flex items-center gap-2 text-gray-400 text-sm">\r
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />\r
                        </svg>\r
                        <span>+34 968 123 456</span>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <!-- Columna 2: Servicios -->\r
            <div class="space-y-4">\r
                <h3 class="text-lg font-semibold text-white mb-4">Servicios</h3>\r
                <ul class="space-y-3">\r
                    <li>\r
                        <a href="/services"\r
                            class="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300">\r
                            <div\r
                                class="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-125 transition-transform duration-300">\r
                            </div>\r
                            <span class="group-hover:translate-x-1 transition-transform duration-300">Branding</span>\r
                        </a>\r
                    </li>\r
                    <li>\r
                        <a href="/services"\r
                            class="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300">\r
                            <div\r
                                class="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300">\r
                            </div>\r
                            <span class="group-hover:translate-x-1 transition-transform duration-300">Marketing</span>\r
                        </a>\r
                    </li>\r
                    <li>\r
                        <a href="/services"\r
                            class="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300">\r
                            <div\r
                                class="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:scale-125 transition-transform duration-300">\r
                            </div>\r
                            <span class="group-hover:translate-x-1 transition-transform duration-300">Social\r
                                Media</span>\r
                        </a>\r
                    </li>\r
                    <li>\r
                        <a href="/services"\r
                            class="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300">\r
                            <div\r
                                class="w-1.5 h-1.5 bg-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300">\r
                            </div>\r
                            <span class="group-hover:translate-x-1 transition-transform duration-300">Estrategia de\r
                                Contenidos</span>\r
                        </a>\r
                    </li>\r
                    <li>\r
                        <a href="/services"\r
                            class="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300">\r
                            <div\r
                                class="w-1.5 h-1.5 bg-pink-500 rounded-full group-hover:scale-125 transition-transform duration-300">\r
                            </div>\r
                            <span class="group-hover:translate-x-1 transition-transform duration-300">Diseño Web</span>\r
                        </a>\r
                    </li>\r
                </ul>\r
            </div>\r
\r
            <!-- Columna 3: Enlaces rápidos -->\r
            <div class="space-y-4">\r
                <h3 class="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>\r
                <ul class="space-y-3">\r
                    <li>\r
                        <a href="/"\r
                            class="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300">\r
                            <div\r
                                class="w-1.5 h-1.5 bg-yellow-500 rounded-full group-hover:scale-125 transition-transform duration-300">\r
                            </div>\r
                            <span class="group-hover:translate-x-1 transition-transform duration-300">Inicio</span>\r
                        </a>\r
                    </li>\r
                    <li>\r
                        <a href="/about"\r
                            class="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300">\r
                            <div\r
                                class="w-1.5 h-1.5 bg-indigo-500 rounded-full group-hover:scale-125 transition-transform duration-300">\r
                            </div>\r
                            <span class="group-hover:translate-x-1 transition-transform duration-300">Sobre\r
                                Nosotros</span>\r
                        </a>\r
                    </li>\r
                    <li>\r
                        <a href="/services"\r
                            class="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300">\r
                            <div\r
                                class="w-1.5 h-1.5 bg-teal-500 rounded-full group-hover:scale-125 transition-transform duration-300">\r
                            </div>\r
                            <span class="group-hover:translate-x-1 transition-transform duration-300">Servicios</span>\r
                        </a>\r
                    </li>\r
                    <li>\r
                        <a href="/contacto"\r
                            class="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300">\r
                            <div\r
                                class="w-1.5 h-1.5 bg-cyan-500 rounded-full group-hover:scale-125 transition-transform duration-300">\r
                            </div>\r
                            <span class="group-hover:translate-x-1 transition-transform duration-300">Contacto</span>\r
                        </a>\r
                    </li>\r
                </ul>\r
            </div>\r
\r
            <!-- Columna 4: Legal y redes -->\r
            <div class="space-y-4">\r
                <h3 class="text-lg font-semibold text-white mb-4">Legal</h3>\r
                <ul class="space-y-3 mb-6">\r
                    <li>\r
                        <a href="/avisolegal"\r
                            class="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300">\r
                            <div\r
                                class="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-125 transition-transform duration-300">\r
                            </div>\r
                            <span class="group-hover:translate-x-1 transition-transform duration-300">Aviso Legal</span>\r
                        </a>\r
                    </li>\r
                    <li>\r
                        <a href="/privacidad"\r
                            class="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300">\r
                            <div\r
                                class="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-125 transition-transform duration-300">\r
                            </div>\r
                            <span class="group-hover:translate-x-1 transition-transform duration-300">Política de\r
                                Privacidad</span>\r
                        </a>\r
                    </li>\r
                    <li>\r
                        <a href="#"\r
                            class="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300">\r
                            <div\r
                                class="w-1.5 h-1.5 bg-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300">\r
                            </div>\r
                            <span class="group-hover:translate-x-1 transition-transform duration-300">Cookies</span>\r
                        </a>\r
                    </li>\r
                </ul>\r
\r
                <!-- Redes sociales mejoradas -->\r
                <div class="space-y-3">\r
                    <h4 class="text-sm font-semibold text-gray-400">Síguenos</h4>\r
                    <div class="flex space-x-3">\r
                        <a href="#"\r
                            class="group relative p-3 bg-gray-800 hover:bg-blue-600 rounded-xl transition-all duration-300 transform hover:scale-110 hover:rotate-12">\r
                            <i\r
                                class="fab fa-behance text-white group-hover:scale-110 transition-transform duration-300"></i>\r
                            <div\r
                                class="absolute inset-0 border-2 border-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">\r
                            </div>\r
                        </a>\r
                        <a href="#"\r
                            class="group relative p-3 bg-gray-800 hover:bg-red-600 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-rotate-12">\r
                            <i\r
                                class="fab fa-youtube text-white group-hover:scale-110 transition-transform duration-300"></i>\r
                            <div\r
                                class="absolute inset-0 border-2 border-red-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">\r
                            </div>\r
                        </a>\r
                        <a href="#"\r
                            class="group relative p-3 bg-gray-800 hover:bg-pink-600 rounded-xl transition-all duration-300 transform hover:scale-110 hover:rotate-12">\r
                            <i\r
                                class="fab fa-pinterest text-white group-hover:scale-110 transition-transform duration-300"></i>\r
                            <div\r
                                class="absolute inset-0 border-2 border-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">\r
                            </div>\r
                        </a>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- Línea divisoria -->\r
        <div class="border-t border-gray-800 my-8"></div>\r
\r
        <!-- Pie inferior -->\r
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">\r
            <div class="text-center md:text-left">\r
                <span class="text-gray-400 text-sm">Copyright © 2025 Mentema Agency. Todos los derechos\r
                    reservados.</span>\r
            </div>\r
\r
            <div class="flex items-center gap-4 text-gray-400 text-sm">\r
                <span class="flex items-center gap-2">\r
                    <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>\r
                    Disponible para nuevos proyectos\r
                </span>\r
            </div>\r
        </div>\r
    </div>\r
</footer>`,j=`<section id="hero" class="relative bg-[#fef7ed] min-h-[90vh] flex items-center justify-center overflow-hidden">\r
    <div class="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-yellow-50/30 to-pink-50/50"></div>\r
\r
    <div class="absolute top-10 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl"></div>\r
    <div class="absolute bottom-20 right-20 w-32 h-32 bg-pink-400/10 rounded-full blur-2xl"></div>\r
    <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-400/10 rounded-full blur-lg"></div>\r
\r
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">\r
        <div class="grid lg:grid-cols-2 gap-12 items-center">\r
\r
            <div class="text-center lg:text-left space-y-8">\r
                <div\r
                    class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-200 shadow-sm">\r
                    <span class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>\r
                    <span class="text-sm font-medium text-gray-700">Agencia Creativa Integral</span>\r
                </div>\r
\r
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">\r
                    Creamos\r
                    <span\r
                        class="block bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">\r
                        experiencias\r
                    </span>\r
                    que conectan\r
                </h1>\r
\r
                <p class="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">\r
                    Transformamos ideas en <span class="font-semibold text-orange-600">marcas memorables</span>\r
                    con estrategia, diseño y tecnología.\r
                </p>\r
\r
                <div class="flex flex-wrap gap-6 justify-center lg:justify-start text-center">\r
                    <div class="space-y-1">\r
                        <div class="text-2xl font-bold text-gray-900">50+</div>\r
                        <div class="text-sm text-gray-500">Proyectos</div>\r
                    </div>\r
                    <div class="space-y-1">\r
                        <div class="text-2xl font-bold text-gray-900">98%</div>\r
                        <div class="text-sm text-gray-500">Clientes Satisfechos</div>\r
                    </div>\r
                    <div class="space-y-1">\r
                        <div class="text-2xl font-bold text-gray-900">3x</div>\r
                        <div class="text-sm text-gray-500">Crecimiento</div>\r
                    </div>\r
                </div>\r
\r
                <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">\r
                    <a href="/services"\r
                        class="group relative inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition-all duration-300 overflow-hidden">\r
                        <span class="relative z-10">Descubre Servicios</span>\r
                        <div\r
                            class="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">\r
                        </div>\r
                    </a>\r
\r
                    <a href="/about"\r
                        class="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-gray-900 font-semibold rounded-2xl border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transform hover:translate-y-[-2px] transition-all duration-300">\r
                        <span>Conoce Más</span>\r
                        <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none"\r
                            stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">\r
                            </path>\r
                        </svg>\r
                    </a>\r
                </div>\r
            </div>\r
\r
            <div class="relative">\r
                <div class="relative float-animation">\r
                    <img src="./img/Collaborate.svg" alt="Equipo colaborando en un proyecto creativo"\r
                        class="w-full max-w-lg mx-auto lg:max-w-none transform hover:scale-105 transition-transform duration-500"\r
                        loading="eager" />\r
\r
                    <div class="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-2xl rotate-12 blur-sm">\r
                    </div>\r
                    <div class="absolute -bottom-6 -left-6 w-20 h-20 bg-pink-400/20 rounded-2xl -rotate-12 blur-sm">\r
                    </div>\r
                </div>\r
\r
                <div\r
                    class="absolute bottom-8 left-0 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200 max-w-xs transform hover:scale-105 transition-all duration-300">\r
                    <div class="flex items-center gap-3">\r
                        <div\r
                            class="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">\r
                            <span class="text-white font-bold text-sm">⭐</span>\r
                        </div>\r
                        <div>\r
                            <p class="text-sm font-medium text-gray-900">"Transformaron nuestra marca por completo"</p>\r
                            <p class="text-xs text-gray-500 mt-1">Cliente Satisfecho</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">\r
            <div class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">\r
                <div class="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>\r
            </div>\r
        </div>\r
    </div>\r
</section>`,g=`<nav x-data="{ isOpen: false }" x-effect="document.body.classList.toggle('backdrop-blur-sm', isOpen)"\r
  class="relative sticky top-0 z-50 bg-transparent border-b border-gray-200 shadow-sm">\r
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[64px] flex items-center justify-between py-2">\r
\r
    <div class="flex items-center gap-4">\r
      <a href="/" class="flex items-center">\r
        <img src="/logos/logo_Mentema.png" alt="Logo Mentema" class="h-12 lg:h-12 w-auto object-contain" />\r
      </a>\r
    </div>\r
\r
    <div class="hidden lg:flex items-center space-x-6">\r
      <a href="/"\r
        class="px-2 py-1 text-sm lg:text-base text-black rounded-md hover:text-orange-500 transition">Inicio</a>\r
      <a href="/about"\r
        class="px-2 py-1 text-sm lg:text-base text-black rounded-md hover:text-orange-500 transition">Sobre nosotros</a>\r
      <a href="/services"\r
        class="px-2 py-1 text-sm lg:text-base text-black rounded-md hover:text-orange-500 transition">Servicios</a>\r
      <a href="/contacto"\r
        class="px-2 py-1 text-sm lg:text-base text-black rounded-md hover:text-orange-500 transition">Contacto</a>\r
    </div>\r
\r
    <div class="lg:hidden">\r
      <button @click="isOpen = !isOpen" aria-label="Toggle menú"\r
        class="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center focus:outline-none">\r
\r
        <span class="absolute block w-6 h-0.5 transform transition duration-300 ease-in-out"\r
          :class="isOpen ? 'rotate-45 bg-white' : '-translate-y-2 bg-black'"></span>\r
\r
        <span class="absolute block w-6 h-0.5 transform transition duration-300 ease-in-out"\r
          :class="isOpen ? 'opacity-0' : 'opacity-100 bg-black'"></span>\r
\r
        <span class="absolute block w-6 h-0.5 transform transition duration-300 ease-in-out"\r
          :class="isOpen ? '-rotate-45 bg-white' : 'translate-y-2 bg-black'"></span>\r
      </button>\r
    </div>\r
\r
    <div x-cloak :class="{ 'block': isOpen, 'hidden': !isOpen }"\r
      class="absolute top-0 left-0 w-full px-6 py-20 bg-black text-orange-500 transition-all duration-700 ease-in-out lg:hidden">\r
      <div class="flex flex-col text-center space-y-4">\r
        <a href="/" class="hover:underline">Inicio</a>\r
        <a href="/about" class="hover:underline">Sobre Nosotros</a>\r
        <a href="/services" class="hover:underline">Servicios</a>\r
        <a href="/contacto" class="hover:underline">Contacto</a>\r
      </div>\r
    </div>\r
  </div>\r
</nav>`,E=`<section id="seccion-about-hero"\r
    class="relative bg-[#fef7ed] min-h-[90vh] flex items-center justify-center overflow-hidden">\r
    <div class="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-yellow-50/30 to-pink-50/50"></div>\r
\r
    <div class="absolute top-10 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl"></div>\r
    <div class="absolute bottom-20 right-20 w-32 h-32 bg-pink-400/10 rounded-full blur-2xl"></div>\r
    <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-400/10 rounded-full blur-lg"></div>\r
\r
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">\r
        <div class="grid lg:grid-cols-2 gap-12 items-center">\r
            <div class="text-center lg:text-left space-y-8">\r
                <div\r
                    class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-200 shadow-sm">\r
                    <span class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>\r
                    <span class="text-sm font-medium text-gray-700">Sobre Nosotros</span>\r
                </div>\r
\r
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">\r
                    Creamos Marcas\r
                    <span\r
                        class="block bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">\r
                        Que Inspiran\r
                    </span>\r
                </h1>\r
\r
                <p class="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">\r
                    Transformamos ideas en <span class="font-semibold text-orange-600">marcas memorables</span>\r
                    con estrategia, diseño y tecnología que conectan con las audiencias.\r
                </p>\r
\r
                <div class="flex flex-wrap gap-6 justify-center lg:justify-start text-center">\r
                    <div class="space-y-1">\r
                        <div class="text-2xl font-bold text-gray-900">+5</div>\r
                        <div class="text-sm text-gray-500">Años de Experiencia</div>\r
                    </div>\r
                    <div class="space-y-1">\r
                        <div class="text-2xl font-bold text-gray-900">50+</div>\r
                        <div class="text-sm text-gray-500">Proyectos Exitosos</div>\r
                    </div>\r
                    <div class="space-y-1">\r
                        <div class="text-2xl font-bold text-gray-900">98%</div>\r
                        <div class="text-sm text-gray-500">Clientes Satisfechos</div>\r
                    </div>\r
                </div>\r
\r
                <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">\r
                    <a href="/contacto"\r
                        class="group relative inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition-all duration-300 overflow-hidden">\r
                        <span class="relative z-10">Contáctanos</span>\r
                        <div\r
                            class="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">\r
                        </div>\r
                    </a>\r
\r
                    <a href="/equipo"\r
                        class="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-gray-900 font-semibold rounded-2xl border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transform hover:translate-y-[-2px] transition-all duration-300">\r
                        <span>Conoce al Equipo</span>\r
                        <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none"\r
                            stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">\r
                            </path>\r
                        </svg>\r
                    </a>\r
                </div>\r
            </div>\r
\r
            <div class="relative">\r
                <div class="relative float-animation">\r
                    <img src="/img/Designing.svg" alt="Equipo creativo trabajando en diseño y estrategia"\r
                        class="w-full max-w-lg mx-auto lg:max-w-none transform hover:scale-105 transition-transform duration-500"\r
                        loading="eager" />\r
\r
                    <div class="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-2xl rotate-12 blur-sm">\r
                    </div>\r
                    <div class="absolute -bottom-6 -left-6 w-20 h-20 bg-pink-400/20 rounded-2xl -rotate-12 blur-sm">\r
                    </div>\r
                </div>\r
\r
                <div\r
                    class="absolute bottom-8 left-0 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200 max-w-xs transform hover:scale-105 transition-all duration-300">\r
                    <div class="flex items-center gap-3">\r
                        <div\r
                            class="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">\r
                            <span class="text-white font-bold text-sm">⭐</span>\r
                        </div>\r
                        <div>\r
                            <p class="text-sm font-medium text-gray-900">"Más que una agencia, son socios estratégicos"\r
                            </p>\r
                            <p class="text-xs text-gray-500 mt-1">Cliente Satisfecho</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">\r
            <div class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">\r
                <div class="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>\r
            </div>\r
        </div>\r
    </div>\r
</section>`,C=`<section class="bg-white py-16 px-6 md:px-12 lg:px-24 rounded-3xl shadow-lg max-w-5xl mx-auto text-gray-800">\r
    <h1 class="text-4xl font-bold mb-10 text-center">Aviso Legal</h1>\r
\r
    <p class="mb-6">\r
        Este Aviso Legal regula el uso del sitio web mentema.com (en adelante, "la web"), titularidad de Mentema Agencia\r
        Creativa Integral (en adelante, "Mentema").\r
    </p>\r
\r
    <h2 class="text-2xl font-semibold mt-10 mb-4">1. Información general</h2>\r
    <ul class="list-disc pl-6 space-y-2 mb-6">\r
        <li><strong>Titular:</strong> Mentema Agencia Creativa Integral</li>\r
        <li><strong>NIF:</strong> B12345678</li>\r
        <li><strong>Domicilio:</strong> Calle Ejemplo 123, 28000 Madrid, España</li>\r
        <li><strong>Email:</strong> <a href="mailto:info@mentema.com"\r
                class="text-orange-600 underline">info@mentema.com</a></li>\r
        <li><strong>Teléfono:</strong> +34 912 345 678</li>\r
    </ul>\r
\r
    <h2 class="text-2xl font-semibold mt-10 mb-4">2. Condiciones de uso</h2>\r
    <p class="mb-6">\r
        La navegación por este sitio web atribuye la condición de usuario e implica la aceptación plena de las\r
        condiciones aquí expuestas. Si no estás de acuerdo con ellas, por favor abstente de usar la web.\r
    </p>\r
\r
    <h2 class="text-2xl font-semibold mt-10 mb-4">3. Propiedad intelectual e industrial</h2>\r
    <p class="mb-6">\r
        Todos los contenidos, textos, imágenes, diseños, logos y código fuente son propiedad de Mentema o de terceros\r
        que han autorizado su uso, y están protegidos por los derechos de propiedad intelectual e industrial. Queda\r
        prohibida su reproducción total o parcial sin autorización previa por escrito.\r
    </p>\r
\r
    <h2 class="text-2xl font-semibold mt-10 mb-4">4. Responsabilidad</h2>\r
    <p class="mb-6">\r
        Mentema no se hace responsable de los errores u omisiones en los contenidos ni de los daños derivados del uso de\r
        la web, ni de la actuación de terceros mediante enlaces u otros elementos externos.\r
    </p>\r
\r
    <h2 class="text-2xl font-semibold mt-10 mb-4">5. Enlaces externos</h2>\r
    <p class="mb-6">\r
        Este sitio puede contener enlaces a sitios de terceros. Mentema no se responsabiliza del contenido, exactitud ni\r
        políticas de privacidad de dichos sitios.\r
    </p>\r
\r
    <h2 class="text-2xl font-semibold mt-10 mb-4">6. Legislación aplicable</h2>\r
    <p class="mb-6">\r
        Este aviso legal se rige por la legislación española. Cualquier controversia se someterá a los Juzgados y\r
        Tribunales de Madrid, salvo que la ley establezca otro fuero imperativo.\r
    </p>\r
\r
    <p class="text-sm text-gray-500 mt-12 text-right">Última actualización: Agosto 2025</p>\r
</section>`,S=`<section id="seccion-contacto" class="relative bg-[#fef7ed] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">\r
    <div class="absolute top-0 left-0 w-40 h-40 bg-orange-400/5 rounded-full blur-2xl"></div>\r
    <div class="absolute bottom-0 right-0 w-32 h-32 bg-pink-400/5 rounded-full blur-2xl"></div>\r
    <div class="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-400/5 rounded-full blur-2xl"></div>\r
\r
    <div class="relative max-w-7xl mx-auto">\r
        <div class="text-center mb-16">\r
            <!-- Badge -->\r
            <div\r
                class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-200 shadow-sm mb-8">\r
                <span class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>\r
                <span class="text-sm font-medium text-gray-700">Hablemos de tu Proyecto</span>\r
            </div>\r
\r
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">\r
                ¿Listo para\r
                <span\r
                    class="block bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">\r
                    transformar tu marca?\r
                </span>\r
            </h2>\r
\r
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">\r
                Hablemos sobre tu proyecto y descubramos juntos cómo podemos llevar tu marca al siguiente nivel.\r
            </p>\r
        </div>\r
\r
        <!-- Contenido principal -->\r
        <div class="grid lg:grid-cols-2 gap-12 items-start">\r
            <!-- Información de contacto -->\r
            <div class="space-y-8">\r
                <div class="space-y-4">\r
                    <h3 class="text-3xl md:text-4xl font-bold text-gray-900">\r
                        Hablemos de tu\r
                        <span\r
                            class="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">proyecto</span>\r
                    </h3>\r
\r
                    <div class="space-y-4">\r
                        <p class="text-lg text-gray-600 leading-relaxed">\r
                            Queremos conocer tu visión y ayudarte a hacerla realidad. Cuéntanos tu idea y nos pondremos\r
                            en contacto contigo en menos de 24 horas.\r
                        </p>\r
\r
                        <p class="text-lg text-gray-600 leading-relaxed">\r
                            Ya sea que necesites branding, diseño web, marketing o packaging, estamos aquí para\r
                            crear soluciones que realmente funcionen.\r
                        </p>\r
                    </div>\r
\r
                    <!-- Información de contacto rápida -->\r
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">\r
                        <div\r
                            class="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-orange-100 hover:border-orange-200 transition-all duration-300">\r
                            <div\r
                                class="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">\r
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />\r
                                </svg>\r
                            </div>\r
                            <div>\r
                                <p class="text-sm font-medium text-gray-900">Email</p>\r
                                <p class="text-xs text-gray-600">info@mentema.com</p>\r
                            </div>\r
                        </div>\r
\r
                        <div\r
                            class="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-pink-100 hover:border-pink-200 transition-all duration-300">\r
                            <div\r
                                class="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">\r
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />\r
                                </svg>\r
                            </div>\r
                            <div>\r
                                <p class="text-sm font-medium text-gray-900">Teléfono</p>\r
                                <p class="text-xs text-gray-600">+34 912 345 678</p>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <!-- Mensaje motivacional -->\r
                <div class="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-6 border border-orange-200">\r
                    <p class="text-sm text-gray-700 italic">\r
                        "¡Mentema está aquí para impulsar tu marca! Trabajamos contigo para crear soluciones\r
                        que no solo se vean bien, sino que generen resultados reales."\r
                    </p>\r
                </div>\r
            </div>\r
\r
            <!-- Formulario mejorado -->\r
            <div class="relative">\r
                <div\r
                    class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500">\r
                    <form class="space-y-6">\r
                        <!-- Campo Nombre -->\r
                        <div class="group">\r
                            <label for="name" class="block text-sm font-semibold text-gray-700 mb-3">\r
                                Nombre Completo\r
                            </label>\r
                            <input type="text" id="name" name="name" required\r
                                class="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 placeholder-gray-400"\r
                                placeholder="Tu nombre completo" />\r
                        </div>\r
\r
                        <!-- Campo Email -->\r
                        <div class="group">\r
                            <label for="email" class="block text-sm font-semibold text-gray-700 mb-3">\r
                                Correo Electrónico\r
                            </label>\r
                            <input type="email" id="email" name="email" required\r
                                class="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 placeholder-gray-400"\r
                                placeholder="tu@email.com" />\r
                        </div>\r
\r
                        <!-- Campo Mensaje -->\r
                        <div class="group">\r
                            <label for="message" class="block text-sm font-semibold text-gray-700 mb-3">\r
                                Mensaje\r
                            </label>\r
                            <textarea id="message" name="message" rows="4" required\r
                                class="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 placeholder-gray-400 resize-none"\r
                                placeholder="Cuéntanos sobre tu proyecto..."></textarea>\r
                        </div>\r
\r
                        <!-- Botón de envío -->\r
                        <div class="pt-4">\r
                            <button type="submit"\r
                                class="group relative w-full inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition-all duration-300 overflow-hidden">\r
                                <span class="relative z-10">Enviar Mensaje</span>\r
                                <div\r
                                    class="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">\r
                                </div>\r
\r
                                <!-- Icono -->\r
                                <svg class="w-5 h-5 ml-3 relative z-10 transform group-hover:translate-x-1 transition-transform"\r
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>\r
                                </svg>\r
                            </button>\r
                        </div>\r
                    </form>\r
                </div>\r
\r
                <!-- Elemento decorativo -->\r
                <div class="absolute -top-4 -right-4 w-8 h-8 bg-orange-400/20 rounded-full blur-sm"></div>\r
                <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400/20 rounded-full blur-sm"></div>\r
            </div>\r
        </div>\r
\r
        <!-- Línea informativa inferior -->\r
        <div class="mt-16 pt-8 border-t border-gray-200/50">\r
            <div class="flex flex-wrap gap-8 justify-center text-center text-sm text-gray-500">\r
                <div class="flex items-center gap-2">\r
                    <div class="w-1 h-1 bg-orange-500 rounded-full"></div>\r
                    <span>Respuesta en 24 horas</span>\r
                </div>\r
                <div class="flex items-center gap-2">\r
                    <div class="w-1 h-1 bg-pink-500 rounded-full"></div>\r
                    <span>Consultoría inicial gratuita</span>\r
                </div>\r
                <div class="flex items-center gap-2">\r
                    <div class="w-1 h-1 bg-purple-500 rounded-full"></div>\r
                    <span>Presupuesto personalizado</span>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</section>`,M=`<section class="bg-[#fef7ed] py-20 px-4 sm:px-6 lg:px-8">\r
    <div class="max-w-7xl mx-auto">\r
        <div class="grid lg:grid-cols-2 gap-12 items-center">\r
            <div class="relative">\r
                <div class="float-animation">\r
                    <img src="/img/Work_space.svg" alt="Ilustración espacio de trabajo colaborativo"\r
                        class="w-full max-w-md mx-auto lg:max-w-none transform hover:scale-105 transition-transform duration-500"\r
                        loading="lazy" />\r
                </div>\r
                <div class="absolute -top-4 -left-4 w-20 h-20 bg-orange-400/10 rounded-2xl rotate-12 blur-lg"></div>\r
                <div class="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-400/10 rounded-2xl -rotate-12 blur-lg"></div>\r
            </div>\r
\r
            <div class="space-y-8">\r
                <div\r
                    class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-200 shadow-sm">\r
                    <span class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>\r
                    <span class="text-sm font-medium text-gray-700">Contacto</span>\r
                </div>\r
\r
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">\r
                    Hagamos Crecer\r
                    <span\r
                        class="block bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">\r
                        tu Marca Juntos\r
                    </span>\r
                </h2>\r
\r
                <p class="text-xl text-gray-600 leading-relaxed">\r
                    Estamos listos para escuchar tus ideas y transformarlas en realidad. Cuéntanos sobre tu proyecto y\r
                    comencemos a trabajar.\r
                </p>\r
\r
                <form class="space-y-6">\r
                    <div>\r
                        <label class="block text-sm font-semibold text-gray-700 mb-3" for="name">Nombre</label>\r
                        <input type="text" id="name" name="name" placeholder="Tu nombre completo"\r
                            class="w-full bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300">\r
                    </div>\r
\r
                    <div>\r
                        <label class="block text-sm font-semibold text-gray-700 mb-3" for="email">Email</label>\r
                        <input type="email" id="email" name="email" placeholder="tu@email.com"\r
                            class="w-full bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300">\r
                    </div>\r
\r
                    <div>\r
                        <label class="block text-sm font-semibold text-gray-700 mb-3" for="message">Mensaje</label>\r
                        <textarea id="message" name="message" rows="4" placeholder="Cuéntanos sobre tu proyecto..."\r
                            class="w-full bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-300 resize-none"></textarea>\r
                    </div>\r
\r
                    <div class="pt-4">\r
                        <button type="submit"\r
                            class="group relative inline-flex items-center justify-center w-full px-8 py-4 bg-gray-900 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition-all duration-300 overflow-hidden">\r
                            <span class="relative z-10">Enviar Mensaje</span>\r
                            <div\r
                                class="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">\r
                            </div>\r
                        </button>\r
                    </div>\r
                </form>\r
            </div>\r
        </div>\r
\r
        <div class="mt-16 pt-8 border-t border-gray-200/50">\r
            <div class="flex flex-wrap gap-8 justify-center text-center text-sm text-gray-500">\r
                <div class="flex items-center gap-2">\r
                    <div class="w-1 h-1 bg-orange-500 rounded-full"></div>\r
                    <span>Respuesta en 24 horas</span>\r
                </div>\r
                <div class="flex items-center gap-2">\r
                    <div class="w-1 h-1 bg-blue-500 rounded-full"></div>\r
                    <span>Consulta sin compromiso</span>\r
                </div>\r
                <div class="flex items-center gap-2">\r
                    <div class="w-1 h-1 bg-purple-500 rounded-full"></div>\r
                    <span>Presupuesto personalizado</span>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</section>`,z=`<section id="seccion-contacto-principal" class="bg-[#f4efe4] py-12 px-4 md:px-12 lg:px-24">\r
    <div class="max-w-7xl mx-auto rounded-2xl border border-4 border-black overflow-hidden">\r
\r
        <div class="h-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500"></div>\r
\r
        <div class="grid md:grid-cols-2 items-center bg-[#f4efe4] p-8">\r
\r
            <div class="flex justify-center mb-8 md:mb-0">\r
                <img src="/img/Programming.svg" alt="Ilustración contacto" class="w-full max-w-xs md:max-w-md">\r
            </div>\r
\r
            <div class="md:pl-8">\r
                <h2 class="text-4xl md:text-5xl font-extrabold mb-4">Contacta con <br> Nosotros</h2>\r
                <p class="text-gray-700 mb-8 text-sm">Estamos aquí para ayudarte a hacer crecer tu marca. Cuéntanos tu\r
                    idea y te responderemos en menos de 24h.</p>\r
\r
                <form class="space-y-6">\r
                    <div>\r
                        <label class="block text-sm font-semibold mb-1" for="name">NAME</label>\r
                        <input type="text" id="name" name="name"\r
                            class="w-full border-0 border-b border-black bg-transparent focus:ring-0 focus:border-black text-gray-800">\r
                    </div>\r
                    <div>\r
                        <label class="block text-sm font-semibold mb-1" for="email">EMAIL ADDRESS</label>\r
                        <input type="email" id="email" name="email"\r
                            class="w-full border-0 border-b border-black bg-transparent focus:ring-0 focus:border-black text-gray-800">\r
                    </div>\r
                    <div>\r
                        <label class="block text-sm font-semibold mb-1" for="message">MESSAGE</label>\r
                        <textarea id="message" name="message" rows="4"\r
                            class="w-full border-0 border-b border-black bg-transparent focus:ring-0 focus:border-black text-gray-800"></textarea>\r
                    </div>\r
                    <div class="pt-2">\r
                        <button type="submit"\r
                            class="bg-yellow-400 text-black px-6 py-2 rounded-md border-2 border-black shadow-[3px_3px_0px_0px_black] hover:translate-x-[1px] hover:translate-y-[1px] transition-transform duration-150">\r
                            SUBMIT\r
                        </button>\r
                    </div>\r
                </form>\r
            </div>\r
        </div>\r
\r
        <div class="grid gap-6 md:grid-cols-3 bg-[#f4efe4] px-6 pb-10 pt-6">\r
            <div class="text-center border border-4 border-black rounded-xl p-6">\r
                <img src="/icons/flat-flag-svgrepo-com.svg" alt="Email" class="mx-auto mb-4 w-8 h-8">\r
                <p class="font-semibold text-sm mb-1">Email</p>\r
                <p class="text-xs text-gray-600">info@mentema.agency</p>\r
            </div>\r
\r
            <div class="text-center border border-4 border-black rounded-xl p-6">\r
                <img src="/icons/css-svgrepo-com.svg" alt="Soporte" class="mx-auto mb-4 w-8 h-8">\r
                <p class="font-semibold text-sm mb-1">Soporte</p>\r
                <a href="#" class="text-xs text-blue-700 underline">Chat With Us</a>\r
            </div>\r
\r
            <div class="text-center border border-4 border-black rounded-xl p-6">\r
                <img src="/icons/coordinate-svgrepo-com.svg" alt="Ubicación" class="mx-auto mb-4 w-8 h-8">\r
                <p class="font-semibold text-sm mb-1">Oficina</p>\r
                <p class="text-xs text-gray-600">\r
                    📍 Calle del Éxito, 5 – 30001, Murcia, España<br>\r
                    📞 +34 968 123 456\r
                </p>\r
            </div>\r
        </div>\r
    </div>\r
</section>`,q=`<section class="bg-[#fef7ed] py-20 px-4 sm:px-6 lg:px-8">\r
    <div class="max-w-7xl mx-auto">\r
        <div class="text-center mb-16">\r
            <div\r
                class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-200 shadow-sm mb-6">\r
                <span class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>\r
                <span class="text-sm font-medium text-gray-700">Nuestro Equipo</span>\r
            </div>\r
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">\r
                Las Mentes Detrás de\r
                <span\r
                    class="block bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">\r
                    Mentema\r
                </span>\r
            </h2>\r
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">\r
                Un equipo multidisciplinario de creativos, estrategas y desarrolladores apasionados por transformar\r
                ideas en realidades.\r
            </p>\r
        </div>\r
\r
        <div class="grid md:grid-cols-3 gap-8 mb-16">\r
            <div\r
                class="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg overflow-hidden">\r
                <div class="relative overflow-hidden rounded-xl mb-6">\r
                    <img src="/avatar/pexels-linkedin-2182970.jpg" alt="Kenny Sing - Director Creativo"\r
                        class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />\r
                    <div\r
                        class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">\r
                    </div>\r
                </div>\r
                <div class="text-center">\r
                    <p\r
                        class="font-bold text-xl text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">\r
                        Kenny Sing</p>\r
                    <p class="text-sm text-gray-600 font-medium">Director Creativo</p>\r
                </div>\r
            </div>\r
\r
            <div\r
                class="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-pink-100 hover:border-pink-200 transition-all duration-300 hover:shadow-lg overflow-hidden">\r
                <div class="relative overflow-hidden rounded-xl mb-6">\r
                    <img src="/avatar/pexels-italo-melo-881954-2379004.jpg"\r
                        alt="Mitch Skolnik - Director de Operaciones"\r
                        class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />\r
                    <div\r
                        class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">\r
                    </div>\r
                </div>\r
                <div class="text-center">\r
                    <p\r
                        class="font-bold text-xl text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">\r
                        Mitch Skolnik</p>\r
                    <p class="text-sm text-gray-600 font-medium">Director de Operaciones</p>\r
                </div>\r
            </div>\r
\r
            <div\r
                class="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg overflow-hidden">\r
                <div class="relative overflow-hidden rounded-xl mb-6">\r
                    <img src="/avatar/pexels-olly-774909.jpg" alt="Angela Charlton - Desarrolladora Senior"\r
                        class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />\r
                    <div\r
                        class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">\r
                    </div>\r
                </div>\r
                <div class="text-center">\r
                    <p\r
                        class="font-bold text-xl text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">\r
                        Angela Charlton</p>\r
                    <p class="text-sm text-gray-600 font-medium">Desarrolladora Senior</p>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="text-center">\r
            <a href="/unete-al-equipo"\r
                class="group inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition-all duration-300 overflow-hidden">\r
                <span class="relative z-10">Únete al Equipo</span>\r
                <div\r
                    class="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">\r
                </div>\r
            </a>\r
        </div>\r
    </div>\r
</section>`,A=`<section id="seccion-estrategia" class="relative bg-[#fef7ed] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">\r
    <div class="absolute top-0 left-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl"></div>\r
    <div class="absolute bottom-0 right-0 w-40 h-40 bg-pink-400/5 rounded-full blur-2xl"></div>\r
\r
    <div class="relative max-w-7xl mx-auto">\r
        <div class="grid lg:grid-cols-2 gap-8 items-start mb-16">\r
            <div class="space-y-4">\r
                <div\r
                    class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-200 shadow-sm">\r
                    <span class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>\r
                    <span class="text-sm font-medium text-gray-700">Enfoque Estratégico</span>\r
                </div>\r
\r
                <h2 class="heading-1 text-gray-900">\r
                    Diseño con\r
                    <span class="block title-gradient animate-gradient-shift">\r
                        propósito humano\r
                    </span>\r
                </h2>\r
            </div>\r
\r
            <div class="space-y-4">\r
                <p class="body-large text-gray-600 text-hover-glow">\r
                    En Mentema, diseñamos para personas. Nuestro enfoque combina creatividad y estrategia para crear\r
                    soluciones\r
                    auténticas y funcionales que realmente conectan.\r
                </p>\r
\r
                <div class="flex gap-6 pt-4">\r
                    <div class="text-center">\r
                        <div class="text-2xl font-bold text-gray-900">360°</div>\r
                        <div class="text-sm text-gray-500">Enfoque</div>\r
                    </div>\r
                    <div class="text-center">\r
                        <div class="text-2xl font-bold text-gray-900">100%</div>\r
                        <div class="text-sm text-gray-500">Personalizado</div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="relative mb-16 rounded-3xl overflow-hidden group">\r
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>\r
\r
            <div\r
                class="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">\r
            </div>\r
\r
            <img src="/img/charlesdeluvio-Lks7vei-eAg-unsplash.jpg" alt="Profesional trabajando en estrategia creativa"\r
                class="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"\r
                loading="lazy" />\r
\r
            <div class="absolute bottom-6 left-6 z-30">\r
                <p class="text-white/90 text-sm font-medium backdrop-blur-sm bg-black/20 rounded-full px-3 py-1">\r
                    Estrategia que transforma\r
                </p>\r
            </div>\r
        </div>\r
\r
        <div class="grid lg:grid-cols-2 gap-12 items-center">\r
            <div class="relative">\r
                <div class="float-animation">\r
                    <img src="/img/Marketing.svg" alt="Estrategia de marketing y planificación"\r
                        class="w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-500"\r
                        loading="lazy" />\r
                </div>\r
\r
                <div class="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400/10 rounded-2xl rotate-12 blur-lg"></div>\r
                <div class="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-400/10 rounded-2xl -rotate-12 blur-lg"></div>\r
            </div>\r
\r
            <div class="space-y-6">\r
                <div\r
                    class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200 shadow-sm">\r
                    <span class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>\r
                    <span class="text-sm font-medium text-gray-700">Metodología Probada</span>\r
                </div>\r
\r
                <h3 class="heading-2 text-gray-900">\r
                    De la idea al\r
                    <span class="text-hover-gradient">impacto real</span>\r
                </h3>\r
\r
                <div class="space-y-4">\r
                    <p class="body-base text-gray-600">\r
                        Tu marca merece algo más que una imagen bonita. En Mentema unimos análisis, creatividad y\r
                        ejecución para\r
                        lograr resultados medibles y tangibles.\r
                    </p>\r
\r
                    <p class="body-base text-gray-600">\r
                        Desde la planificación de campañas hasta la producción visual, nos convertimos en una extensión\r
                        de tu equipo, asegurando que cada detalle contribuya al éxito de tu proyecto.\r
                    </p>\r
                </div>\r
\r
                <div class="grid grid-cols-2 gap-4 py-4">\r
                    <div class="flex items-center gap-2">\r
                        <div class="w-2 h-2 bg-green-500 rounded-full"></div>\r
                        <span class="text-sm text-gray-700">Análisis profundo</span>\r
                    </div>\r
                    <div class="flex items-center gap-2">\r
                        <div class="w-2 h-2 bg-blue-500 rounded-full"></div>\r
                        <span class="text-sm text-gray-700">Estrategia personalizada</span>\r
                    </div>\r
                    <div class="flex items-center gap-2">\r
                        <div class="w-2 h-2 bg-purple-500 rounded-full"></div>\r
                        <span class="text-sm text-gray-700">Ejecución impecable</span>\r
                    </div>\r
                    <div class="flex items-center gap-2">\r
                        <div class="w-2 h-2 bg-orange-500 rounded-full"></div>\r
                        <span class="text-sm text-gray-700">Resultados medibles</span>\r
                    </div>\r
                </div>\r
\r
                <div class="pt-4">\r
                    <a href="/about"\r
                        class="group relative inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition-all duration-300 overflow-hidden">\r
                        <span class="relative z-10">Conoce Nuestro Método</span>\r
                        <div\r
                            class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">\r
                        </div>\r
                    </a>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="mt-16 pt-8 border-t border-gray-200/50">\r
            <div class="flex flex-wrap gap-8 justify-center text-center text-sm text-gray-500">\r
                <div class="flex items-center gap-2">\r
                    <div class="w-1 h-1 bg-green-500 rounded-full"></div>\r
                    <span>Investigación de mercado</span>\r
                </div>\r
                <div class="flex items-center gap-2">\r
                    <div class="w-1 h-1 bg-blue-500 rounded-full"></div>\r
                    <span>Desarrollo de estrategia</span>\r
                </div>\r
                <div class="flex items-center gap-2">\r
                    <div class="w-1 h-1 bg-purple-500 rounded-full"></div>\r
                    <span>Implementación y seguimiento</span>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</section>`,L=`<section class="bg-[#fef7ed] py-20 px-4 sm:px-6 lg:px-8">\r
    <div class="max-w-7xl mx-auto">\r
        <div class="text-center mb-16">\r
            <div\r
                class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-200 shadow-sm mb-6">\r
                <span class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>\r
                <span class="text-sm font-medium text-gray-700">Nuestro Proceso</span>\r
            </div>\r
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">\r
                Metodología de\r
                <span\r
                    class="block bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">\r
                    Trabajo\r
                </span>\r
            </h2>\r
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">\r
                Un proceso probado que combina creatividad, estrategia y ejecución para convertir ideas en resultados\r
                tangibles.\r
            </p>\r
        </div>\r
\r
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">\r
            <div\r
                class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg">\r
                <div\r
                    class="text-3xl font-bold text-gray-300 mb-4 group-hover:text-orange-400 transition-colors duration-300">\r
                    01</div>\r
                <h3\r
                    class="text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">\r
                    Brief</h3>\r
                <p class="text-gray-600 leading-relaxed">\r
                    Escuchamos tus ideas y analizamos tu situación actual. Cada proyecto arranca con una comprensión\r
                    profunda de tus necesidades y objetivos.\r
                </p>\r
            </div>\r
\r
            <div\r
                class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-pink-100 hover:border-pink-200 transition-all duration-300 hover:shadow-lg">\r
                <div\r
                    class="text-3xl font-bold text-gray-300 mb-4 group-hover:text-pink-400 transition-colors duration-300">\r
                    02</div>\r
                <h3\r
                    class="text-xl font-semibold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors duration-300">\r
                    Research</h3>\r
                <p class="text-gray-600 leading-relaxed">\r
                    Investigamos tu sector, tu competencia y tu audiencia. Lo que descubrimos guía todo el proceso\r
                    creativo y estratégico.\r
                </p>\r
            </div>\r
\r
            <div\r
                class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">\r
                <div\r
                    class="text-3xl font-bold text-gray-300 mb-4 group-hover:text-purple-400 transition-colors duration-300">\r
                    03</div>\r
                <h3\r
                    class="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">\r
                    Strategy</h3>\r
                <p class="text-gray-600 leading-relaxed">\r
                    Diseñamos un plan de acción a medida que alinee tu marca con tus metas. Creatividad sin\r
                    improvisación.\r
                </p>\r
            </div>\r
\r
            <div\r
                class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">\r
                <div\r
                    class="text-3xl font-bold text-gray-300 mb-4 group-hover:text-blue-400 transition-colors duration-300">\r
                    04</div>\r
                <h3\r
                    class="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">\r
                    Diseño & Desarrollo</h3>\r
                <p class="text-gray-600 leading-relaxed">\r
                    Creamos soluciones visuales y técnicas adaptadas a tus necesidades. Desde identidad de marca hasta\r
                    plataformas digitales funcionales.\r
                </p>\r
            </div>\r
\r
            <div\r
                class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg">\r
                <div\r
                    class="text-3xl font-bold text-gray-300 mb-4 group-hover:text-green-400 transition-colors duration-300">\r
                    05</div>\r
                <h3\r
                    class="text-xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">\r
                    Implementación</h3>\r
                <p class="text-gray-600 leading-relaxed">\r
                    Llevamos tu proyecto a la realidad, asegurando que cada detalle esté optimizado y listo para\r
                    funcionar.\r
                </p>\r
            </div>\r
\r
            <div\r
                class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-lg">\r
                <div\r
                    class="text-3xl font-bold text-gray-300 mb-4 group-hover:text-indigo-400 transition-colors duration-300">\r
                    06</div>\r
                <h3\r
                    class="text-xl font-semibold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">\r
                    Seguimiento</h3>\r
                <p class="text-gray-600 leading-relaxed">\r
                    Medimos resultados, realizamos ajustes y mejoras continuas para garantizar el éxito a largo plazo.\r
                </p>\r
            </div>\r
        </div>\r
\r
        <div class="text-center mt-12">\r
            <a href="/contacto"\r
                class="group inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition-all duration-300 overflow-hidden">\r
                <span class="relative z-10">Iniciar Proyecto</span>\r
                <div\r
                    class="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">\r
                </div>\r
            </a>\r
        </div>\r
    </div>\r
</section>`,D=`<section class="bg-white py-16 px-6 md:px-12 lg:px-24 rounded-3xl shadow-lg max-w-5xl mx-auto text-gray-800">\r
    <h1 class="text-4xl font-bold mb-8 text-center">Política de Privacidad</h1>\r
\r
    <p class="mb-6">\r
        En Mentema ("nosotros", "nos", o "nuestro"), nos comprometemos a proteger tu privacidad y garantizar la\r
        transparencia en el tratamiento de tus datos personales. Esta política se aplica a todos los servicios ofrecidos\r
        a través de nuestro sitio web y otras plataformas relacionadas.\r
    </p>\r
\r
    <h2 class="text-2xl font-semibold mt-10 mb-4">1. Responsable del Tratamiento</h2>\r
    <p class="mb-6">\r
        Mentema Agencia Creativa, con domicilio en Calle Ejemplo 123, Madrid, España, es responsable del tratamiento de\r
        los datos personales recogidos a través de este sitio.\r
    </p>\r
\r
    <h2 class="text-2xl font-semibold mt-10 mb-4">2. Qué datos recopilamos</h2>\r
    <ul class="list-disc pl-6 space-y-2 mb-6">\r
        <li>Datos identificativos: nombre, apellidos, dirección de correo electrónico, número de teléfono.</li>\r
        <li>Datos profesionales: empresa, cargo, sector.</li>\r
        <li>Información técnica: dirección IP, tipo de navegador, sistema operativo.</li>\r
        <li>Datos de navegación y uso de la web mediante cookies (consulta nuestra Política de Cookies).</li>\r
    </ul>\r
\r
    <h2 class="text-2xl font-semibold mt-10 mb-4">3. Finalidad del tratamiento</h2>\r
    <p class="mb-6">\r
        Usamos tus datos para:\r
    </p>\r
    <ul class="list-disc pl-6 space-y-2 mb-6">\r
        <li>Responder a solicitudes o consultas.</li>\r
        <li>Gestionar tu inscripción a eventos, talleres o newsletters.</li>\r
        <li>Ofrecer servicios personalizados y mejorar la experiencia de usuario.</li>\r
        <li>Cumplir con obligaciones legales.</li>\r
    </ul>\r
\r
    <h2 class="text-2xl font-semibold mt-10 mb-4">4. Base legal para el tratamiento</h2>\r
    <p class="mb-6">\r
        El tratamiento se basa en tu consentimiento, en la ejecución de un contrato, en el cumplimiento de obligaciones\r
        legales o en nuestro interés legítimo.\r
    </p>\r
\r
    <h2 class="text-2xl font-semibold mt-10 mb-4">5. Destinatarios de los datos</h2>\r
    <p class="mb-6">\r
        No compartimos tus datos con terceros, salvo cuando sea necesario por obligación legal o para prestar un\r
        servicio bajo contrato (por ejemplo, plataformas de mailing, hosting o analítica web). Todos los proveedores\r
        cumplen con el RGPD.\r
    </p>\r
\r
    <h2 class="text-2xl font-semibold mt-10 mb-4">6. Transferencias internacionales</h2>\r
    <p class="mb-6">\r
        Si se realizan, se garantizará que el país receptor ofrece un nivel adecuado de protección o que existen\r
        garantías adecuadas como cláusulas contractuales tipo.\r
    </p>\r
\r
    <h2 class="text-2xl font-semibold mt-10 mb-4">7. Plazo de conservación</h2>\r
    <p class="mb-6">\r
        Conservamos tus datos mientras sean necesarios para la finalidad del tratamiento y, en su caso, durante los\r
        plazos legales aplicables.\r
    </p>\r
\r
    <h2 class="text-2xl font-semibold mt-10 mb-4">8. Tus derechos</h2>\r
    <p class="mb-6">\r
        Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, oposición, limitación del\r
        tratamiento y portabilidad de datos. También puedes retirar tu consentimiento en cualquier momento.\r
    </p>\r
    <p class="mb-6">\r
        Para ello, escribe a <a href="mailto:privacidad@mentema.com"\r
            class="text-orange-600 underline">privacidad@mentema.com</a> con una copia de tu DNI o documento\r
        identificativo.\r
    </p>\r
\r
    <h2 class="text-2xl font-semibold mt-10 mb-4">9. Seguridad</h2>\r
    <p class="mb-6">\r
        Implementamos medidas técnicas y organizativas apropiadas para garantizar la seguridad e integridad de tus datos\r
        personales, evitando el acceso no autorizado, la pérdida o destrucción accidental.\r
    </p>\r
\r
    <h2 class="text-2xl font-semibold mt-10 mb-4">10. Cambios en esta política</h2>\r
    <p class="mb-6">\r
        Esta política puede ser actualizada periódicamente. La última versión siempre estará disponible en nuestro sitio\r
        web con fecha de revisión.\r
    </p>\r
\r
    <p class="text-sm text-gray-500 mt-12 text-right">Última actualización: Agosto 2025</p>\r
</section>`,P=`<section class="bg-[#fef7ed] py-20 px-4 sm:px-6 lg:px-8">\r
    <div class="max-w-7xl mx-auto">\r
        <div class="text-center mb-16">\r
            <div\r
                class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-200 shadow-sm mb-6">\r
                <span class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>\r
                <span class="text-sm font-medium text-gray-700">Reconocimientos</span>\r
            </div>\r
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">\r
                Premios y\r
                <span\r
                    class="block bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">\r
                    Logros\r
                </span>\r
            </h2>\r
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">\r
                Nos sentimos orgullosos de haber sido reconocidos por instituciones y clientes. Estos logros validan\r
                nuestro\r
                enfoque y refuerzan nuestro compromiso con la calidad.\r
            </p>\r
        </div>\r
\r
        <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white overflow-hidden">\r
            <div class="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>\r
            <div class="absolute left-0 bottom-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>\r
\r
            <div class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">\r
                <div\r
                    class="group text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500">\r
                    <div class="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🏆\r
                    </div>\r
                    <p\r
                        class="font-bold text-sm uppercase tracking-wide group-hover:text-orange-300 transition-colors duration-300">\r
                        MEJOR AGENCIA EMERGENTE 2024\r
                    </p>\r
                </div>\r
\r
                <div\r
                    class="group text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500">\r
                    <div class="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🚀\r
                    </div>\r
                    <p\r
                        class="font-bold text-sm uppercase tracking-wide group-hover:text-pink-300 transition-colors duration-300">\r
                        APP INNOVATION AWARD\r
                    </p>\r
                </div>\r
\r
                <div\r
                    class="group text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500">\r
                    <div class="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">⭐</div>\r
                    <p\r
                        class="font-bold text-sm uppercase tracking-wide group-hover:text-yellow-300 transition-colors duration-300">\r
                        CREATIVE BRANDING GOLD\r
                    </p>\r
                </div>\r
\r
                <div\r
                    class="group text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500">\r
                    <div class="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🎨\r
                    </div>\r
                    <p\r
                        class="font-bold text-sm uppercase tracking-wide group-hover:text-purple-300 transition-colors duration-300">\r
                        WEB DESIGN BEST 2023\r
                    </p>\r
                </div>\r
            </div>\r
\r
            <div class="h-2 w-full bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 rounded-full mt-8"></div>\r
        </div>\r
\r
        <div class="text-center mt-12">\r
            <a href="/trabajos"\r
                class="group inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition-all duration-300 overflow-hidden">\r
                <span class="relative z-10">Ver Nuestros Trabajos</span>\r
                <div\r
                    class="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">\r
                </div>\r
            </a>\r
        </div>\r
    </div>\r
</section>`,I=`<section id="seccion-servicios" class="relative bg-[#fef7ed] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">\r
    <div class="absolute top-10 right-10 w-24 h-24 bg-purple-400/5 rounded-full blur-2xl"></div>\r
    <div class="absolute bottom-10 left-10 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl"></div>\r
    <div class="absolute top-1/2 left-1/3 w-20 h-20 bg-green-400/5 rounded-full blur-2xl"></div>\r
\r
    <div class="relative max-w-7xl mx-auto">\r
        <div class="text-center mb-16">\r
            <div\r
                class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-200 shadow-sm mb-6">\r
                <span class="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>\r
                <span class="text-sm font-medium text-gray-700">Soluciones Integrales</span>\r
            </div>\r
\r
            <h2 class="heading-1 text-gray-900 mb-4">\r
                Servicios que\r
                <span class="block title-gradient animate-gradient-shift">impulsan marcas</span>\r
            </h2>\r
\r
            <p class="body-large text-gray-600 max-w-2xl mx-auto text-hover-glow">\r
                Ofrecemos soluciones creativas y estratégicas para cada etapa del crecimiento de tu marca.\r
                Desde la conceptualización hasta la implementación.\r
            </p>\r
        </div>\r
\r
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">\r
            <div\r
                class="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transform hover:translate-y-[-8px] transition-all duration-500 overflow-hidden">\r
                <div\r
                    class="absolute inset-0 bg-gradient-to-br from-orange-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">\r
                </div>\r
\r
                <div class="relative z-10 flex justify-center mb-4">\r
                    <div\r
                        class="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">\r
                        <img src="/icons/brand-svgrepo-com.svg" alt="Branding"\r
                            class="w-8 h-8 filter brightness-0 invert" />\r
                    </div>\r
                </div>\r
\r
                <div class="relative z-10 text-center">\r
                    <h3 class="heading-3 text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">\r
                        Branding\r
                    </h3>\r
                    <p class="body-small text-gray-600 group-hover:text-gray-700 transition-colors duration-300">\r
                        Construimos marcas sólidas, memorables y con propósito. Naming, identidad visual y manual de\r
                        marca.\r
                    </p>\r
                </div>\r
\r
                <div\r
                    class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-200 transition-all duration-500">\r
                </div>\r
            </div>\r
\r
            <div\r
                class="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transform hover:translate-y-[-8px] transition-all duration-500 overflow-hidden">\r
                <div\r
                    class="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">\r
                </div>\r
\r
                <div class="relative z-10 flex justify-center mb-4">\r
                    <div\r
                        class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">\r
                        <img src="/icons/pen-tool-svgrepo-com.svg" alt="Diseño Web"\r
                            class="w-8 h-8 filter brightness-0 invert" />\r
                    </div>\r
                </div>\r
\r
                <div class="relative z-10 text-center">\r
                    <h3 class="heading-3 text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">\r
                        Diseño Web\r
                    </h3>\r
                    <p class="body-small text-gray-600 group-hover:text-gray-700 transition-colors duration-300">\r
                        Creamos sitios web modernos, rápidos y optimizados para conversión. Tecnología actual y diseño\r
                        responsivo.\r
                    </p>\r
                </div>\r
\r
                <div\r
                    class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-500">\r
                </div>\r
            </div>\r
\r
            <div\r
                class="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transform hover:translate-y-[-8px] transition-all duration-500 overflow-hidden">\r
                <div\r
                    class="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">\r
                </div>\r
\r
                <div class="relative z-10 flex justify-center mb-4">\r
                    <div\r
                        class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">\r
                        <img src="/icons/digital-marketing-svgrepo-com.svg" alt="Marketing"\r
                            class="w-8 h-8 filter brightness-0 invert" />\r
                    </div>\r
                </div>\r
\r
                <div class="relative z-10 text-center">\r
                    <h3 class="heading-3 text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">\r
                        Marketing\r
                    </h3>\r
                    <p class="body-small text-gray-600 group-hover:text-gray-700 transition-colors duration-300">\r
                        Diseñamos campañas que conectan. SEO, publicidad online, email marketing y más con estrategia\r
                        clara.\r
                    </p>\r
                </div>\r
\r
                <div\r
                    class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-200 transition-all duration-500">\r
                </div>\r
            </div>\r
\r
            <div\r
                class="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transform hover:translate-y-[-8px] transition-all duration-500 overflow-hidden">\r
                <div\r
                    class="absolute inset-0 bg-gradient-to-br from-yellow-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">\r
                </div>\r
\r
                <div class="relative z-10 flex justify-center mb-4">\r
                    <div\r
                        class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">\r
                        <img src="/icons/creativity-svgrepo-com.svg" alt="Packaging"\r
                            class="w-8 h-8 filter brightness-0 invert" />\r
                    </div>\r
                </div>\r
\r
                <div class="relative z-10 text-center">\r
                    <h3 class="heading-3 text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">\r
                        Packaging\r
                    </h3>\r
                    <p class="body-small text-gray-600 group-hover:text-gray-700 transition-colors duration-300">\r
                        Diseñamos envases que cuentan historias y venden por sí solos. Estética y funcionalidad unidas.\r
                    </p>\r
                </div>\r
\r
                <div\r
                    class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-200 transition-all duration-500">\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="text-center">\r
            <a href="/Services"\r
                class="group relative inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition-all duration-300 overflow-hidden">\r
                <span class="relative z-10">Explorar Todos los Servicios</span>\r
                <div\r
                    class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">\r
                </div>\r
\r
                <svg class="w-5 h-5 ml-3 relative z-10 transform group-hover:translate-x-1 transition-transform"\r
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
                </svg>\r
            </a>\r
\r
            <p class="text-sm text-gray-500 mt-4">\r
                Más de 50 proyectos entregados con excelencia\r
            </p>\r
        </div>\r
\r
        <div class="mt-16 pt-8 border-t border-gray-200/50">\r
            <div class="flex flex-wrap gap-8 justify-center text-center text-sm text-gray-500">\r
                <div class="flex items-center gap-2">\r
                    <div class="w-1 h-1 bg-orange-500 rounded-full"></div>\r
                    <span>Diseño centrado en el usuario</span>\r
                </div>\r
                <div class="flex items-center gap-2">\r
                    <div class="w-1 h-1 bg-blue-500 rounded-full"></div>\r
                    <span>Tecnología de vanguardia</span>\r
                </div>\r
                <div class="flex items-center gap-2">\r
                    <div class="w-1 h-1 bg-purple-500 rounded-full"></div>\r
                    <span>Resultados medibles</span>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</section>`,T=`<section id="seccion-servicios-hero"\r
    class="relative bg-[#fef7ed] min-h-[90vh] flex items-center justify-center overflow-hidden">\r
    <div class="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-yellow-50/30 to-pink-50/50"></div>\r
\r
    <div class="absolute top-10 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl"></div>\r
    <div class="absolute bottom-20 right-20 w-32 h-32 bg-pink-400/10 rounded-full blur-2xl"></div>\r
    <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-400/10 rounded-full blur-lg"></div>\r
\r
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">\r
        <div class="grid lg:grid-cols-2 gap-12 items-center">\r
            <div class="text-center lg:text-left space-y-8">\r
                <div\r
                    class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-200 shadow-sm">\r
                    <span class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>\r
                    <span class="text-sm font-medium text-gray-700">Nuestros Servicios</span>\r
                </div>\r
\r
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">\r
                    Renovamos\r
                    <span\r
                        class="block bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">\r
                        tu Marca\r
                    </span>\r
                    para Destacar\r
                </h1>\r
\r
                <p class="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">\r
                    Transformamos tu identidad visual con <span class="font-semibold text-orange-600">estrategia y\r
                        diseño</span>\r
                    que conecta con tu audiencia y refleja quién eres realmente.\r
                </p>\r
\r
                <div class="flex flex-wrap gap-6 justify-center lg:justify-start text-center">\r
                    <div class="space-y-1">\r
                        <div class="text-2xl font-bold text-gray-900">100%</div>\r
                        <div class="text-sm text-gray-500">Personalizado</div>\r
                    </div>\r
                    <div class="space-y-1">\r
                        <div class="text-2xl font-bold text-gray-900">360°</div>\r
                        <div class="text-sm text-gray-500">Enfoque Integral</div>\r
                    </div>\r
                    <div class="space-y-1">\r
                        <div class="text-2xl font-bold text-gray-900">+50</div>\r
                        <div class="text-sm text-gray-500">Marcas Renovadas</div>\r
                    </div>\r
                </div>\r
\r
                <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">\r
                    <a href="/contacto"\r
                        class="group relative inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition-all duration-300 overflow-hidden">\r
                        <span class="relative z-10">Iniciar Proyecto</span>\r
                        <div\r
                            class="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">\r
                        </div>\r
                    </a>\r
\r
                    <a href="/servicios"\r
                        class="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-gray-900 font-semibold rounded-2xl border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transform hover:translate-y-[-2px] transition-all duration-300">\r
                        <span>Ver Todos los Servicios</span>\r
                        <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none"\r
                            stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">\r
                            </path>\r
                        </svg>\r
                    </a>\r
                </div>\r
            </div>\r
\r
            <div class="relative">\r
                <div class="relative float-animation">\r
                    <img src="/img/Under-construction.svg" alt="Servicios de branding y diseño web"\r
                        class="w-full max-w-lg mx-auto lg:max-w-none transform hover:scale-105 transition-transform duration-500"\r
                        loading="eager" />\r
\r
                    <div class="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-2xl rotate-12 blur-sm">\r
                    </div>\r
                    <div class="absolute -bottom-6 -left-6 w-20 h-20 bg-pink-400/20 rounded-2xl -rotate-12 blur-sm">\r
                    </div>\r
                </div>\r
\r
                <div\r
                    class="absolute bottom-8 left-0 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200 max-w-xs transform hover:scale-105 transition-all duration-300">\r
                    <div class="flex items-center gap-3">\r
                        <div\r
                            class="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">\r
                            <span class="text-white font-bold text-sm">🚀</span>\r
                        </div>\r
                        <div>\r
                            <p class="text-sm font-medium text-gray-900">"Renovaron nuestra identidad por completo"</p>\r
                            <p class="text-xs text-gray-500 mt-1">Cliente Satisfecho</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">\r
            <div class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">\r
                <div class="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>\r
            </div>\r
        </div>\r
    </div>\r
</section>`,B=`<section class="bg-[#fef7ed] py-20 px-4 sm:px-6 lg:px-8">\r
    <div class="max-w-7xl mx-auto">\r
        <div class="text-center mb-16">\r
            <div\r
                class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-200 shadow-sm mb-6">\r
                <span class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>\r
                <span class="text-sm font-medium text-gray-700">Nuestras Especialidades</span>\r
            </div>\r
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">\r
                Servicios\r
                <span\r
                    class="block bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">\r
                    Creativos\r
                </span>\r
            </h2>\r
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">\r
                Soluciones integrales de diseño y desarrollo que transforman tu visión en realidad.\r
            </p>\r
        </div>\r
\r
        <div class="grid md:grid-cols-3 gap-8 mb-16">\r
            <!-- Servicio 1 -->\r
            <div\r
                class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg text-center">\r
                <div\r
                    class="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">\r
                    <img src="/icons/tv-svgrepo-com.svg" alt="Visual" class="w-8 h-8 text-white filter invert" />\r
                </div>\r
                <h3\r
                    class="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">\r
                    Visual</h3>\r
                <p class="text-gray-600 leading-relaxed">\r
                    Diseño gráfico con propósito. Logotipos, paletas de color, tipografía e ilustraciones que dan\r
                    coherencia\r
                    y vida a tu marca.\r
                </p>\r
            </div>\r
\r
            <!-- Servicio 2 -->\r
            <div\r
                class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-pink-100 hover:border-pink-200 transition-all duration-300 hover:shadow-lg text-center">\r
                <div\r
                    class="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">\r
                    <img src="/icons/negative-film-svgrepo-com.svg" alt="Video"\r
                        class="w-8 h-8 text-white filter invert" />\r
                </div>\r
                <h3\r
                    class="text-xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors duration-300">\r
                    Video</h3>\r
                <p class="text-gray-600 leading-relaxed">\r
                    Creamos videos que capturan la esencia de tu marca y la transmiten con claridad. Animaciones, spots\r
                    corporativos y contenido para redes.\r
                </p>\r
            </div>\r
\r
            <!-- Servicio 3 -->\r
            <div\r
                class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg text-center">\r
                <div\r
                    class="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">\r
                    <img src="/icons/signal-signal-tower-svgrepo-com.svg" alt="Online"\r
                        class="w-8 h-8 text-white filter invert" />\r
                </div>\r
                <h3\r
                    class="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">\r
                    Online</h3>\r
                <p class="text-gray-600 leading-relaxed">\r
                    Diseñamos y desarrollamos sitios web modernos. Experiencia digital a la altura de tu marca.\r
                </p>\r
            </div>\r
        </div>\r
\r
        <div\r
            class="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white overflow-hidden mb-16">\r
            <div class="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>\r
            <div class="absolute left-0 bottom-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>\r
\r
            <div class="relative grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">\r
                <div class="space-y-4">\r
                    <h4 class="text-xl font-bold mb-4">¿Empezamos desde cero o renovamos?</h4>\r
                    <p class="text-gray-300 leading-relaxed">\r
                        ¿Lanzando una nueva marca? Creamos todo desde cero: naming, identidad visual, estrategia y\r
                        materiales\r
                        digitales.\r
                    </p>\r
                </div>\r
\r
                <div class="space-y-4">\r
                    <h4 class="text-xl font-bold mb-4">Nos adaptamos a tu punto de partida</h4>\r
                    <p class="text-gray-300 leading-relaxed">\r
                        Marcas necesitadas de rediseño: podemos replantear toda la arquitectura o limar ciertos aspectos\r
                        según\r
                        cómo te perciba tu público actual.\r
                    </p>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="text-center">\r
            <a href="/casos-exito"\r
                class="group inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition-all duration-300 overflow-hidden">\r
                <span class="relative z-10">Ver Casos de Éxito</span>\r
                <div\r
                    class="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">\r
                </div>\r
            </a>\r
        </div>\r
    </div>\r
</section>`,N="/mentema/",i=N.replace(/\/$/,""),d=Object.assign({"./views/About.html":x,"./views/AvisoLegal.html":b,"./views/Contacto.html":f,"./views/Error404.html":h,"./views/Home.html":y,"./views/Privacidad.html":w,"./views/Services.html":k}),O=Object.assign({"./components/Footer.html":_,"./components/Hero.html":j,"./components/Navbar.html":g,"./components/SeccionAboutHero.html":E,"./components/SeccionAvisoLegal.html":C,"./components/SeccionContacto.html":S,"./components/SeccionContactoFormulario.html":M,"./components/SeccionContactoPrincipal.html":z,"./components/SeccionEquipo.html":q,"./components/SeccionEstrategia.html":A,"./components/SeccionMetodologia.html":L,"./components/SeccionPolitica.html":D,"./components/SeccionPremios.html":P,"./components/SeccionServicios.html":I,"./components/SeccionServiciosHero.html":T,"./components/SeccionServiciosOfertas.html":B}),c={"/":{view:"Home",components:[{name:"Hero",container:"hero"},{name:"SeccionEstrategia",container:"seccion-estrategia"},{name:"SeccionServicios",container:"seccion-servicios"},{name:"SeccionContacto",container:"seccion-contacto"}]},"/about":{view:"About",components:[{name:"SeccionAboutHero",container:"seccion-about-hero"},{name:"SeccionMetodologia",container:"seccion-metodologia"},{name:"SeccionEquipo",container:"seccion-equipo"},{name:"SeccionPremios",container:"seccion-premios"}]},"/services":{view:"Services",components:[{name:"SeccionServiciosHero",container:"seccion-servicios-hero"},{name:"SeccionServiciosOfertas",container:"seccion-servicios-ofertas"},{name:"SeccionContactoFormulario",container:"seccion-contacto-formulario"}]},"/contacto":{view:"Contacto",components:[{name:"SeccionContactoPrincipal",container:"seccion-contacto-principal"}]},"/privacidad":{view:"Privacidad",components:[{name:"SeccionPolitica",container:"seccion-politica"}]},"/avisolegal":{view:"AvisoLegal",components:[{name:"SeccionAvisoLegal",container:"seccion-aviso-legal"}]},"/404":{view:"Error404",components:[]}};function R(n){return d[`./views/${n}.html`]??d["./views/Error404.html"]??'<main class="p-8"><h1>404</h1><p>Vista no encontrada.</p></main>'}function m(n){return O[`./components/${n}.html`]??""}async function H(n,e){let a=document.getElementById(e);if(!a&&(console.warn(`[router] contenedor #${e} no existe. Inserto al final de #app.`),a=document.getElementById("app"),!a))return;const o=n.map(r=>m(r));a.insertAdjacentHTML("beforeend",o.join(""))}async function l(){let n=window.location.pathname;i&&n.startsWith(i)&&(n=n.slice(i.length)||"/"),n=n||"/",n.startsWith("/")||(n=`/${n}`);const e=c[n]||c["/404"],a=R(e.view),o=document.getElementById("app");o&&(o.innerHTML=a);const r=m("Footer"),t=document.getElementById("common-components");if(t?t.innerHTML=r:o&&o.insertAdjacentHTML("beforeend",r),e.components?.length)for(const{name:s,container:v}of e.components)await H([s],v)}function V(){document.body.addEventListener("click",async n=>{const e=n.target.closest("a[href]");if(!e||/^https?:\/\//i.test(e.href)&&!e.href.startsWith(window.location.origin)||e.target==="_blank")return;const a=e.getAttribute("href")||"/";if(a.startsWith("#"))return;let o=a.startsWith("/")?a:`/${a}`;const r=window.location.pathname.replace(new RegExp(`^${i}`),"")||"/";if(o===r)return;n.preventDefault();const t=`${i}${o}`;window.history.pushState(null,"",t),await l()})}document.addEventListener("DOMContentLoaded",()=>{});window.addEventListener("popstate",l);document.getElementById("navbar").innerHTML=g;const p=document.querySelector('button[aria-label="toggle menu"]'),u=document.getElementById("mobile-menu");p&&u&&p.addEventListener("click",()=>{u.classList.toggle("hidden")});l();V();window.addEventListener("popstate",l);
