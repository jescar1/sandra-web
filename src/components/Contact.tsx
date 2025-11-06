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
  { name: "Facebook", icon: Facebook, color: "from-blue-600 to-blue-700", href: "#" },
  { name: "Instagram", icon: Instagram, color: "from-pink-500 to-purple-600", href: "#" },
  { name: "LinkedIn", icon: Linkedin, color: "from-blue-500 to-blue-600", href: "#" },
  { name: "WhatsApp", icon: MessageCircle, color: "from-green-500 to-green-600", href: "#" },
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
                    /* Mantenemos una altura fija para evitar el scroll. 
                       Aumenta este valor si el formulario no cabe en 800px. */
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
                  data-height="undefined" // Usando el valor que proporcionaste
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
                    href="tel:+18139030657"
                    className="text-blue-200 hover:text-white transition-colors text-lg"
                  >
                    +1 813-903-0657
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

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-12 border-t border-white/20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-xl">
              <span className="text-blue-900">CM</span>
            </div>
            <div className="text-left">
              <div className="text-white">SANDRA CARDENAS</div>
              <div className="text-amber-400 text-xs tracking-wider">
                MORTGAGE GROUP
              </div>
            </div>
          </div>
          <p className="text-blue-200 mb-2">
            NMLS #183516 | Licensed in Florida
          </p>
          <p className="text-blue-300 text-sm">
            © 2025 Cardenas Mortgage Group. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}