const WHATSAPP_NUMBER = '5493624216834';

const offersCatalog = [
    // Hogar
    {
        title: 'Juego de living', category: 'hogar', categoryLabel: 'Hogar', image: 'images/carruselMuebles.png',
        description: 'Renová tu living con un conjunto cómodo y funcional para disfrutar cada encuentro.',
        details: ['Opciones para living completo o compra individual.', 'Financiación según tu presupuesto.']
    },
    {
        title: 'Heladera no frost', category: 'hogar', categoryLabel: 'Hogar', image: 'images/carruselElectro.png',
        description: 'Equipá tu cocina con una heladera práctica, moderna y pensada para el uso diario.',
        details: ['Consultá modelos, medidas y disponibilidad.', 'Alternativas de financiación.']
    },
    {
        title: 'Lavarropas automático', category: 'hogar', categoryLabel: 'Hogar', image: 'images/quantum-cloud.jpg',
        description: 'Más practicidad para tu hogar con opciones pensadas para facilitar las tareas diarias.',
        details: ['Consultá capacidad, marcas y modelos.', 'Planes de financiación disponibles.']
    },
    {
        title: 'Dormitorio completo', category: 'hogar', categoryLabel: 'Hogar', image: 'images/neural-network.jpg',
        description: 'Armá un espacio cómodo y ordenado con alternativas para renovar tu dormitorio.',
        details: ['Opciones por conjunto o por pieza.', 'Alternativas adaptadas a tu presupuesto.']
    },
    {
        title: 'Smart TV 50 pulgadas', category: 'hogar', categoryLabel: 'Hogar', image: 'images/ar-interface.jpg',
        description: 'Disfrutá tus contenidos favoritos con una pantalla ideal para compartir en familia.',
        details: ['Consultá marcas, características y stock.', 'Financiación para renovar tu equipo.']
    },
    {
        title: 'Notebook para estudiar', category: 'hogar', categoryLabel: 'Hogar', image: 'images/data-nexus.jpg',
        description: 'Una herramienta versátil para estudiar, trabajar y llevar tus proyectos a donde quieras.',
        details: ['Consultá modelos y configuraciones.', 'Opciones de cuotas y financiación.']
    },
    {
        title: 'Cocina a gas', category: 'hogar', categoryLabel: 'Hogar', image: 'images/blockchain-vault.jpg',
        description: 'Renová tu cocina con una opción práctica para preparar tus comidas todos los días.',
        details: ['Consultá medidas y prestaciones.', 'Asesoramiento para elegir mejor.']
    },
    {
        title: 'Microondas digital', category: 'hogar', categoryLabel: 'Hogar', image: 'images/carruselElectro.png',
        description: 'Practicidad y rapidez para resolver tus comidas con un equipo funcional.',
        details: ['Modelos para distintos espacios.', 'Consultá disponibilidad y cuotas.']
    },
    {
        title: 'Aire acondicionado', category: 'hogar', categoryLabel: 'Hogar', image: 'images/quantum-cloud.jpg',
        description: 'Disfrutá una temperatura agradable en tu casa durante todo el año.',
        details: ['Opciones según el tamaño del ambiente.', 'Consultá equipos y financiación.']
    },
    {
        title: 'Colchón matrimonial', category: 'hogar', categoryLabel: 'Hogar', image: 'images/neural-network.jpg',
        description: 'Mejorá tu descanso con alternativas cómodas para renovar tu dormitorio.',
        details: ['Diferentes medidas y niveles de firmeza.', 'Opciones de compra y financiación.']
    },
    {
        title: 'Mesa y sillas de comedor', category: 'hogar', categoryLabel: 'Hogar', image: 'images/carruselMuebles.png',
        description: 'Un conjunto pensado para compartir comidas y encuentros en familia.',
        details: ['Opciones para espacios chicos o amplios.', 'Consultá materiales y medidas.']
    },
    {
        title: 'Placard seis puertas', category: 'hogar', categoryLabel: 'Hogar', image: 'images/data-nexus.jpg',
        description: 'Más orden y capacidad para aprovechar mejor cada ambiente de tu casa.',
        details: ['Alternativas para dormitorios y vestidores.', 'Asesoramiento para elegir medidas.']
    },
    {
        title: 'Escritorio home office', category: 'hogar', categoryLabel: 'Hogar', image: 'images/carruselEquipo.png',
        description: 'Creá un espacio cómodo para trabajar o estudiar con todo a mano.',
        details: ['Opciones para espacios grandes o reducidos.', 'Complementos para organizar tu ambiente.']
    },
    {
        title: 'Sillón reclinable', category: 'hogar', categoryLabel: 'Hogar', image: 'images/carruselMuebles.png',
        description: 'Sumá comodidad a tu living con un sillón ideal para descansar.',
        details: ['Diseños para distintos estilos de hogar.', 'Consultá tapizados y disponibilidad.']
    },
    {
        title: 'Bicicleta fija', category: 'hogar', categoryLabel: 'Hogar', image: 'images/movilidad/bicicletas/portadaBicicletas.png',
        description: 'Entrená en casa con una alternativa práctica para moverte todos los días.',
        details: ['Ideal para rutinas en espacios reducidos.', 'Consultá modelos y financiación.']
    },

    // Equipamientos comerciales
    {
        title: 'Freezer comercial', category: 'comercial', categoryLabel: 'Equipamientos comerciales', image: 'images/carruselElectro.png',
        description: 'Conservá mercadería y organizá mejor el almacenamiento de tu negocio.',
        details: ['Opciones para distintos volúmenes de trabajo.', 'Consultá capacidad y consumo.']
    },
    {
        title: 'Vitrina exhibidora', category: 'comercial', categoryLabel: 'Equipamientos comerciales', image: 'images/ar-interface.jpg',
        description: 'Presentá tus productos de forma atractiva y facilitá la elección de tus clientes.',
        details: ['Modelos para alimentos y productos varios.', 'Alternativas según tu espacio.']
    },
    {
        title: 'Heladera mostrador', category: 'comercial', categoryLabel: 'Equipamientos comerciales', image: 'images/quantum-cloud.jpg',
        description: 'Combiná exhibición y conservación en un equipo pensado para tu comercio.',
        details: ['Ideal para almacenes, bares y locales.', 'Consultá medidas y disponibilidad.']
    },
    {
        title: 'Horno pizzero', category: 'comercial', categoryLabel: 'Equipamientos comerciales', image: 'images/blockchain-vault.jpg',
        description: 'Equipá tu cocina profesional para preparar pizzas y productos horneados.',
        details: ['Alternativas para distintos ritmos de producción.', 'Asesoramiento para elegir capacidad.']
    },
    {
        title: 'Cortadora de fiambre', category: 'comercial', categoryLabel: 'Equipamientos comerciales', image: 'images/data-nexus.jpg',
        description: 'Agilizá el trabajo diario con una herramienta precisa y fácil de usar.',
        details: ['Pensada para almacenes y fiambrerías.', 'Consultá modelos y prestaciones.']
    },
    {
        title: 'Balanza comercial', category: 'comercial', categoryLabel: 'Equipamientos comerciales', image: 'images/carruselEquipo.png',
        description: 'Pesá y controlá tus productos con mayor precisión en cada venta.',
        details: ['Opciones para mostrador y atención al público.', 'Consultá capacidad y funciones.']
    },
    {
        title: 'Estantería metálica', category: 'comercial', categoryLabel: 'Equipamientos comerciales', image: 'images/neural-network.jpg',
        description: 'Organizá stock, herramientas y mercadería aprovechando cada metro.',
        details: ['Soluciones para depósitos y salones.', 'Consultá tamaños y configuraciones.']
    },
    {
        title: 'Mostrador de atención', category: 'comercial', categoryLabel: 'Equipamientos comerciales', image: 'images/carruselMuebles.png',
        description: 'Dale a tu local un punto de atención cómodo, ordenado y profesional.',
        details: ['Diseños para distintos rubros.', 'Opciones de medidas y terminaciones.']
    },
    {
        title: 'Kit de cámaras de seguridad', category: 'comercial', categoryLabel: 'Equipamientos comerciales', image: 'images/cyber-defense.jpg',
        description: 'Sumá herramientas de control para cuidar tu local y tu mercadería.',
        details: ['Kits para pequeños y medianos comercios.', 'Consultá instalación y alcance.']
    },
    {
        title: 'Impresora térmica', category: 'comercial', categoryLabel: 'Equipamientos comerciales', image: 'images/iot-matrix.jpg',
        description: 'Agilizá la emisión de comprobantes y la gestión de tus ventas.',
        details: ['Soluciones para caja y mostrador.', 'Consultá compatibilidad y modelos.']
    },
    {
        title: 'Computadora para comercio', category: 'comercial', categoryLabel: 'Equipamientos comerciales', image: 'images/quantum-cloud.jpg',
        description: 'Una herramienta para administrar ventas, stock y tareas de tu negocio.',
        details: ['Configuraciones para distintos usos.', 'Opciones de financiación disponibles.']
    },
    {
        title: 'Aire acondicionado comercial', category: 'comercial', categoryLabel: 'Equipamientos comerciales', image: 'images/ar-interface.jpg',
        description: 'Mantené tu espacio de trabajo confortable para clientes y equipo.',
        details: ['Alternativas para salones y oficinas.', 'Consultá potencia y disponibilidad.']
    },

    // Movilidad
    {
        title: 'Moto urbana 110 cc', category: 'movilidad', categoryLabel: 'Movilidad', image: 'images/movilidad/motos/portadaMotos.png',
        description: 'Una alternativa ágil para trabajar, estudiar y moverte todos los días.',
        details: ['Consultá versiones y unidades disponibles.', 'Cuotas y financiación.']
    },
    {
        title: 'Moto utilitaria 150 cc', category: 'movilidad', categoryLabel: 'Movilidad', image: 'images/categoriaMovilidad.png',
        description: 'Más fuerza y versatilidad para acompañar tus recorridos y tu trabajo.',
        details: ['Modelos para uso personal o laboral.', 'Consultá cilindrada y condiciones.']
    },
    {
        title: 'Scooter urbana', category: 'movilidad', categoryLabel: 'Movilidad', image: 'images/movilidad/motos/portadaMotos.png',
        description: 'Movilidad práctica para trasladarte por la ciudad con comodidad.',
        details: ['Diseño ágil para recorridos urbanos.', 'Alternativas de financiación.']
    },
    {
        title: 'Moto enduro', category: 'movilidad', categoryLabel: 'Movilidad', image: 'images/movilidad/motos/portadaMotos.png',
        description: 'Una opción para quienes buscan aventura y mayor capacidad de recorrido.',
        details: ['Consultá modelos y equipamiento.', 'Asesoramiento personalizado.']
    },
    {
        title: 'Bicicleta urbana', category: 'movilidad', categoryLabel: 'Movilidad', image: 'images/movilidad/bicicletas/portadaBicicletas.png',
        description: 'Movete de manera práctica y saludable en tus recorridos diarios.',
        details: ['Consultá rodados, modelos y accesorios.', 'Financiación disponible.']
    },
    {
        title: 'Bicicleta MTB rodado 29', category: 'movilidad', categoryLabel: 'Movilidad', image: 'images/movilidad/bicicletas/1.png',
        description: 'Una bicicleta versátil para disfrutar caminos urbanos y al aire libre.',
        details: ['Opciones para distintos niveles de uso.', 'Consultá componentes y stock.']
    },
    {
        title: 'Bicicleta infantil', category: 'movilidad', categoryLabel: 'Movilidad', image: 'images/movilidad/bicicletas/2.png',
        description: 'Una compañera para que los más chicos descubran el movimiento.',
        details: ['Modelos para diferentes edades.', 'Consultá rodado y colores.']
    },
    {
        title: 'Bicicleta eléctrica', category: 'movilidad', categoryLabel: 'Movilidad', image: 'images/movilidad/bicicletas/3.png',
        description: 'Sumá asistencia a tus recorridos y llegá más lejos con menos esfuerzo.',
        details: ['Consultá autonomía y equipamiento.', 'Alternativas de pago y financiación.']
    },
    {
        title: 'Casco integral', category: 'movilidad', categoryLabel: 'Movilidad', image: 'images/movilidad/bicicletas/4.png',
        description: 'Completá tu equipo de movilidad con una opción de protección y comodidad.',
        details: ['Diferentes talles y diseños.', 'Consultá disponibilidad.']
    },
    {
        title: 'Baúl para moto', category: 'movilidad', categoryLabel: 'Movilidad', image: 'images/movilidad/bicicletas/5.png',
        description: 'Más espacio para trasladar objetos de forma práctica durante tus recorridos.',
        details: ['Opciones para distintos modelos.', 'Consultá capacidad y colocación.']
    },
    {
        title: 'Kit de luces para bicicleta', category: 'movilidad', categoryLabel: 'Movilidad', image: 'images/movilidad/bicicletas/6.png',
        description: 'Mejorá tu visibilidad y disfrutá tus recorridos con mayor tranquilidad.',
        details: ['Accesorios para uso urbano.', 'Consultá modelos y compatibilidad.']
    },
    {
        title: 'Portaequipaje para bicicleta', category: 'movilidad', categoryLabel: 'Movilidad', image: 'images/movilidad/bicicletas/portadaBicicletas.png',
        description: 'Llevá tus pertenencias con más comodidad en tus salidas y traslados.',
        details: ['Soluciones para distintos rodados.', 'Consultá instalación y capacidad.']
    },
    {
        title: 'Moto para trabajar', category: 'movilidad', categoryLabel: 'Movilidad', image: 'images/categoriaMovilidad.png',
        description: 'Una opción de movilidad para ganar independencia y acompañar tus objetivos laborales.',
        details: ['Consultá cilindradas y modelos.', 'Gestión ágil y acompañada.']
    }
];

const catalogGrid = document.getElementById('offersCatalogGrid');
const searchInput = document.getElementById('offersSearch');
const resultCount = document.getElementById('offersResultsCount');
const filterButtons = document.querySelectorAll('[data-category-filter]');
let selectedCategory = 'todos';

function normalizeText(value) {
    return value
        .toLocaleLowerCase('es')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

function buildWhatsappLink(productTitle) {
    const message = `Hola, quiero consultar por ${productTitle}.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function createOfferCard(offer) {
    const details = offer.details.map((detail) => `<li>${detail}</li>`).join('');
    return `
        <article class="product-card catalog-offer-card" data-category="${offer.category}">
            <div class="product-image">
                <img src="${offer.image}" alt="${offer.title}" loading="lazy">
            </div>
            <div class="product-content">
                <span class="catalog-category">${offer.categoryLabel}</span>
                <span class="offer-badge">Oferta semanal</span>
                <h3 class="product-title">${offer.title}</h3>
                <p class="product-description">${offer.description}</p>
                <ul class="product-details">${details}</ul>
                <a class="offer-cta" href="${buildWhatsappLink(offer.title)}" target="_blank" rel="noopener" aria-label="Consultar por WhatsApp: ${offer.title}">Consultar por WhatsApp</a>
            </div>
        </article>
    `;
}

function renderOffers() {
    const searchTerm = normalizeText(searchInput.value.trim());
    const filteredOffers = offersCatalog.filter((offer) => {
        const matchesCategory = selectedCategory === 'todos' || offer.category === selectedCategory;
        const searchableText = normalizeText(`${offer.title} ${offer.categoryLabel} ${offer.description} ${offer.details.join(' ')}`);
        return matchesCategory && (!searchTerm || searchableText.includes(searchTerm));
    });

    catalogGrid.innerHTML = filteredOffers.length
        ? filteredOffers.map(createOfferCard).join('')
        : '<p class="offers-empty-state">No encontramos productos con esos filtros. Probá con otra búsqueda.</p>';

    resultCount.textContent = `${filteredOffers.length} ${filteredOffers.length === 1 ? 'producto encontrado' : 'productos encontrados'}`;
}

searchInput.addEventListener('input', renderOffers);

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        selectedCategory = button.dataset.categoryFilter;
        filterButtons.forEach((filterButton) => filterButton.classList.remove('active'));
        button.classList.add('active');
        renderOffers();
    });
});

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

function toggleOffersMenu() {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

menuToggle.addEventListener('click', toggleOffersMenu);
menuToggle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleOffersMenu();
    }
});

navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

renderOffers();
