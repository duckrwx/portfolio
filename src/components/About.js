import React from 'react';

const About = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <p className="leading-relaxed">
        My path into Web3 started with networks — and with a very Brazilian question: what does it cost to build something reliable when trust itself is scarce and expensive?
        <br /><br />
        Studying communication networks engineering at UnB, and spending four years keeping production infrastructure alive — first at Telebras, then at Anatel — taught me to distrust assumptions: to care about what happens when a link drops, when a system is under load, when you can't take it on faith that things are what they claim to be. Where institutional trust is costly and easily broken, that stops being abstract; it's daily life. To me it's also the clearest case for blockchain — not as a buzzword, but as a way to relocate trust from fragile institutions to code and math that anyone can verify.
        <br /><br />
        So these days I build systems where integrity is proven, not promised — anchoring video custody to Bitcoin so it can't be quietly tampered with, writing Rust for the Polkadot ecosystem, and reaching for formal methods like TLA+ when something is too important to just "probably" work. I care more about durable, honest engineering than buzzwords — and I like passing that on, as a monitor for UnB's smart-contract programming course, because the best way to understand a system is having to explain it.
      </p>
    </section>
  );
};

export default About;
