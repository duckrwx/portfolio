import React from 'react';

const About = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <p className="leading-relaxed">
        I am Paulo Victor da Costa Vilarins, a developer passionate about blockchain architecture and dedicated to building the future of Web3. My journey began at the University of Brasília, where I learned from Professor Dr. Cláudia Barenco and developers from CESS.
        <br /><br />
        This experience gave me a deep understanding of the technology's potential. While amazed by CESS's decentralized storage solution, I grew concerned about the energy resources required to keep nodes running. This inspired my first project, Sunest, a decentralized P2P marketplace for members of an energy community to securely trade solar energy credits.
        <br /><br />
        Building on this foundational experience, my focus is now on mastering the tools that enable the next generation of decentralized applications. I am actively deepening my expertise in Rust, exploring its power for creating secure and high-performance smart contracts that compile to WebAssembly (Wasm) using frameworks like Ink!. My goal remains the same: to create innovative solutions that leverage Web3 to solve real-world problems and make everyday life easier.
      </p>
    </section>
  );
};

export default About;
