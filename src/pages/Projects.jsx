export default function Projects() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <ul className="space-y-4">
        <li className="border p-4 rounded shadow-sm">
          <h3 className="text-xl font-bold">NFT Curriculum Marketplace</h3>
          <p>A decentralized marketplace for résumés as NFTs. Built with Solidity, IPFS, and React.</p>
          <a href="https://github.com/duckrwx/curriculum-nft" className="text-blue-600 hover:underline">View repository</a>
        </li>
        {/* Add more projects here */}
      </ul>
    </section>
  );
}
