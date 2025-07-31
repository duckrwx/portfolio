import React from 'react';
import TechTags from './TechTags';

const certifications = [
  {
    title: 'Communication Networks Engineering @  University of Brasília (UnB)',
    description: 'I am currently pursuing a Bachelor\'s degree in Communication Networks Engineering at the University of Brasília (UnB), a top-tier Latin American university. My program holds Brazil\'s highest seal of academic excellence (Concept 5) and has provided me with a "full-stack" foundation in network infrastructure, protocols, and software security. his background gives me a deep, practical understanding of the core infrastructure that powers complex systems like Blockchain and Web3.',
    tags: ['Network Architecture', 'Protocol Design', 'Performance & Scalability Optimization'],
  },
  {
    title: 'CompTIA Security+ (SY0-701)',
    description: 'The CompTIA Security+ (SY0-701) certification is a globally recognized credential that validates the baseline skills needed to perform core security functions and pursue an IT security career. The certification covers a wide range of topics, including network security, compliance and operational security, threats and vulnerabilities, application, data and host security, access control and identity management, and cryptography. The exam consists of multiple-choice and performance-based questions that test the candidate\'s knowledge and skills in these areas.',
    tags: ['Threat & Vulnerability Management', 'Security Architecture', 'Risk Management'],
  },
  {
    title: 'Google Cybersecurity Professional Certificate',
    description: 'The Google Cybersecurity Professional Certificate is a beginner-level program designed to prepare individuals for a career in cybersecurity. The program, which can be completed in under six months with about seven hours of study per week, requires no prior experience or degree. The curriculum is composed of eight courses covering a range of topics, including the identification and mitigation of common risks, threats, and vulnerabilities. Students will gain practical experience with industry-standard tools such as Python, Linux, SQL, and Security Information and Event Management (SIEM) tools. The program includes over 170 hours of instruction, hands-on labs, and practice-based assessments that simulate real-world cybersecurity scenarios.',
    tags: ['Cybersecurity Analysis', 'Incident Response', 'Network Security'],
  },
  {
    title: 'CESS: Decentralized Data Infrastructure',
    description: 'This course provided an in-depth exploration of the CESS network, a decentralized data and value infrastructure. The curriculum covered the fundamental principles of blockchain and Web3, the specific architecture of the CESS network, and the practical application of its key technologies. The program included hands-on experience in setting up and operating both consensus and storage nodes, utilizing the DeOSS (Decentralized Object Storage) system via its REST API, and building decentralized applications (dApps). Development experience was gained using both Ink! and Solidity for smart contracts and creating custom pallets to contribute to the network\'s capabilities.',
    tags: ['Decentralized Storage', 'WASM', 'EVM', 'Ink\!', 'Solidity'],
  },
  {
    title: 'Projeto ILIADA Blockchain introdution, Web3 and Rollups in progress',
    description: 'This course provides end-to-end training in dApp development, covering Web3 fundamentals, developer tools (Linux, Docker, React), and advanced topics like Smart Contracts (Solidity/Vyper) and Layer-2 Rollups. The curriculum culminates in a hands-on project building a complete decentralized application with the Cartesi Rollups SDK.',
    tags: ['dApp Development', 'Web3', 'Rollups', 'Cartesi', 'Smart Contracts'],
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
            <div className="md:col-span-3">
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
