import React from 'react'

const PrivacyPolicyES = () => {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Política de Privacidad
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Tu privacidad es importante para nosotros
          </p>
        </div>

        <div className="contact-card">
          <div className="text-gray-300 leading-relaxed space-y-6">
            <div>
              <p className="text-sm text-gray-400 mb-8">
                Última actualización: {new Date().toLocaleDateString('es-ES')}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Información que Recopilamos</h2>
              <p className="mb-4">
                Recopilamos información que nos proporcionas directamente, como cuando nos contactas a través de nuestro sitio web, 
                te suscribes a nuestro boletín o utilizas nuestros servicios.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Información de contacto (nombre, dirección de correo electrónico, número de teléfono)</li>
                <li>Información profesional (empresa, cargo)</li>
                <li>Mensajes y comunicaciones que nos envías</li>
                <li>Información de uso y datos analíticos</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Cómo Utilizamos tu Información</h2>
              <p className="mb-4">Utilizamos la información que recopilamos para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Proporcionar, mantener y mejorar nuestros servicios</li>
                <li>Responder a tus consultas y brindar atención al cliente</li>
                <li>Enviarte actualizaciones sobre nuestros servicios (con tu consentimiento)</li>
                <li>Analizar patrones de uso para mejorar la experiencia del usuario</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Compartir Información</h2>
              <p className="mb-4">
                No vendemos, intercambiamos ni transferimos tu información personal a terceros sin tu consentimiento, 
                excepto como se describe en esta política:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Proveedores de servicios que nos ayudan a operar nuestro sitio web y servicios</li>
                <li>Cuando sea requerido por ley o para proteger nuestros derechos</li>
                <li>En conexión con una transferencia o adquisición comercial</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Seguridad de Datos</h2>
              <p>
                Implementamos medidas de seguridad apropiadas para proteger tu información personal contra acceso no autorizado, 
                alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por internet es 100% seguro.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Retención de Datos</h2>
              <p>
                Conservamos tu información personal solo durante el tiempo necesario para cumplir con los propósitos descritos 
                en esta política de privacidad, a menos que la ley requiera o permita un período de retención más largo.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Tus Derechos</h2>
              <p className="mb-4">Dependiendo de tu ubicación, puedes tener los siguientes derechos:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Acceso a tu información personal</li>
                <li>Corrección de información inexacta</li>
                <li>Eliminación de tu información personal</li>
                <li>Objeción al procesamiento de tu información</li>
                <li>Portabilidad de datos</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Cookies y Seguimiento</h2>
              <p>
                Utilizamos cookies y tecnologías de seguimiento similares para mejorar tu experiencia de navegación, analizar 
                el tráfico del sitio y comprender las preferencias del usuario. Puedes controlar la configuración de cookies 
                a través de las preferencias de tu navegador.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Servicios de Terceros</h2>
              <p>
                Nuestro sitio web puede contener enlaces a sitios web o servicios de terceros. No somos responsables de las 
                prácticas de privacidad de estos terceros. Te recomendamos revisar sus políticas de privacidad.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Privacidad de Menores</h2>
              <p>
                Nuestros servicios no están destinados a menores de 13 años. No recopilamos conscientemente información personal 
                de menores de 13 años. Si nos enteramos de tal recopilación, eliminaremos la información inmediatamente.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Transferencias Internacionales de Datos</h2>
              <p>
                Tu información puede ser transferida y procesada en países distintos al tuyo. Nos aseguramos de que existan 
                las salvaguardas apropiadas para proteger tu información de acuerdo con esta política de privacidad.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Cambios a Esta Política</h2>
              <p>
                Podemos actualizar esta política de privacidad de vez en cuando. Te notificaremos de cualquier cambio publicando 
                la nueva política de privacidad en esta página y actualizando la fecha de "Última actualización".
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Contáctanos</h2>
              <p className="mb-4">
                Si tienes alguna pregunta sobre esta política de privacidad o nuestras prácticas de datos, por favor contáctanos:
              </p>
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 rounded-lg p-4 border border-gray-800">
                <p className="text-gray-300">
                  <strong>Correo electrónico:</strong>{' '}
                  <a href="mailto:gustavo.canaleslopez@gmail.com" className="text-blue-400 hover:text-blue-300">
                    gustavo.canaleslopez@gmail.com
                  </a>
                </p>
                <p className="text-gray-300 mt-2">
                  <strong>Empresa:</strong> DevLab
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/" className="btn btn-secondary">
            Volver al Inicio
          </a>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicyES