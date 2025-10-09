type ProjectsType = {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  techs: string[];
};

export const ProjectsData: ProjectsType[] = [
  {
    title: "AndesFinance",
    description:
      "Dashboard financeiro voltado para gestão inteligente de gastos mensais, com relatórios visuais, acompanhamento de saldo, métodos de pagamento e interface intuitiva para controle simplificado.",
    image: "https://i.imgur.com/P1Wd6pD.png",
    link: "https://andesfinance.vercel.app/",
    techs: ["react", "typescript", "tailwind"],
    github: "https://github.com/VitorAndes/andesfinance",
  },
  {
    title: "Haru-hub",
    description:
      "Site interativo que consome a API da Steam para exibir a minha biblioteca de jogos, mostrando informações detalhadas, jogos recentes e filtros para navegação prática.",
    image: "https://i.imgur.com/0APFotZ.png",
    link: "https://haru-hub-frontend.vercel.app/",
    techs: ["react", "typescript", "tailwind"],
    github: "https://github.com/VitorAndes/Haru-Hub_frontend",
  },
  {
    title: "Powerblessed",
    description:
      "Landing page moderna desenvolvida para uma empresa de energia solar, focada em apresentar serviços, transmitir credibilidade e facilitar o contato com clientes, com design limpo e responsivo.",
    image: "https://i.imgur.com/ZWsBzXr.png",
    link: "https://powerblessed.vercel.app/",
    techs: ["vue", "less", "typescript"],
    github: "https://github.com/VitorAndes/powerblessed",
  },

  {
    title: "EsteticaGio",
    description:
      "Landing page elegante para serviços de estética, com layout profissional, paleta de cores harmoniosa e foco em transmitir confiança e atrair clientes de forma eficiente.",
    image: "https://i.imgur.com/RfRY1k7.png",
    link: "https://esteticagio.vercel.app/",
    techs: ["vue", "typescript", "less"],
    github: "https://github.com/VitorAndes/Esteticagio",
  },
];
