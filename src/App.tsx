import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiTypescript, SiNestjs, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.2 } }
};

const projetos = [
  {
    title: "Plataforma iGaming Backend",
    desc: "API escalável com microserviços para processamento de apostas em tempo real.",
    techs: [<SiTypescript />, <SiNestjs />, "Redis", "PostgreSQL"],
  },
  {
    title: "Sistema de Gestão Clínica",
    desc: "Frontend moderno para agendamento e prontuário eletrônico de pacientes.",
    techs: [<SiNextdotjs />, <SiTypescript />, <SiTailwindcss />],
  },
  {
    title: "E-commerce API",
    desc: "Backend Fullstack com integração de portões de pagamento e JWT.",
    techs: [<SiTypescript />, <SiNestjs />, "Prisma"],
  }
];

function App() {
  return (
    <div className="min-h-screen font-sans">
      <header className="fixed top-0 left-0 w-full z-50 bg-bg-dark/80 backdrop-blur-sm border-b border-slate-800">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-white tracking-tighter"
          >
            WB<span className="text-accent">.</span>DEV
          </motion.span>
          <div className="flex gap-6 text-sm text-slate-400">
            {[{ name: 'Home', href: '#' }, { name: 'Projetos', href: '#projetos' }, { name: 'GitHub', href: 'https://github.com/WandersonBorgess' }, { name: 'Contato', href: 'https://wa.me/64984561128' }].map(item => (
              <a key={item.name} href={item.href} className="hover:text-white transition-colors" target={item.href.startsWith('http') ? '_blank' : '_self'} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <motion.main 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6">
            Desenvolvedor<br />
            <span className="bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent">Fullstack</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Especialista em construir aplicações robustas. Do backend escalável com <strong className="text-slate-200">NestJS</strong> ao frontend performático com <strong className="text-slate-200">Next.js</strong>.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex gap-4 justify-center">
            <a href="#projetos" className="bg-accent text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-colors duration-300 transform hover:scale-105">
              Ver Projetos
            </a>
            <a href="https://www.linkedin.com/in/wanderson-borges-rosa" target="_blank" className="bg-slate-800 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-700 transition-colors flex items-center gap-2" rel='noopener noreferrer'>
              <FaLinkedin /> LinkedIn
            </a>
          </motion.div>
        </motion.main>
      </section>

      <section id="projetos" className="py-20 px-6 bg-bg-card/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white tracking-tight mb-12 text-center"
          >
            Projetos em Destaque
          </motion.h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projetos.map((proj, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-bg-card p-6 rounded-2xl border border-slate-800 hover:border-accent/50 transition-colors duration-300 shadow-xl group"
              >
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">{proj.title}</h3>
                <p className="text-slate-400 mb-5 text-sm h-16">{proj.desc}</p>
                
                <div className="flex gap-3 text-2xl text-slate-600 mb-6 border-t border-slate-800 pt-4">
                  {proj.techs.map((tech, i) => (
                    <span key={i} title={typeof tech === 'string' ? tech : ''}>{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contato" className="py-20 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Vamos construir algo juntos?</h2>
          <p className="text-slate-400 mb-10">
            Estou aberto a novas oportunidades e colaborações em projetos desafiadores com TypeScript.
          </p>
          <a href="mailto:wanderson991.wb@gmail.com" className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-accent transition-colors duration-300"  rel='noopener noreferrer'>
            <FaEnvelope /> Entrar em Contato
          </a>
        </motion.div>
      </section>

      <footer className="py-8 px-6 border-t border-slate-800 text-center text-slate-600 text-sm">
        &copy; {new Date().getFullYear()} WB.DEV Wanderson. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;