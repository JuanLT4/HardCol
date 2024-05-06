import { Hero } from "@/components";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col justify-center items-center m-auto relative mt-12 padding-x padding-y max-width">
      <Hero>
        <div className="markdown prose w-full break-words dark:prose-invert light list-disc">
          <p>Política de Privacidad</p>
          <p>
            En nombre de HardCol, valoramos profundamente su privacidad y nos
            comprometemos a proteger la información personal que nos
            proporciona. Esta Política de Privacidad describe cómo recopilamos,
            utilizamos y protegemos su información cuando utiliza nuestros
            servicios o visita nuestro sitio web.
          </p>
          <ol>
            <li>
              <p>Información que Recopilamos:</p>
              <ul>
                <li>
                  Información de Contacto: Recopilamos su nombre, dirección de
                  correo electrónico y número de teléfono cuando realiza una
                  compra o se suscribe a nuestro boletín informativo.
                </li>
                <li>
                  Información de Pago: Recopilamos la información de pago
                  necesaria para procesar sus transacciones, como el número de
                  tarjeta de crédito o la dirección de facturación.
                </li>
                <li>
                  Información de la Cuenta: Si crea una cuenta en nuestro sitio
                  web, recopilamos su nombre de usuario y contraseña.
                </li>
                <li>
                  Información de Navegación: Podemos recopilar información sobre
                  cómo interactúa con nuestro sitio web, como las páginas que
                  visita y los productos que ve.
                </li>
                <li>
                  Información Adicional: También podemos recopilar otra
                  información que nos proporcione voluntariamente, como
                  comentarios o preguntas que nos envíe.
                </li>
              </ul>
            </li>
            <li>
              <p>Uso de la Información:</p>
              <ul>
                <li>
                  Procesamiento de Pedidos: Utilizamos su información para
                  procesar sus pedidos y proporcionarle los productos que ha
                  solicitado.
                </li>
                <li>
                  Comunicación: Utilizamos su información de contacto para
                  enviarle actualizaciones sobre su pedido, responder a sus
                  consultas y enviarle información sobre promociones o eventos
                  especiales.
                </li>
                <li>
                  Mejora de Servicios: Utilizamos la información recopilada para
                  mejorar nuestros productos y servicios, así como para
                  personalizar su experiencia en nuestro sitio web.
                </li>
                <li>
                  Marketing: Podemos utilizar su información para enviarle
                  material de marketing relacionado con nuestros productos y
                  servicios, pero solo si ha dado su consentimiento para recibir
                  dichas comunicaciones.
                </li>
              </ul>
            </li>
            <li>
              <p>Protección de la Información:</p>
              <ul>
                <li>
                  Seguridad: Implementamos medidas de seguridad físicas,
                  técnicas y administrativas para proteger su información contra
                  accesos no autorizados, uso indebido o divulgación.
                </li>
                <li>
                  Retención de Datos: Solo conservamos su información durante el
                  tiempo necesario para cumplir con los fines para los que fue
                  recopilada, o según lo exija la ley.
                </li>
                <li>
                  No Venta de Información: No vendemos ni alquilamos su
                  información personal a terceros.
                </li>
              </ul>
            </li>
            <li>
              <p>Cookies y Tecnologías Similares:</p>
              <ul>
                <li>
                  Utilizamos cookies y tecnologías similares para mejorar su
                  experiencia en nuestro sitio web y recopilar información sobre
                  cómo interactúa con nosotros. Puede administrar la
                  configuración de cookies en su navegador web.
                </li>
              </ul>
            </li>
            <li>
              <p>Consentimiento:</p>
              <ul>
                <li>
                  Al utilizar nuestro sitio web o proporcionarnos su información
                  de cualquier otra manera, usted acepta esta Política de
                  Privacidad y nos otorga su consentimiento para el
                  procesamiento de su información de acuerdo con los fines
                  descritos aquí.
                </li>
              </ul>
            </li>
            <li>
              <p>Cambios en la Política de Privacidad:</p>
              <ul>
                <li>
                  Nos reservamos el derecho de actualizar esta Política de
                  Privacidad en cualquier momento. Cualquier cambio será
                  efectivo cuando publiquemos la versión revisada en nuestro
                  sitio web.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            Si tiene alguna pregunta sobre nuestra Política de Privacidad o
            sobre cómo manejamos su información, no dude en ponerse en contacto
            con nosotros a través de los datos proporcionados en nuestro sitio
            web.
          </p>
        </div>
      </Hero>
    </main>
  );
};

export default page;
