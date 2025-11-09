import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const socialLinks = [
  { name: "Facebook", icon: Facebook, color: "from-blue-600 to-blue-700", href: "https://www.facebook.com/CardenasHomeLoans" },
  { name: "Instagram", icon: Instagram, color: "from-pink-500 to-purple-600", href: "https://www.instagram.com/cardenashomeloans/" },
  { name: "LinkedIn", icon: Linkedin, color: "from-blue-500 to-blue-600", href: "https://www.linkedin.com/in/sandra-cardenas-313b5131/" },
  { name: "WhatsApp", icon: MessageCircle, color: "from-green-500 to-green-600", href: "https://wa.me/+18138208028" },
];

export function Contact() {
  useEffect(() => {
    // Cargar el script de GoHighLevel solo una vez
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
    >
      {/* EFECTOS DE FONDO */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-72 h-72 bg-amber-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-4">Contact Me</h2>
          <p className="text-xl text-blue-200">
            I'm here to help you achieve your financial goals
          </p>
        </motion.div>

        {/* GRID PRINCIPAL */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* FORMULARIO GOHIGHLEVEL */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 relative overflow-hidden">
              <h3 className="text-white text-2xl mb-6 absolute top-8 left-8">
                Send me a Message
              </h3>

              <div className="w-full mt-16">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/kzzdvfVPer0FaYKWTp9J"
                  id="inline-kzzdvfVPer0FaYKWTp9J"
                  title="Website Form"
                  style={{
                    width: "100%",
                    height: "800px",
                    border: "none",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                  scrolling="no"
                  allow="fullscreen"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Website Form"
                  data-height="undefined"
                  data-layout-iframe-id="inline-kzzdvfVPer0FaYKWTp9J"
                  data-form-id="kzzdvfVPer0FaYKWTp9J"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* INFORMACIÓN DE CONTACTO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* PHONE */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-white mb-2">Phone</div>
                  <a
                    href="tel:+18138208028"
                    className="text-blue-200 hover:text-white transition-colors text-lg"
                  >
                    +1 813-820-8028
                  </a>
                  <p className="text-blue-300 text-sm mt-1">
                    Mon - Fri: 9AM - 6PM
                  </p>
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-white mb-2">Email</div>
                  <a
                    href="mailto:Sandra@cardenasmortgagegroup.com"
                    className="text-blue-200 hover:text-white transition-colors break-all"
                  >
                    Sandra@cardenasmortgagegroup.com
                  </a>
                  <p className="text-blue-300 text-sm mt-1">
                    Response within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* LOCATION */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-white mb-2">Location</div>
                  <p className="text-blue-200">
                    1958 W. Dr. Martin Luther King Blvd
                    <br />
                    Tampa, FL 33605
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-white text-xl mb-6">
                Follow Me on Social Media
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} className="group">
                    <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}
                      >
                        <social.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-white text-center text-sm">
                        {social.name}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* FOOTER ACTUALIZADO */}
<motion.footer
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="pt-10 border-t border-white/20 bg-gradient-to-b from-blue-900 to-blue-950"
>
  <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-blue-200 text-sm px-6 pb-6 text-center">
    {/* LOGO */}
    <img
      src="/cardenas-logo.jpg"
      alt="Cardenas Mortgage Group Logo"
      className="object-contain"
      style={{
        width: "150px",
        height: "auto",
        borderRadius: "10px",
      }}
    />

    {/* LICENCIA */}
    <p className="text-blue-200">
      NMLS #1183490 | Licensed in Florida
    </p>

    {/* COPYRIGHT */}
    <p className="text-blue-300">
      © 2025 Cardenas Mortgage Group. All rights reserved.
    </p>
  </div>
</motion.footer>

      </div>
    </section>
  );
}
