import { Hero } from "@/components";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col justify-center items-center m-auto relative mt-12 padding-x padding-y max-width">
      <Hero>
        <div className="markdown prose w-full break-words dark:prose-invert light">
          <p>Términos de Uso</p>
          <p>
            Por favor, lea atentamente los siguientes términos antes de utilizar
            nuestros servicios. Al acceder o utilizar cualquier parte de
            nuestros servicios, usted acepta estos términos en su totalidad. Si
            no está de acuerdo con alguno de estos términos, no utilice nuestros
            servicios.
          </p>
          <ol>
            <li>
              <p>Uso de Nuestros Servicios:</p>
              <ul>
                <li>
                  Usted acepta utilizar nuestros servicios solo con fines
                  legales y de acuerdo con estos Términos de Uso.
                </li>
                <li>
                  Se compromete a no utilizar nuestros servicios de ninguna
                  manera que pueda dañar, deshabilitar, sobrecargar o perjudicar
                  la disponibilidad o accesibilidad de nuestros servicios.
                </li>
              </ul>
            </li>
            <li>
              <p>Contenido de Usuario:</p>
              <ul>
                <li>
                  Usted es responsable del contenido que publique o comparta a
                  través de nuestros servicios, y garantiza que tiene todos los
                  derechos necesarios para hacerlo.
                </li>
                <li>
                  Nos reservamos el derecho de eliminar cualquier contenido que
                  consideremos inapropiado o que viole estos Términos de Uso.
                </li>
              </ul>
            </li>
            <li>
              <p>Propiedad Intelectual:</p>
              <ul>
                <li>
                  Todos los derechos de propiedad intelectual en nuestros
                  servicios (incluidos textos, gráficos, logotipos, iconos,
                  imágenes, clips de audio, descargas digitales, compilaciones
                  de datos y software) son propiedad de Hardcol o de sus licenciantes.
                </li>
              </ul>
            </li>
            <li>
              <p>Enlaces a Terceros:</p>
              <ul>
                <li>
                  Nuestros servicios pueden contener enlaces a sitios web de
                  terceros. Estos enlaces son proporcionados únicamente para su
                  conveniencia, y no respaldamos ni tenemos control sobre el
                  contenido de estos sitios web.
                </li>
              </ul>
            </li>
            <li>
              <p>Limitación de Responsabilidad:</p>
              <ul>
                <li>
                  En la medida máxima permitida por la ley aplicable, Hardcol y sus afiliados no serán
                  responsables por ningún daño directo, indirecto, incidental,
                  especial, consecuente o punitivo que surja de o esté
                  relacionado con el uso de nuestros servicios.
                </li>
              </ul>
            </li>
            <li>
              <p>Modificaciones de los Términos de Uso:</p>
              <ul>
                <li>
                  Nos reservamos el derecho de modificar estos Términos de Uso
                  en cualquier momento. Cualquier cambio será efectivo cuando
                  publiquemos la versión revisada en nuestro sitio web.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            Al utilizar nuestros servicios, usted acepta cumplir con estos
            Términos de Uso. Si tiene alguna pregunta sobre estos términos, no
            dude en ponerse en contacto con nosotros.
          </p>
        </div>
      </Hero>
    </main>
  );
};

export default page;
