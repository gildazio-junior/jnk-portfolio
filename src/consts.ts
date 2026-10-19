// Dados globais do site. Edite aqui para atualizar textos em todas as páginas.

export const SITE_TITLE = "Gildázio Santos Junior";
// Complemento do título da página inicial (aparece na aba e nas prévias de links).
export const SITE_TAGLINE = "Observabilidade & Cloud";
export const SITE_DESCRIPTION =
	"Analista DevOps com foco em observabilidade e cloud: Datadog, Grafana, Cloudflare e o uso de IA para enxergar sistemas em produção.";

export const CONTACT = {
	email: "jnktecnologia@gmail.com",
	linkedin: "https://www.linkedin.com/in/gildazio-santos-junior-19a93551/",
	github: "https://github.com/gildazio-junior",
	whatsapp: "https://wa.me/5531991576897?text=Ol%C3%A1%2C%20Gild%C3%A1zio%21%20Vi%20seu%20curr%C3%ADculo%20no%20site%20jnktecnologia.com.br%20e%20gostaria%20de%20conversar.",
};

export const COMPANY = {
	name: "JNK Serviços de Tecnologia Ltda",
	cnpj: "57.633.966/0001-83",
};

export type Job = {
	company: string;
	role: string;
	period: string;
	bullets: string[];
};

export const EXPERIENCE: Job[] = [
	{
		company: "Stellar Gaming",
		role: "Analista DevOps — Observabilidade",
		period: "ago 2024 – out 2026",
		bullets: [
			"Observabilidade de serviços críticos em produção: verificação de identidade (KYC/Liveness), sistema transacional e pagamentos via Pix.",
			"Monitoramento e análise de logs de aplicações e infraestrutura no Datadog, Grafana, Cloudflare e Amazon CloudWatch, com dashboards e alertas.",
			"Atendimento N2 a incidentes em produção em plantão noturno, com escalonamento para as equipes responsáveis.",
			"Suporte ao N1 na análise e triagem de chamados; análises e relatórios operacionais no Metabase.",
		],
	},
	{
		company: "Granvita Quatree",
		role: "Analista de Sistemas",
		period: "ago 2023 – jul 2024",
		bullets: [
			"Desenvolvimento de telas e dashboards no ERP Sankhya W, com interfaces mais eficientes para as áreas usuárias.",
			"Consultas e rotinas em Oracle PL/SQL para relatórios, telas e dashboards do ERP.",
			"Diagnóstico de problemas de desempenho e estabilidade no Oracle; manutenção e otimização da base.",
		],
	},
	{
		company: "Fapam — Faculdade de Pará de Minas",
		role: "Analista de TI",
		period: "dez 2022 – ago 2023",
		bullets: [
			"Suporte ao ERP Totvs RM e demais sistemas da instituição.",
			"Governança do CPD, da rede e da telefonia; gestão dos backups de servidores e bancos em nuvem.",
		],
	},
	{
		company: "Plena Alimentos",
		role: "Analista de TI",
		period: "jan 2020 – mai 2022",
		bullets: [
			"Administração dos servidores da planta: banco de dados, arquivos, Terminal Services/VPN e Active Directory.",
			"Backup e performance dos servidores de banco; análise de dados e relatórios para todos os setores.",
		],
	},
	{
		company: "Hinova Soluções Digitais",
		role: "Analista de TI",
		period: "jun 2019 – jan 2020",
		bullets: ["Suporte de TI por contrato e implantação de soluções de gestão de TI e BI."],
	},
	{
		company: "Lubrivila Lubrificantes Ipiranga",
		role: "Gestor de Logística e TI",
		period: "2018 – 2019",
		bullets: ["Gestão de equipe de 8 pessoas; ERP Sankhya W e força de vendas."],
	},
	{
		company: "Bel Lube Mobil",
		role: "Gestor de TI e Analista de Sistemas",
		period: "2013 – 2016",
		bullets: [
			"Administração do CPD com cerca de 9 servidores e backup local e em nuvem (Azure).",
			"Suporte N1/N2 à matriz e a 4 filiais nos ERPs Protheus e Sankhya Web.",
			"Relatórios de vendas e desempenho em Excel e Pentaho.",
		],
	},
	{
		company: "Ágape Tecnologia da Informação",
		role: "Técnico em Informática",
		period: "2010 – 2013",
		bullets: ["Suporte a servidores e estações, montagem de CPD e cabeamento estruturado."],
	},
];

export const SKILLS: { area: string; items: string[] }[] = [
	{
		area: "Observabilidade",
		items: ["Datadog", "Grafana", "Cloudflare", "Amazon CloudWatch", "Metabase", "Logs, dashboards e alertas"],
	},
	{ area: "Domínios de negócio", items: ["KYC / Liveness", "Sistemas transacionais", "Pagamentos via Pix"] },
	{ area: "Bancos de dados", items: ["Oracle PL/SQL", "MongoDB"] },
	{ area: "DevOps", items: ["Git e GitHub", "Noções de Docker e Terraform"] },
	{
		area: "Infraestrutura",
		items: ["Linux", "Windows Server", "Active Directory", "pfSense", "Endian", "Virtualização", "VPN", "Backup", "Redes"],
	},
	{ area: "ERP", items: ["Sankhya Web (certificado)", "Totvs Protheus", "Totvs RM"] },
];
