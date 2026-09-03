// Bilingual content for the portfolio (EN + PT-BR).
// Keep both languages side by side so they never drift apart.
// `link` and language-neutral values are repeated intentionally for editing clarity.

export const content = {
  en: {
    switchTo: 'PT',
    role: 'Networks Engineer building verifiable Web3',
    tagline: 'Bitcoin-anchored systems, Rust smart contracts, and formally-verified infrastructure.',
    nav: {
      about: 'About',
      experience: 'Experience',
      certifications: 'Courses & Certifications',
      projects: 'Projects',
    },
    sections: {
      experience: 'Experience',
      certifications: 'Courses & Certifications',
      projects: 'Projects',
    },
    about: [
      `My path into Web3 started with networks — and with a very Brazilian question: what does it cost to build something reliable when trust itself is scarce and expensive?`,
      `Studying communication networks engineering at UnB, and spending four years keeping production infrastructure alive — first at Telebras, then at Anatel — taught me to distrust assumptions: to care about what happens when a link drops, when a system is under load, when you can't take it on faith that things are what they claim to be. Where institutional trust is costly and easily broken, that stops being abstract; it's daily life. To me it's also the clearest case for blockchain — not as a buzzword, but as a way to relocate trust from fragile institutions to code and math that anyone can verify.`,
      `So these days I build systems where integrity is proven, not promised — anchoring video custody to Bitcoin so it can't be quietly tampered with, writing Rust for the Polkadot ecosystem, and reaching for formal methods like TLA+ when something is too important to just "probably" work. I care more about durable, honest engineering than buzzwords — and I like passing that on, as a monitor for UnB's smart-contract programming course, because the best way to understand a system is having to explain it.`,
    ],
    experience: [
      {
        title: 'Monitor — Smart Contract Programming (Extension Course) @ University of Brasília (UnB)',
        description: `Teaching assistant for the university extension course on Smart Contract Programming (Dept. of Electrical Engineering). I support students through chat and Google Classroom across the EVM, Solidity, OpenZeppelin, security and lifecycle patterns (proxies, Ownable/RBAC, circuit breakers), ERC-20/ERC-721, and testnet deployment (Sepolia, Etherscan, MetaMask).`,
        link: 'https://www.unb.br/',
        time: '2026',
        tags: ['Solidity', 'Smart Contracts', 'EVM', 'Teaching'],
      },
      {
        title: 'Anatel',
        description: `Manage records and configure tools such as Zabbix and Grafana. Maintained weekly communication with ANATEL state-level superintendencies, supporting coordination, data sharing, and resolution of regional network demands.`,
        link: 'https://www.gov.br/anatel/pt-br',
        time: '2025 - Present',
        tags: ['Communication', 'DevOps', 'Monitoring'],
      },
      {
        title: 'Telebras',
        description: `Managed records and configured tools such as Centreon, Cacti, Zabbix, Grafana, and FortiGate (FortiManager and FortiAnalyzer). Monitored dashboards and logs to ensure system health and performance.`,
        link: 'https://www.telebras.com.br/',
        time: '2022 - 2024',
        tags: ['DevOps', 'Monitoring', 'Network'],
      },
    ],
    certifications: [
      {
        title: 'Communication Networks Engineering @ University of Brasília (UnB)',
        description: `I am currently pursuing a Bachelor's degree in Communication Networks Engineering at the University of Brasília (UnB), a top-tier Latin American university. My program holds Brazil's highest seal of academic excellence (Concept 5) and has given me a "full-stack" foundation in network infrastructure, protocols, and software security. This background gives me a deep, practical understanding of the core infrastructure that powers complex systems like Blockchain and Web3.`,
        tags: ['Network Architecture', 'Protocol Design', 'Performance & Scalability Optimization'],
      },
      {
        title: 'TIC29 — Web3 Technology Capacitation & Residency Program (MCTI / Softex / IREDE)',
        description: `A selective national Web3 program funded by Brazil's Ministry of Science, Technology and Innovation (MCTI), coordinated by Softex and delivered by IREDE. I completed the capacitation track, covering smart contracts (Solidity, tokens, DAOs, oracles, security and modularization), a VR module, and a hackathon.`,
        tags: ['Solidity', 'Smart Contracts', 'DAO', 'Oracles', 'Web3'],
      },
      {
        title: 'Polkadot Blockchain Formation',
        description: `Blockchain Development with the Polkadot SDK: a comprehensive course focused on building custom parachains with Rust. Key skills include Substrate and FRAME for runtime development, Wasm smart contracts, and XCM for cross-chain interoperability. The course culminated in a final project to build and deploy a fully functional, interoperable blockchain application.`,
        tags: ['Rust', 'Substrate', 'WebAssembly', 'ink!', 'Web3'],
      },
      {
        title: 'CESS: Decentralized Data Infrastructure',
        description: `An in-depth exploration of the CESS network, a decentralized data and value infrastructure. The curriculum covered the fundamentals of blockchain and Web3, the architecture of the CESS network, and its key technologies — with hands-on experience setting up and operating both consensus and storage nodes, using the DeOSS (Decentralized Object Storage) system via its REST API, and building dApps with both Ink! and Solidity, as well as creating custom pallets.`,
        tags: ['Decentralized Storage', 'WASM', 'EVM', 'Ink!', 'Solidity'],
      },
      {
        title: 'CompTIA Security+ (SY0-701)',
        description: `A globally recognized credential that validates the baseline skills needed to perform core security functions. It covers network security, compliance and operational security, threats and vulnerabilities, application/data/host security, access control and identity management, and cryptography, assessed through multiple-choice and performance-based questions.`,
        tags: ['Threat & Vulnerability Management', 'Security Architecture', 'Risk Management'],
      },
      {
        title: 'Projeto ILIADA — Blockchain Introduction, Web3 and Rollups (Cartesi)',
        description: `Training in dApp development covering Web3 fundamentals, developer tooling (Linux, Docker, React), Smart Contracts (Solidity/Vyper), and Layer-2 Rollups with the Cartesi Rollups SDK — building familiarity with the rollups architecture and workflow.`,
        tags: ['Web3', 'Rollups', 'Cartesi', 'Layer 2', 'Smart Contracts'],
      },
      {
        title: 'Google Cybersecurity Professional Certificate',
        description: `A professional program covering the identification and mitigation of common risks, threats, and vulnerabilities, with hands-on experience using industry-standard tools such as Python, Linux, SQL, and SIEM tools across 170+ hours of instruction, labs, and practice-based assessments that simulate real-world scenarios.`,
        tags: ['Cybersecurity Analysis', 'Incident Response', 'Network Security'],
      },
    ],
    projects: [
      {
        title: 'CFTV-BTC — Verifiable Video Custody on Bitcoin',
        description: `A verifiable custody chain for CCTV footage anchored on Bitcoin: video is segmented, hashed (SHA-256), packaged into signed BagIt manifests, and later verified against an on-chain anchor to prove integrity and detect tampering. Academic project at UnB and the likely basis for my final thesis — read the published article for the full write-up.`,
        link: 'https://cftv.vilarins.com',
        tags: ['Bitcoin', 'OpenTimestamps', 'Python', 'Digital Forensics', 'SHA-256'],
      },
      {
        title: 'Polka-Scope',
        description: `Smart P2P monitoring and slash-prevention for Polkadot/Substrate validators, written in Rust and formally verified with TLA+. It tracks peer connectivity and network health to catch issues before they cause slashing events — bridging network engineering with Web3 infrastructure.`,
        link: 'https://github.com/duckrwx/polka-scope',
        tags: ['Rust', 'Polkadot', 'TLA+', 'Formal Verification', 'P2P'],
      },
      {
        title: 'Guardian Gateway',
        description: `A sovereign-identity gateway for parental authorization built on Brazil's Gov.br OIDC. Features an O(1) state machine, a hash-chained audit log for non-repudiation, and a REST API for integration with games and digital platforms.`,
        link: 'https://github.com/duckrwx/guardian-gateway',
        tags: ['Identity', 'OIDC', 'Gov.br', 'Rust', 'REST API'],
      },
    ],
    footer: { cta: 'Download CV' },
  },

  pt: {
    switchTo: 'EN',
    role: 'Engenheiro de Redes construindo um Web3 verificável',
    tagline: 'Sistemas ancorados em Bitcoin, contratos em Rust e infraestrutura formalmente verificada.',
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      certifications: 'Cursos & Certificações',
      projects: 'Projetos',
    },
    sections: {
      experience: 'Experiência',
      certifications: 'Cursos & Certificações',
      projects: 'Projetos',
    },
    about: [
      `Meu caminho até o Web3 começou pelas redes — e por uma pergunta muito brasileira: quanto custa construir algo confiável quando a própria confiança é escassa e cara?`,
      `Cursando Engenharia de Redes de Comunicação na UnB e passando quatro anos mantendo infraestrutura de produção no ar — primeiro na Telebras, depois na Anatel — aprendi a desconfiar de suposições: a me importar com o que acontece quando um link cai, quando um sistema está sob carga, quando não dá pra acreditar que as coisas são o que dizem ser. Onde a confiança institucional é cara e facilmente quebrada, isso deixa de ser abstrato; é o dia a dia. Pra mim, é também o argumento mais claro a favor da blockchain — não como buzzword, mas como uma forma de deslocar a confiança de instituições frágeis para código e matemática que qualquer um pode verificar.`,
      `Então hoje eu construo sistemas onde a integridade é provada, não prometida — ancorando a custódia de vídeo no Bitcoin para que não possa ser adulterada em silêncio, programando em Rust no ecossistema Polkadot e recorrendo a métodos formais como TLA+ quando um sistema é importante demais para apenas "provavelmente" funcionar. Valorizo engenharia durável e honesta acima de buzzwords — e gosto de repassar isso, como monitor da disciplina de programação de smart contracts da UnB, porque a melhor forma de entender um sistema é ter que explicá-lo bem.`,
    ],
    experience: [
      {
        title: 'Monitor — Programação de Smart Contracts (Curso de Extensão) @ Universidade de Brasília (UnB)',
        description: `Monitor do curso de extensão em Programação de Smart Contracts (Depto. de Engenharia Elétrica). Dou suporte aos alunos por chat e Google Classroom nos temas de EVM, Solidity, OpenZeppelin, padrões de segurança e de ciclo de vida (proxies, Ownable/RBAC, circuit breakers), ERC-20/ERC-721 e deploy em testnet (Sepolia, Etherscan, MetaMask).`,
        link: 'https://www.unb.br/',
        time: '2026',
        tags: ['Solidity', 'Smart Contracts', 'EVM', 'Ensino'],
      },
      {
        title: 'Anatel',
        description: `Gestão de registros e configuração de ferramentas como Zabbix e Grafana. Comunicação semanal com as superintendências estaduais da ANATEL, apoiando coordenação, compartilhamento de dados e resolução de demandas regionais de rede.`,
        link: 'https://www.gov.br/anatel/pt-br',
        time: '2025 - Presente',
        tags: ['Comunicação', 'DevOps', 'Monitoramento'],
      },
      {
        title: 'Telebras',
        description: `Gestão de registros e configuração de ferramentas como Centreon, Cacti, Zabbix, Grafana e FortiGate (FortiManager e FortiAnalyzer). Monitoramento de dashboards e logs para garantir a saúde e o desempenho dos sistemas.`,
        link: 'https://www.telebras.com.br/',
        time: '2022 - 2024',
        tags: ['DevOps', 'Monitoramento', 'Redes'],
      },
    ],
    certifications: [
      {
        title: 'Engenharia de Redes de Comunicação @ Universidade de Brasília (UnB)',
        description: `Curso o bacharelado em Engenharia de Redes de Comunicação na Universidade de Brasília (UnB), uma das principais universidades da América Latina. O programa tem o selo máximo de excelência acadêmica do Brasil (Conceito 5) e me deu uma base "full-stack" em infraestrutura de rede, protocolos e segurança de software. Essa base me dá um entendimento profundo e prático da infraestrutura que sustenta sistemas complexos como Blockchain e Web3.`,
        tags: ['Arquitetura de Redes', 'Projeto de Protocolos', 'Otimização de Desempenho & Escala'],
      },
      {
        title: 'TIC29 — Programa de Capacitação e Residência em Tecnologia Web3 (MCTI / Softex / IREDE)',
        description: `Programa nacional e seletivo de Web3 financiado pelo Ministério da Ciência, Tecnologia e Inovação (MCTI), coordenado pela Softex e realizado pelo IREDE. Concluí a trilha de capacitação, cobrindo smart contracts (Solidity, tokens, DAOs, oráculos, segurança e modularização), um módulo de VR e um hackathon.`,
        tags: ['Solidity', 'Smart Contracts', 'DAO', 'Oráculos', 'Web3'],
      },
      {
        title: 'Formação Blockchain — Polkadot SDK',
        description: `Desenvolvimento Blockchain com o Polkadot SDK: curso completo focado em construir parachains customizadas com Rust. Habilidades-chave incluem Substrate e FRAME para desenvolvimento de runtime, smart contracts em Wasm e XCM para interoperabilidade entre cadeias. O curso culminou em um projeto final de construir e publicar uma aplicação blockchain funcional e interoperável.`,
        tags: ['Rust', 'Substrate', 'WebAssembly', 'ink!', 'Web3'],
      },
      {
        title: 'CESS: Infraestrutura de Dados Descentralizada',
        description: `Uma exploração aprofundada da rede CESS, uma infraestrutura descentralizada de dados e valor. O currículo cobriu os fundamentos de blockchain e Web3, a arquitetura da rede CESS e suas principais tecnologias — com experiência prática configurando e operando nós de consenso e de armazenamento, usando o sistema DeOSS (Decentralized Object Storage) via API REST, e construindo dApps com Ink! e Solidity, além de criar pallets customizados.`,
        tags: ['Armazenamento Descentralizado', 'WASM', 'EVM', 'Ink!', 'Solidity'],
      },
      {
        title: 'CompTIA Security+ (SY0-701)',
        description: `Uma credencial reconhecida mundialmente que valida as competências fundamentais para exercer funções centrais de segurança. Cobre segurança de redes, conformidade e segurança operacional, ameaças e vulnerabilidades, segurança de aplicações/dados/hosts, controle de acesso e gestão de identidade, e criptografia — avaliada com questões de múltipla escolha e baseadas em desempenho.`,
        tags: ['Gestão de Ameaças & Vulnerabilidades', 'Arquitetura de Segurança', 'Gestão de Risco'],
      },
      {
        title: 'Projeto ILIADA — Introdução a Blockchain, Web3 e Rollups (Cartesi)',
        description: `Treinamento em desenvolvimento de dApps cobrindo fundamentos de Web3, ferramentas de desenvolvimento (Linux, Docker, React), Smart Contracts (Solidity/Vyper) e Rollups de Layer 2 com o Cartesi Rollups SDK — construindo familiaridade com a arquitetura e o fluxo de trabalho de rollups.`,
        tags: ['Web3', 'Rollups', 'Cartesi', 'Layer 2', 'Smart Contracts'],
      },
      {
        title: 'Google Cybersecurity Professional Certificate',
        description: `Programa profissional cobrindo a identificação e mitigação de riscos, ameaças e vulnerabilidades comuns, com experiência prática usando ferramentas padrão do mercado como Python, Linux, SQL e ferramentas de SIEM, ao longo de mais de 170 horas de instrução, laboratórios e avaliações práticas que simulam cenários reais.`,
        tags: ['Análise de Cibersegurança', 'Resposta a Incidentes', 'Segurança de Redes'],
      },
    ],
    projects: [
      {
        title: 'CFTV-BTC — Custódia Verificável de Vídeo no Bitcoin',
        description: `Uma cadeia de custódia verificável para imagens de CFTV ancorada no Bitcoin: o vídeo é segmentado, hasheado (SHA-256), empacotado em manifestos BagIt assinados e depois verificado contra uma âncora on-chain para provar integridade e detectar adulteração. Projeto acadêmico na UnB e provável base do meu TCC — leia o artigo publicado para o detalhamento completo.`,
        link: 'https://cftv.vilarins.com',
        tags: ['Bitcoin', 'OpenTimestamps', 'Python', 'Perícia Digital', 'SHA-256'],
      },
      {
        title: 'Polka-Scope',
        description: `Monitoramento P2P inteligente e prevenção de slash para validadores Polkadot/Substrate, escrito em Rust e formalmente verificado com TLA+. Acompanha a conectividade entre pares e a saúde da rede para pegar problemas antes que causem eventos de slashing — unindo engenharia de redes e infraestrutura Web3.`,
        link: 'https://github.com/duckrwx/polka-scope',
        tags: ['Rust', 'Polkadot', 'TLA+', 'Verificação Formal', 'P2P'],
      },
      {
        title: 'Guardian Gateway',
        description: `Um gateway de identidade soberana para autorização parental construído sobre o OIDC do Gov.br. Conta com uma máquina de estados O(1), um log de auditoria encadeado por hash para não-repúdio e uma API REST para integração com jogos e plataformas digitais.`,
        link: 'https://github.com/duckrwx/guardian-gateway',
        tags: ['Identidade', 'OIDC', 'Gov.br', 'Rust', 'API REST'],
      },
    ],
    footer: { cta: 'Baixar CV' },
  },
};
