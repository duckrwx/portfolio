import React from 'react';
import TechTags from './TechTags';

const certifications = [
  {
    title: 'Communication Networks Engineering @ University of Brasília (UnB)',
    description: 'I am currently pursuing a Bachelor\'s degree in Communication Networks Engineering at the University of Brasília (UnB), a top-tier Latin American university. My program holds Brazil\'s highest seal of academic excellence (Concept 5) and has given me a "full-stack" foundation in network infrastructure, protocols, and software security. This background gives me a deep, practical understanding of the core infrastructure that powers complex systems like Blockchain and Web3.',
    tags: ['Network Architecture', 'Protocol Design', 'Performance & Scalability Optimization'],
  },
  {
    title: 'TIC29 — Web3 Technology Capacitation & Residency Program (MCTI / Softex / IREDE)',
    description: 'A selective national Web3 program funded by Brazil\'s Ministry of Science, Technology and Innovation (MCTI), coordinated by Softex and delivered by IREDE. I completed the capacitation track, covering smart contracts (Solidity, tokens, DAOs, oracles, security and modularization), a VR module, and a hackathon.',
    tags: ['Solidity', 'Smart Contracts', 'DAO', 'Oracles', 'Web3'],
  },
  {
    title: 'Polkadot Blockchain Formation',
    description: 'Blockchain Development with the Polkadot SDK: a comprehensive course focused on building custom parachains with Rust. Key skills include Substrate and FRAME for runtime development, Wasm smart contracts, and XCM for cross-chain interoperability. The course culminated in a final project to build and deploy a fully functional, interoperable blockchain application.',
    tags: ['Rust', 'Substrate', 'WebAssembly', 'ink!', 'Web3'],
  },
  {
    title: 'CESS: Decentralized Data Infrastructure',
    description: 'An in-depth exploration of the CESS network, a decentralized data and value infrastructure. The curriculum covered the fundamentals of blockchain and Web3, the architecture of the CESS network, and its key technologies — with hands-on experience setting up and operating both consensus and storage nodes, using the DeOSS (Decentralized Object Storage) system via its REST API, and building dApps with both Ink! and Solidity, as well as creating custom pallets.',
    tags: ['Decentralized Storage', 'WASM', 'EVM', 'Ink\!', 'Solidity'],
  },
  {
    title: 'CompTIA Security+ (SY0-701)',
    description: 'A globally recognized credential that validates the baseline skills needed to perform core security functions. It covers network security, compliance and operational security, threats and vulnerabilities, application/data/host security, access control and identity management, and cryptography, assessed through multiple-choice and performance-based questions.',
    tags: ['Threat & Vulnerability Management', 'Security Architecture', 'Risk Management'],
  },
  {
    title: 'Projeto ILIADA — Blockchain Introduction, Web3 and Rollups (Cartesi)',
    description: 'Training in dApp development covering Web3 fundamentals, developer tooling (Linux, Docker, React), Smart Contracts (Solidity/Vyper), and Layer-2 Rollups with the Cartesi Rollups SDK — building familiarity with the rollups architecture and workflow.',
    tags: ['Web3', 'Rollups', 'Cartesi', 'Layer 2', 'Smart Contracts'],
  },
  {
    title: 'Google Cybersecurity Professional Certificate',
    description: 'A professional program covering the identification and mitigation of common risks, threats, and vulnerabilities, with hands-on experience using industry-standard tools such as Python, Linux, SQL, and SIEM tools across 170+ hours of instruction, labs, and practice-based assessments that simulate real-world scenarios.',
    tags: ['Cybersecurity Analysis', 'Incident Response', 'Network Security'],
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <h3 className="text-lg font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-8">
        Courses & Certifications
      </h3>

      <div className="flex flex-col gap-12">
        {certifications.map((cert, index) => (
            <div key={index} className="md:col-span-3">
              <h4 className="font-bold text-lg text-gray-800 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400">
                {cert.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {cert.description}
              </p>
              <TechTags technologies={cert.tags} />
            </div>

        ))}
      </div>
    </section>
  );
};

export default Certifications;
