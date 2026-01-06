import { Twitter } from "lucide-react";
import kompyImage from "@/assets/kompy.jpg";
import eliasImage from "@/assets/elias.jpg";
import blockbelleImage from "@/assets/blockbelle.jpg";
import michaelImage from "@/assets/michael.png";

const Team = () => {
  const teamMembers = [
    {
      name: "Kompy",
      role: "CEO & Co-Founder",
      image: kompyImage,
      bio: "6+ years in Web3 Marketing & KOL Management. Blockchain Events Speaker. Head of CIS at Frontrun. Member of Solana SuperteamKZ.",
      twitter: "https://x.com/theKompy"
    },
    {
      name: "Blockbelle",
      role: "COO & Co-Founder",
      image: blockbelleImage,
      bio: "5+ years in Fullcycle Marketing & Web3 KOL Management. Expert in Trading, DeFi, Token niches.",
      twitter: "https://x.com/b1ockbelle"
    },
    {
      name: "Michael",
      role: "Head of BD",
      image: michaelImage,
      bio: "8+ years in Business Development. AMA Host. Casually organising high quality partnerships & collaborations in Web3 DeFi space.",
      twitter: "https://x.com/NeuronBizdev"
    },
    {
      name: "Elias",
      role: "X Boosting Manager",
      image: eliasImage,
      bio: "4+ years in Business Development & Community Building (X & Discord). Founder of Shinigami Alpha.",
      twitter: "https://x.com/_Eliasoul_"
    }
  ];

  return (
    <section className="py-20 bg-background" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Core Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Team of 10 people
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2 text-sm">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-3">{member.bio}</p>
                
                <div className="flex gap-3">
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;