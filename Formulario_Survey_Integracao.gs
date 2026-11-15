/**
 * EngSW-Pratica — gerador do Google Forms.
 * Copie TODO este arquivo para Código.gs e execute criarFormularioSurvey.
 * Não é necessário implantar como aplicativo Web nem instalar bibliotecas.
 * Instrumento: Formulario_Survey_Integracao.docx. Q13 dividida em Q13a, Q13b e Q13c.
 * Versão de apresentação 2: todas as perguntas em uma única página.
 * Os títulos apenas organizam a leitura; não há desvios nem botão Próxima.
 * Cria um novo formulário, preservando a versão anterior e suas respostas.
 * As respostas ficam no próprio Google Forms, na conta que executar o código.
 * Este script não envia convites nem concede acesso às respostas a terceiros.
 *
 * API oficial: https://developers.google.com/apps-script/reference/forms/form
 * Títulos: https://developers.google.com/apps-script/reference/forms/section-header-item
 * Validação: https://developers.google.com/apps-script/reference/forms/checkbox-validation-builder
 */

const SURVEY = {
  "title": "Planejamento e arquitetura de integração de sistemas na prática",
  "intro": "O presente questionário integra um estudo acadêmico da disciplina INF6008/INF7008 – Engenharia de Software, do Programa de Pós-Graduação em Informática da Universidade Federal do Espírito Santo, período 2026/2, ministrada pela Profa. Dra. Monalessa Perini Barcellos.\n\nO objetivo é compreender quando e como as integrações entre sistemas são planejadas e especificadas, bem como identificar dificuldades e ocorrências percebidas durante sua realização. O tempo estimado de resposta é de 7 a 10 minutos.\n\nNeste estudo, integração de sistemas corresponde à troca de dados ou à utilização de funcionalidades entre sistemas distintos, por exemplo, por APIs, mensagens, arquivos ou acesso a dados externos. A integração de código em um repositório, isoladamente, não se enquadra nessa definição.\n\nA participação destina-se a profissionais com experiência recente em integração de sistemas em organizações situadas no Brasil, conforme os critérios apresentados em Q1.\n\nTodas as perguntas estão nesta página. Leia o termo de consentimento e os critérios antes de responder às demais questões. Se não concordar em participar ou não atender a algum critério, feche o formulário sem enviar.",
  "consent": "Sua participação é voluntária, sem remuneração ou benefício individual garantido. Você poderá interromper o preenchimento antes do envio, sem justificativa ou prejuízo. As perguntas centrais poderão ser deixadas em branco. Se sentir desconforto ao recordar dificuldades profissionais, deixe o item sem resposta ou encerre a participação.\n\nNão serão solicitados nome, e-mail, nome da organização ou anexos. Evite pessoas, clientes, credenciais e detalhes confidenciais nos relatos. Características combinadas e textos livres podem permitir identificação indireta; por isso, a equipe revisará os relatos e divulgará os resultados de forma agregada ou em trechos desidentificados.\n\nOs três autores acessarão as respostas para análise, relatório e apresentação acadêmica. A professora receberá os resultados e, se necessário à avaliação, registros desidentificados. Os dados brutos ficarão em pasta restrita e serão excluídos até 02/06/2027; as sínteses agregadas poderão integrar o relatório.\n\nApós o envio, sem um identificador, não será possível localizar sua resposta com segurança para excluí-la individualmente. A plataforma poderá tratar dados técnicos segundo suas condições; esses dados não serão solicitados pela equipe. Para esclarecimentos sobre o estudo, utilize os contatos abaixo.\n\nFabio da Silva Salvador  |  Fabio.s.salvador@edu.ufes.br\n\nFernando Azevedo Peres  |  fernando.peres@edu.ufes.br\n\nPatrik Lima Pereira  |  patrik.pereira@edu.ufes.br",
  "reference": "Da Q3 à Q5 e da Q7 à Q14, considere um único projeto de referência: o projeto profissional mais recente, em organização situada no Brasil, cuja implementação de uma integração você acompanhou nos últimos 12 meses. Se houver mais de uma integração nesse projeto, considere a mais recente cuja implementação tenha sido iniciada. Observe somente o que ocorreu nesse período, mesmo que o projeto ainda esteja em andamento. Não informe o nome do projeto.",
  "questions": {
    "Q0": {
      "title": "Q0  Após ler as informações, você concorda voluntariamente em participar deste estudo?",
      "help": "Escolha única. Obrigatória para enviar. Se não desejar participar, encerre o preenchimento e feche o formulário sem enviar.",
      "options": [
        "Sim, li as informações e concordo em participar.",
        "Não desejo participar."
      ],
      "other": false
    },
    "Q1": {
      "title": "Q1  Você atende a todos os critérios de participação apresentados abaixo?",
      "help": "Escolha única. Obrigatória.\n\nSe não atender a algum critério, encerre o preenchimento e feche o formulário sem enviar.\n\nTer 18 anos ou mais; ter atuado profissionalmente, nos últimos 12 meses, em projeto de software de organização situada no Brasil; ter acompanhado nesse projeto uma integração cuja implementação foi iniciada nesse período.",
      "options": [
        "Sim, atendo a todos os critérios.",
        "Não atendo a pelo menos um dos critérios."
      ],
      "other": false
    },
    "Q2": {
      "title": "Q2  Há quanto tempo você atua profissionalmente no desenvolvimento de software?",
      "help": "Escolha única. Opcional.",
      "options": [
        "Menos de 1 ano.",
        "De 1 ano a menos de 4 anos.",
        "De 4 anos a menos de 7 anos.",
        "7 anos ou mais.",
        "Prefiro não informar."
      ],
      "other": false
    },
    "Q3": {
      "title": "Q3  Qual foi seu principal papel no projeto de referência?",
      "help": "Escolha única. Opcional.",
      "options": [
        "Desenvolvimento de software.",
        "Arquitetura de software ou de soluções.",
        "Engenharia de dados.",
        "DevOps, infraestrutura ou operação.",
        "Análise de sistemas ou de requisitos.",
        "Testes ou garantia da qualidade.",
        "Liderança técnica ou gestão de TI/projeto.",
        "Prefiro não informar."
      ],
      "other": true
    },
    "Q4": {
      "title": "Q4  Qual é a natureza da organização responsável pelo projeto de referência?",
      "help": "Escolha única. Opcional.\n\nSe você prestou serviços, considere a organização contratante do projeto.",
      "options": [
        "Organização privada.",
        "Órgão ou entidade pública, inclusive Judiciário.",
        "Organização sem fins lucrativos.",
        "Não sei informar.",
        "Prefiro não informar."
      ],
      "other": true
    },
    "Q5": {
      "title": "Q5  Aproximadamente quantas pessoas trabalhavam nessa organização?",
      "help": "Escolha única. Opcional.",
      "options": [
        "Até 9 pessoas.",
        "De 10 a 49 pessoas.",
        "De 50 a 249 pessoas.",
        "250 pessoas ou mais.",
        "Não se aplica à minha atuação.",
        "Não sei informar.",
        "Prefiro não informar."
      ],
      "other": false
    },
    "Q6": {
      "title": "Q6  Considerando todos os projetos de software em que você atuou nos últimos 12 meses, qual parcela exigiu integração com outros sistemas?",
      "help": "Escolha única. Opcional.\n\nEsta questão considera o conjunto de projetos do período. Se você atuou em apenas um projeto e ele exigiu integração, marque “Todos os projetos”.",
      "options": [
        "Menos da metade dos projetos.",
        "Metade dos projetos.",
        "Mais da metade, mas não todos os projetos.",
        "Todos os projetos.",
        "Não sei informar."
      ],
      "other": false
    },
    "Q7": {
      "title": "Q7  Quais meios de integração foram utilizados na integração de referência?",
      "help": "Seleção múltipla. Opcional. Marque todas as alternativas pertinentes.\n\nRetome o projeto de referência. Se marcar “Não sei informar”, não selecione outra alternativa.",
      "options": [
        "Chamadas a APIs ou serviços, por exemplo, REST, SOAP ou GraphQL.",
        "Troca de mensagens ou eventos, por exemplo, filas e brokers.",
        "Transferência ou processamento de arquivos, por exemplo, CSV ou XML.",
        "Leitura ou escrita em banco de dados de outro sistema.",
        "Automação de interface, por exemplo, RPA ou coleta em páginas.",
        "Não sei informar."
      ],
      "other": true
    },
    "Q8": {
      "title": "Q8  Em que momento houve a primeira definição organizada de como a integração de referência seria realizada?",
      "help": "Escolha única. Opcional.\n\nConsidere uma definição discutida ou registrada sobre os sistemas envolvidos e a forma de conectá-los. Em trabalho iterativo, considere a funcionalidade ou incremento observado, sem exigir fases sequenciais para todo o projeto.",
      "options": [
        "Na definição ou no levantamento dos requisitos.",
        "No desenho da solução ou da arquitetura, antes de implementar a integração.",
        "Durante a implementação da integração.",
        "Durante os testes ou a homologação da integração.",
        "Somente após a entrada da integração em produção.",
        "Não houve uma definição organizada até o momento observado.",
        "Não sei informar."
      ],
      "other": false
    },
    "Q9": {
      "title": "Q9  Quando a equipe passou a dispor de algum registro das especificações ou contratos da integração de referência?",
      "help": "Escolha única. Opcional.",
      "options": [
        "Antes do início da implementação, incluindo documento já existente e adotado pela equipe.",
        "Durante a implementação.",
        "Após a implementação, durante testes ou homologação.",
        "Somente após a entrada em produção.",
        "Não havia registro até o momento observado.",
        "Não sei informar."
      ],
      "other": false
    },
    "Q10": {
      "title": "Q10  Quais formas de registro foram utilizadas para especificar a integração de referência?",
      "help": "Seleção múltipla. Opcional. Marque todas as alternativas pertinentes.\n\nMarque “Nenhuma forma de registro” ou “Não sei informar” isoladamente. Coleções de requisições podem constituir documentação; sua existência não indica, por si só, informalidade.",
      "options": [
        "Contrato de API ou serviço, por exemplo, OpenAPI/Swagger ou WSDL.",
        "Esquema de dados, mensagens ou mapeamento entre campos.",
        "Diagrama de arquitetura, componentes, sequência ou fluxo de dados.",
        "Documento textual, wiki, item de backlog ou registro de decisão arquitetural.",
        "Coleção de requisições ou exemplos, por exemplo, Postman ou Insomnia.",
        "Mensagens ou e-mails utilizados como registro das definições.",
        "Testes automatizados utilizados como especificação do comportamento esperado.",
        "Nenhuma forma de registro.",
        "Não sei informar."
      ],
      "other": true
    },
    "Q11": {
      "title": "Q11  Quais aspectos já estavam definidos antes de iniciar a implementação da integração de referência?",
      "help": "Seleção múltipla. Opcional. Marque todas as alternativas pertinentes.\n\nConsidere definições discutidas pela equipe, mesmo sem documento. Marque “Nenhum desses aspectos estava definido” ou “Não sei informar” isoladamente.",
      "options": [
        "Sistemas envolvidos e dependências entre eles.",
        "Dados trocados e correspondência de significado entre os campos.",
        "Forma de comunicação, incluindo protocolo ou padrão de interação.",
        "Autenticação, autorização e permissões de acesso.",
        "Tratamento de falhas, por exemplo, timeout, novas tentativas ou compensação.",
        "Necessidades de desempenho ou disponibilidade.",
        "Critérios e condições para testar a integração.",
        "Responsáveis pela integração e tratamento de mudanças de versão.",
        "Nenhum desses aspectos estava definido.",
        "Não sei informar."
      ],
      "other": true
    },
    "Q12": {
      "title": "Q12  Quais dificuldades mais prejudicaram a realização da integração de referência?",
      "help": "Seleção múltipla. Opcional. Selecione até 3 alternativas.\n\nSe marcar “Não observei dificuldades relevantes” ou “Não sei informar”, não selecione outra alternativa. A seleção identifica prioridades percebidas, não todas as dificuldades que ocorreram.",
      "options": [
        "Ausência, insuficiência ou desatualização da documentação do sistema integrado.",
        "Incompatibilidade de formatos, protocolos ou tecnologias.",
        "Divergência de significado dos dados ou das regras de negócio entre sistemas.",
        "Dificuldade técnica para atender aos requisitos de segurança e acesso.",
        "Demora na liberação de acessos ou autorizações.",
        "Dificuldade de comunicação ou alinhamento entre equipes.",
        "Definição insuficiente da solução de integração antes de implementá-la.",
        "Falta, instabilidade ou limitação do ambiente de testes ou homologação.",
        "Mudanças nos sistemas integrados sem comunicação ou preparação adequada.",
        "Não observei dificuldades relevantes.",
        "Não sei informar."
      ],
      "other": true
    },
    "Q13": {
      "title": "Q13  Com que frequência você observou cada uma das situações abaixo na integração de referência?",
      "help": "Uma resposta por situação. Opcional.\n\nConsidere apenas o período observado dos últimos 12 meses. Utilize “Não se aplica” quando a situação não puder ocorrer no estágio acompanhado e “Não sei informar” quando não tiver informação para avaliar.\n\nEscala para cada situação: 1 Nunca; 2 Raramente; 3 Às vezes; 4 Frequentemente; 5 Sempre; NA Não se aplica; NS Não sei informar.",
      "options": [],
      "other": false
    },
    "Q13a": {
      "title": "Q13a  Restrições ou regras do sistema integrado foram identificadas somente depois do início da implementação.",
      "help": "Resposta opcional. Considere a integração de referência nos últimos 12 meses.",
      "options": [
        "1 — Nunca",
        "2 — Raramente",
        "3 — Às vezes",
        "4 — Frequentemente",
        "5 — Sempre",
        "Não se aplica",
        "Não sei informar"
      ],
      "other": false
    },
    "Q13b": {
      "title": "Q13b  Foi necessário refazer trabalho já realizado para corrigir problemas de integração.",
      "help": "Resposta opcional. Considere a integração de referência nos últimos 12 meses.",
      "options": [
        "1 — Nunca",
        "2 — Raramente",
        "3 — Às vezes",
        "4 — Frequentemente",
        "5 — Sempre",
        "Não se aplica",
        "Não sei informar"
      ],
      "other": false
    },
    "Q13c": {
      "title": "Q13c  Problemas de integração contribuíram para atrasar uma entrega em relação ao prazo previsto.",
      "help": "Resposta opcional. Considere a integração de referência nos últimos 12 meses.",
      "options": [
        "1 — Nunca",
        "2 — Raramente",
        "3 — Às vezes",
        "4 — Frequentemente",
        "5 — Sempre",
        "Não se aplica",
        "Não sei informar"
      ],
      "other": false
    },
    "Q14": {
      "title": "Q14  No projeto de referência, como a forma de planejar ou especificar a integração se relacionou com o trabalho realizado e com os prazos?",
      "help": "Resposta aberta. Opcional.\n\nSe desejar, relate uma situação concreta, indicando o que foi feito e o que ocorreu. O relato pode envolver benefícios, dificuldades ou ausência de efeito percebido. Não informe pessoas, organizações, clientes, credenciais ou detalhes confidenciais.",
      "options": [],
      "other": false
    }
  },
  "thanks": [
    "Agradecemos sua contribuição. Suas respostas auxiliarão a compreender as práticas de planejamento e arquitetura de integração de sistemas nos contextos alcançados por este estudo.",
    "Envie apenas uma resposta. Antes de enviar, revise os campos de texto para retirar informações que possam identificar pessoas ou organizações."
  ]
};

// Chaves próprias: executar a versão nova não reutiliza o formulário com várias páginas.
const FORM_ID_KEY = 'ENGSW_SURVEY_PAGINA_UNICA_V2_FORM_ID';
const FORM_STATE_KEY = 'ENGSW_SURVEY_PAGINA_UNICA_V2_STATE';

/** Execute esta função no menu superior do Apps Script. */
function criarFormularioSurvey() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  const properties = PropertiesService.getScriptProperties();
  let form;
  try {
    const existingId = properties.getProperty(FORM_ID_KEY);
    if (existingId) {
      form = FormApp.openById(existingId);
      if (properties.getProperty(FORM_STATE_KEY) !== 'PRONTO') {
        console.log('Formulário incompleto para revisão: ' + form.getEditUrl());
        throw new Error('Uma criação anterior ficou incompleta. Revise o formulário pelo link acima. ' +
          'Para tentar novamente sem alterar esse arquivo, use um novo projeto Apps Script e cole este código.');
      }
      // Nova execução apenas recupera os links: não duplica, não altera e não apaga respostas.
      return mostrarLinks_(form);
    }

    const previousId = properties.getProperty('ENGSW_SURVEY_FORM_ID');
    if (previousId) {
      console.log('Será criada uma versão em página única com um novo link. ' +
        'O formulário anterior e suas respostas serão preservados.');
    }

    // Só publicar depois de montar todas as perguntas.
    form = FormApp.create(SURVEY.title, false);
    properties.setProperties({[FORM_ID_KEY]: form.getId(), [FORM_STATE_KEY]: 'EM_CRIACAO'});
    form.setDescription(SURVEY.intro)
      .setCollectEmail(false)
      .setLimitOneResponsePerUser(false)
      .setPublishingSummary(false)
      .setShowLinkToRespondAgain(false)
      .setAllowResponseEdits(false)
      .setShuffleQuestions(false)
      .setProgressBar(false)
      .setIsQuiz(false)
      .setConfirmationMessage('Registro recebido. Agradecemos seu interesse. ' +
        'Somente respostas de pessoas que concordaram em participar e atendem aos critérios serão incluídas na análise.');

    form.addSectionHeaderItem().setTitle('Termo de Consentimento Livre e Esclarecido')
      .setHelpText(SURVEY.consent);
    escolha_(form, 'Q0', true);

    form.addSectionHeaderItem().setTitle('Critérios de participação');
    escolha_(form, 'Q1', true);

    // Títulos organizam a página sem ocultar perguntas ou criar etapas.
    form.addSectionHeaderItem().setTitle('Caracterização do participante')
      .setHelpText(SURVEY.reference);
    escolha_(form, 'Q2');
    escolha_(form, 'Q3');

    form.addSectionHeaderItem().setTitle('Contexto organizacional e formas de integração');
    ['Q4', 'Q5', 'Q6'].forEach(function(id) { escolha_(form, id); });
    multipla_(form, 'Q7');

    form.addSectionHeaderItem().setTitle('Planejamento e especificação');
    escolha_(form, 'Q8');
    escolha_(form, 'Q9');
    multipla_(form, 'Q10');

    form.addSectionHeaderItem().setTitle('Decisões de arquitetura e dificuldades');
    multipla_(form, 'Q11');
    multipla_(form, 'Q12', 3);

    form.addSectionHeaderItem().setTitle('Ocorrências percebidas e relato complementar');
    form.addSectionHeaderItem().setTitle(SURVEY.questions.Q13.title)
      .setHelpText(SURVEY.questions.Q13.help);
    ['Q13a', 'Q13b', 'Q13c'].forEach(function(id) { escolha_(form, id); });
    form.addParagraphTextItem().setTitle(SURVEY.questions.Q14.title)
      .setHelpText(SURVEY.questions.Q14.help).setRequired(false);
    form.addSectionHeaderItem().setTitle('Agradecimento').setHelpText(SURVEY.thanks.join('\n\n'));

    // Não usar setRequireLogin: método obsoleto e indisponível em contas pessoais.
    // Em conta institucional, confira o acesso de respondedores no botão Publicar/Compartilhar.
    if (form.supportsAdvancedResponderPermissions()) {
      form.setPublished(true);
    }
    form.setAcceptingResponses(true);
    properties.setProperty(FORM_STATE_KEY, 'PRONTO');
    return mostrarLinks_(form);
  } catch (erro) {
    if (form) console.log('Link para conferir o formulário: ' + form.getEditUrl());
    throw erro;
  } finally {
    lock.releaseLock();
  }
}

function escolha_(form, id, obrigatoria) {
  const q = SURVEY.questions[id];
  return form.addMultipleChoiceItem().setTitle(q.title).setHelpText(q.help)
    .setChoiceValues(q.options).showOtherOption(q.other).setRequired(Boolean(obrigatoria));
}

function multipla_(form, id, limite) {
  const q = SURVEY.questions[id];
  const item = form.addCheckboxItem().setTitle(q.title).setHelpText(q.help)
    .setChoiceValues(q.options).showOtherOption(q.other).setRequired(false);
  if (limite) {
    item.setValidation(FormApp.createCheckboxValidation()
      .requireSelectAtMost(limite).setHelpText('Selecione no máximo ' + limite + ' alternativas.').build());
  }
  // Google Forms não oferece exclusividade condicional em caixas de seleção.
  // Mantêm-se as instruções do DOCX para Nenhum/Não sei e a revisão na limpeza dos dados.
  return item;
}

function mostrarLinks_(form) {
  const links = {edicao: form.getEditUrl(), participantes: form.getPublishedUrl()};
  console.log('EDITAR E CONSULTAR RESPOSTAS (uso do grupo): ' + links.edicao);
  console.log('LINK PARA OS PARTICIPANTES: ' + links.participantes);
  console.log('Antes da divulgação: faça o piloto e teste o link em uma janela anônima. ' +
    'Em conta institucional, confirme que os respondedores podem ser qualquer pessoa com o link.');
  return links;
}
