import services from '../data/services-bilbao.json';

const photos = {
  cuba: {
    src: '/assets/service-photos/camion-cuba.webp',
    width: 680,
    height: 453,
    alt: 'Un operario prepara el camión cuba de Saneamientos Mungia',
  },
  furgoneta: {
    src: '/assets/service-photos/furgoneta-bilbao.webp',
    width: 680,
    height: 453,
    alt: 'Operario y furgoneta de Saneamientos Mungia en Bilbao',
  },
  camion: {
    src: '/assets/service-photos/camion-en-ruta.webp',
    width: 680,
    height: 466,
    alt: 'Camión de Saneamientos Mungia circulando por una calle',
  },
};

// Each page points to three distinct services that may be the reader's next step.
const connections = {
  'mantenimiento-de-la-red-de-saneamiento': ['cuba', 'limpiezas-en-redes-de-saneamientos', 'inspeccion-tuberias', 'limpieza-alcantarillado-mantenimiento-red'],
  'limpiezas-en-redes-de-saneamientos': ['camion', 'mantenimiento-de-la-red-de-saneamiento', 'inspeccion-tuberias-camara-robotizada', 'desatranco-tuberias'],
  'desatascos-24h-urgentes': ['furgoneta', 'desatascos-urgentes-24-horas-bilbao', 'desatrancos-urgentes', 'limpiezas-en-redes-de-saneamientos'],
  'fosas-septicas-limpieza': ['cuba', 'instalacion-fosas-septicas', 'red-saneamiento-vivienda-familiar', 'desatranco-tuberias'],
  'desatrancos': ['cuba', 'desatrancos-urgentes', 'desatranco-tuberias', 'inspeccion-tuberias'],
  'desatrancos-urgentes': ['furgoneta', 'desatrancos', 'desatascos-24h-urgentes', 'reparacion-bajantes-comunidad'],
  'desatranco-tuberias': ['furgoneta', 'desatrancos', 'inspeccion-tuberias', 'robot-fresador-tuberias'],
  'reparacion-bajantes': ['furgoneta', 'reparacion-bajantes-sin-obra', 'reparar-bajante-pvc', 'rehabilitacion-bajantes'],
  'reparacion-bajantes-sin-obra': ['furgoneta', 'arreglo-bajantes', 'rehabilitacion-bajantes-sin-obras', 'reparacion-bajantes-comunidad'],
  'arreglo-bajantes': ['furgoneta', 'reparacion-bajantes', 'reparar-bajante-pvc', 'red-saneamiento-edificio'],
  'rehabilitacion-bajantes-sin-obras': ['furgoneta', 'rehabilitacion-bajantes', 'reparacion-bajantes-sin-obra', 'prueba-hermeticidad-drenaje-sanitario'],
  'reparacion-bajantes-comunidad': ['furgoneta', 'red-saneamiento-edificio', 'reparacion-bajantes', 'rehabilitacion-bajantes-sin-obras'],
  'rehabilitacion-bajantes': ['furgoneta', 'reparacion-bajantes-comunidad', 'rehabilitacion-bajantes-sin-obras', 'rehabilitacion-tuberias-sin-obras'],
  'reparacion-tuberias-sin-zanja': ['camion', 'rehabilitacion-tuberias-sin-zanja', 'reparacion-tuberias-manga', 'rehabilitacion-tuberias-camara'],
  'rehabilitacion-tuberias-sin-zanja': ['camion', 'reparacion-tuberias-sin-zanja', 'rehabilitacion-redes-saneamiento', 'prueba-estanqueidad-alcantarillado'],
  'reparar-bajante-pvc': ['furgoneta', 'arreglo-bajantes', 'reparacion-bajantes-sin-obra', 'prueba-hermeticidad-drenaje-sanitario'],
  'rehabilitacion-tuberias-camara': ['furgoneta', 'inspeccion-tuberias-camara-robotizada', 'rehabilitacion-tuberias', 'reparacion-tuberias-manga'],
  'rehabilitacion-tuberias-sin-obras': ['furgoneta', 'rehabilitacion-tuberias', 'reparacion-tuberias-manga', 'rehabilitacion-bajantes'],
  'rehabilitacion-tuberias': ['camion', 'rehabilitacion-tuberias-camara', 'rehabilitacion-tuberias-sin-obras', 'rehabilitacion-tuberias-sin-zanja'],
  'reparacion-tuberias-manga': ['furgoneta', 'rehabilitacion-tuberias-sin-zanja', 'robot-fresador-tuberias', 'inspeccion-tuberias-camara-robotizada'],
  'prueba-estanqueidad-alcantarillado': ['camion', 'saneamiento-alcantarillado', 'prueba-hermeticidad-drenaje-sanitario', 'rehabilitacion-redes-saneamiento'],
  'prueba-hermeticidad-drenaje-sanitario': ['furgoneta', 'prueba-estanqueidad-alcantarillado', 'red-saneamiento-edificio', 'reparacion-bajantes-comunidad'],
  'red-evacuacion-aguas-pluviales': ['camion', 'red-evacuacion-aguas-residuales-pluviales', 'red-saneamiento-separativa', 'canalizacion-arquetas'],
  'red-evacuacion-aguas-residuales-pluviales': ['camion', 'red-evacuacion-aguas-pluviales', 'red-saneamiento-separativa', 'red-saneamiento-edificio'],
  'red-saneamiento-edificio': ['furgoneta', 'reparacion-bajantes-comunidad', 'tipos-redes-saneamiento', 'red-evacuacion-aguas-residuales-pluviales'],
  'red-saneamiento-vivienda-familiar': ['furgoneta', 'instalacion-fosas-septicas', 'canalizacion-arquetas', 'tipos-redes-saneamiento'],
  'red-saneamiento-municipal': ['camion', 'saneamiento-alcantarillado', 'redes-locales-abastecimiento-saneamiento', 'rehabilitacion-redes-saneamiento'],
  'red-saneamiento-separativa': ['camion', 'red-evacuacion-aguas-residuales-pluviales', 'tipos-redes-saneamiento', 'redes-locales-abastecimiento-saneamiento'],
  'redes-locales-abastecimiento-saneamiento': ['camion', 'red-saneamiento-municipal', 'red-saneamiento-separativa', 'prueba-estanqueidad-alcantarillado'],
  'saneamiento-alcantarillado': ['cuba', 'limpieza-alcantarillado-mantenimiento-red', 'red-saneamiento-municipal', 'inspeccion-tuberias-camara-robotizada'],
  'tipos-redes-saneamiento': ['camion', 'red-saneamiento-separativa', 'red-saneamiento-vivienda-familiar', 'red-saneamiento-municipal'],
  'inspeccion-tuberias': ['furgoneta', 'inspeccion-tuberias-camara-robotizada', 'limpiezas-en-redes-de-saneamientos', 'rehabilitacion-tuberias-camara'],
  'rehabilitacion-redes-saneamiento': ['camion', 'rehabilitacion-tuberias-sin-zanja', 'reparacion-tuberias-sin-zanja', 'prueba-estanqueidad-alcantarillado'],
  'canalizacion-arquetas': ['cuba', 'red-saneamiento-vivienda-familiar', 'red-evacuacion-aguas-pluviales', 'reparacion-tuberias-sin-zanja'],
  'inspeccion-tuberias-camara-robotizada': ['furgoneta', 'inspeccion-tuberias', 'robot-fresador-tuberias-raices', 'rehabilitacion-tuberias-camara'],
  'limpieza-alcantarillado-mantenimiento-red': ['cuba', 'mantenimiento-de-la-red-de-saneamiento', 'limpiezas-en-redes-de-saneamientos', 'saneamiento-alcantarillado'],
  'robot-fresador-tuberias-raices': ['camion', 'robot-fresador-tuberias', 'reparacion-tuberias-sin-zanja', 'reparacion-tuberias-manga'],
  'robot-fresador-tuberias': ['camion', 'robot-fresador-tuberias-raices', 'reparacion-tuberias-manga', 'rehabilitacion-tuberias'],
  'instalacion-fosas-septicas': ['cuba', 'fosas-septicas-limpieza', 'red-saneamiento-vivienda-familiar', 'red-evacuacion-aguas-pluviales'],
};

export function serviceHub(path) {
  const slug = path.split('/').filter(Boolean).at(-1);
  const connection = connections[slug];
  if (!services[path] || !connection) throw new Error(`Falta el bloque de servicios para ${path}`);
  const [photo, ...related] = connection;
  const links = related.map((target) => {
    if (target === 'desatascos-urgentes-24-horas-bilbao') {
      return { href: '/desatascos-urgentes-24-horas-bilbao/', label: 'Desatascos urgentes en Bilbao' };
    }
    const href = target === 'desatrancos' ? '/desatrancos/' : `/servicios/${target}/`;
    const heading = services[href]?.heading;
    if (!heading || href === path) throw new Error(`Enlace relacionado inválido desde ${path}: ${href}`);
    const label = heading.replace(/ en (Bilbao(?: y Bizkaia)?|Bizkaia, con atención en Bilbao)$/, '');
    return { href, label };
  });
  return { photo: photos[photo], links };
}
