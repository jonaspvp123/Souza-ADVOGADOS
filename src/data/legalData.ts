import { AreaDetail, Testimonial, FAQItem } from "../types";

export const practiceAreas: (AreaDetail & { iconName: string; whatsappTemplate: string })[] = [
  {
    id: "direito-civil",
    title: "Direito Civil",
    shortDescription: "Resolução de conflitos contratuais, indenizações, responsabilidade civil e negócios cotidianos com máxima segurança jurídica.",
    longDescription: "Nossa atuação em Direito Civil compreende o planejamento, confecção e análise de contratos, ações de cobrança, recuperação de crédito, reparação de danos morais e materiais, além da defesa dos interesses de pessoas físicas e jurídicas em litígios gerais da vida privada ou empresarial.",
    category: "civil",
    iconName: "Scale",
    keyTopics: [
      "Contratos de Compra & Venda, Prestação de Serviços",
      "Ações de Indenização por Danos Morais e Materiais",
      "Cobranças, Execuções de Dívidas e Acordos Extrajudiciais",
      "Responsabilidade Civil e Obrigações de Fazer",
      "Defesa do Consumidor de Alto Padrão"
    ],
    whatsappTemplate: "Olá! Gostaria de falar com uma advogada especialista em Direito Civil no escritório Souza Advogados. Preciso de suporte referente a um caso contratual ou indenização."
  },
  {
    id: "direito-de-familia",
    title: "Direito de Família & Sucessões",
    shortDescription: "Atendimento acolhedor, humanizado e estratégico para proteção do seu patrimônio familiar de forma ágil e segura.",
    longDescription: "Lidamos com questões familiares sensíveis com discrição de alto padrão. Atuamos em inventários judiciais e extrajudiciais, divórcios consensuais ou litigiosos, fixação e revisão de pensão alimentícia, guarda de menores, planejamento sucessório inteligente, união estável e holdings familiares.",
    category: "familia",
    iconName: "HeartHandshake",
    keyTopics: [
      "Inventários Rápidos (Judicial e Extrajudicial em Cartório)",
      "Divórcio Consensual e Partilha de Bens Estratégica",
      "Guarda de Filhos e Regulamentação de Convivência",
      "Pensão Alimentícia (Fixação, Revisão e Execução)",
      "Planejamento Sucessório para Preservação de Bens"
    ],
    whatsappTemplate: "Olá! Gostaria de uma consulta com uma especialista em Direito de Família/Sucessões no Souza Advogados para tratar sobre divórcio, partilha ou inventário."
  },
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário",
    shortDescription: "Garantia de aposentadorias, benefícios por incapacidade e planejamentos eficientes junto ao INSS.",
    longDescription: "Assistência completa para obtenção de aposentadorias urbanas e especiais, BPC/LOAS, pensão por morte, auxílio-doença e planejamento previdenciário minucioso. Analisamos detalhadamente seu histórico de contribuição para buscar o maior valor possível de benefício, evitando perdas financeiras.",
    category: "previdenciario",
    iconName: "FileCheck",
    keyTopics: [
      "Planejamento Previdenciário (Cálculo do benefício ideal)",
      "Aposentadoria por Tempo de Contribuição, Idade e Especial",
      "Benefício de Prestação Continuada (BPC/LOAS)",
      "Revisões de Aposentadoria e Restabelecimento de Auxílios",
      "Requerimentos Administrativos e Ações Judiciais contra INSS"
    ],
    whatsappTemplate: "Olá! Gostaria de agendar um atendimento previdenciário no Souza Advogados para planejar minha aposentadoria ou contestar uma decisão do INSS."
  },
  {
    id: "direito-imobiliario",
    title: "Direito Imobiliário",
    shortDescription: "Assessoria completa em transações imobiliárias, regularização de imóveis, usucapião e segurança patrimonial.",
    longDescription: "Protegemos seus investimentos imobiliários. Atuamos na regularização fundiária, usucapião administrativa ou judicial, elaboração de contratos de promessa de compra e venda, assessoria em leilões, despejos, reintegração de posse e planejamento de condomínios residenciais ou comerciais de alto padrão.",
    category: "imobiliario",
    iconName: "Home",
    keyTopics: [
      "Usucapião Extrajudicial (Rápida em Cartório)",
      "Regularização de Escrituras e Matrículas de Imóveis",
      "Análise de Risco (Due Diligence) para Compra Confortável",
      "Contratos de Locação, Compra e Venda de Luxo",
      "Defesa em Problemas de Atraso de Obra e Desistência (Distrato)"
    ],
    whatsappTemplate: "Olá! Preciso de assessoria jurídica especializada em Direito Imobiliário para regularização, compra e venda ou usucapião no escritório Souza Advogados."
  },
  {
    id: "consultoria-juridica",
    title: "Consultoria Jurídica",
    shortDescription: "Pareceres técnicos e análise estratégica personalizada para embasar decisões seguras e evitar riscos futuros.",
    longDescription: "Nossa consultoria oferece um diagnóstico robusto da situação jurídica atual do cliente. Através de pareceres, relatórios de riscos e reuniões táticas, oferecemos soluções claras e embasadas na jurisprudência mais recente para que você tome decisões patrimoniais ou pessoais impecáveis.",
    category: "consultoria",
    iconName: "Briefcase",
    keyTopics: [
      "Análise Retrospectiva e Investigação Orçamentária de Riscos",
      "Confecção de Pareceres com Fundamentação Doutrinária",
      "Planejamento Estratégico de Conflitos Complexos",
      "Reuniões de Direcionamento com Ata de Mitigação",
      "Orientação Patrimonial Preventiva para Grupos Familiares"
    ],
    whatsappTemplate: "Olá! Desejo contratar uma Consultoria Jurídica personalizada do Souza Advogados para sanar dúvidas e analisar caminhos estratégicos no meu caso."
  },
  {
    id: "assessoria-preventiva",
    title: "Assessoria Preventiva",
    shortDescription: "Mitigação ativa de vulnerabilidades corporativas e pessoais antes que se tornem litígios onerosos.",
    longDescription: "A advocacia moderna e sofisticada foca em evitar conflitos judiciais, reduzindo custos emocionais e financeiros. Criamos programas de compliance contínuo, revisamos rotinas cotidianas para mitigar riscos e estruturamos acordos pré-judiciais eficazes com elegância técnica.",
    category: "preventiva",
    iconName: "ShieldAlert",
    keyTopics: [
      "Auditoria Preventiva de Processos Operacionais",
      "Redação e Revisão de Políticas de Proteção de Dados (LGPD)",
      "Adequação de Contratos de Trabalho e Acordos Customizados",
      "Treinamentos de Mitigação de Passivos para Empresas",
      "Consultoria de Blindagem Patrimonial Preventiva"
    ],
    whatsappTemplate: "Olá! Gostaria de agendar uma conversa sobre Assessoria Legal Preventiva de Souza Advogados para mitigar riscos na minha empresa ou patrimônio."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "dep-1",
    name: "Dr. Helena Vasconcelos",
    role: "Proprietária da Vasconcelos Empreendimentos",
    content: "O profissionalismo e a atenção individualizada que recebi no Souza Advogados superaram todas as minhas expectativas. Com uma estratégia ágil de Direito Imobiliário, conseguimos regularizar um terreno comercial em meses, o que estava travado há anos. Transparência impecável do início ao fim.",
    rating: 5,
    area: "Direito Imobiliário"
  },
  {
    id: "dep-2",
    name: "Mariana S. de Alencar",
    role: "Diretora de Tecnologia e Inovação",
    content: "Durante um momento familiar extremamente delicado, a equipe me acolheu com respeito único e refinamento humano. Conduziram meu divórcio com inteligência emocional e técnica cirúrgica na partilha de bens, garantindo a paz e o patrimônio de forma amigável.",
    rating: 5,
    area: "Direito de Família"
  },
  {
    id: "dep-3",
    name: "Carlos Eduardo da Silva",
    role: "Empresário do Ramo Têxtil",
    content: "Contratamos a assessoria preventiva recorrente do escritório Souza Advogados. A blindagem contratual e trabalhista criada por elas nos poupou centenas de milhares de reais em litígios desnecessários. Recomendo fortemente a empresários que valorizam segurança absoluta.",
    rating: 5,
    area: "Assessoria Preventiva"
  },
  {
    id: "dep-4",
    name: "Dra. Beatriz Mendes",
    role: "Médica Cardiologista",
    content: "Fiz meu planejamento previdenciário e o encaminhamento com elas. A dedicação em investigar todo o meu histórico no serviço público e privado garantiu uma aposentadoria justa sem complicação. Atendimento refinado de altíssimo nível, recomendo sem restrições.",
    rating: 5,
    area: "Direito Previdenciário"
  }
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como agendar atendimento com o escritório?",
    answer: "Você pode clicar em qualquer botão do site para iniciar um contato instantâneo conosco através do WhatsApp, ou se preferir, utilizar nosso Simulador de Diagnóstico Jurídico nesta página. Retornamos em menos de 10 minutos para direcionar você à advogada titular especialista no seu tema."
  },
  {
    id: "faq-2",
    question: "O atendimento pode ser feito de forma online (digital)?",
    answer: "Sim, de forma integrada e totalmente segura. Atendemos clientes de todo o Brasil e de brasileiros residentes no exterior de maneira digital por videoconferência (Google Meet, Zoom ou WhatsApp), enviando e processando documentos via assinatura eletrônica certificada pela OAB e Gov.br, sem que você precise sair de casa."
  },
  {
    id: "faq-3",
    question: "Como funciona a primeira consulta com a advogada?",
    answer: "Durante a nossa primeira consulta, seja presencial ou online, analisamos detidamente seu relato, histórico, conflitos e toda a documentação preliminar. Apresentamos um diagnóstico de viabilidade jurídica fundamentado e propomos a melhor estratégia personalizada de atuação para o seu caso."
  },
  {
    id: "faq-4",
    question: "Quais documentos preciso apresentar na primeira conversa?",
    answer: "Geralmente, necessitamos dos seus documentos de identificação básica (RG ou CNH), CPF e comprovante de endereço recentes. Dependendo da sua área de interesse (como Contratos, Extratos do INSS/CNIS, Certidões de Casamento ou Imóveis, etc.), nossa equipe fornecerá um checklist detalhado no momento do seu agendamento no WhatsApp."
  },
  {
    id: "faq-5",
    question: "Qual o prazo padrão para retorno e início das ações?",
    answer: "Nosso retorno de mensagens é praticamente imediato por WhatsApp dentro do horário comercial (e em finais de semana, de forma de plantão). Já o pareamento ou confecção de peças urgentes pode se iniciar nas primeiras 24 horas a depender da gravidade e necessidade técnica informada pelo cliente."
  }
];
