import { Twitter } from "lucide-react";
import kompyImage from "@/assets/kompy.jpg";
import eliasImage from "@/assets/elias.jpg";
import netroImage from "@/assets/netro.jpg";
import blockbelleImage from "@/assets/blockbelle.jpg";
import michaelImage from "@/assets/michael.png";

const Team = () => {
  const teamMembers = [
    {
      name: "Kompy",
      role: "CEO & Founder",
      image: kompyImage,
      bio: "6+ years in KOL Management and Web3 Marketing. Ex. Urban Node, Thor Labs, Runner Bot, Icoda.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "kompy@muffin.agency"
      }
    },
    {
      name: "Michael",
      role: "Head of BD",
      image: michaelImage,
      bio: "Organised high quality partnerships & collaborations in web3 space for the last 7 years.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "elias@muffin.agency"
      }
    },
    {
      name: "Netro",
      role: "Senior SMM Manager",
      image: netroImage,
      bio: "Working for major Alpha communites, NFT and DeFi projects as head of SMM.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "netro@muffin.agency"
      }
    },
    {
      name: "Blockbelle",
      role: "Senior KOL Manager",
      image: blockbelleImage,
      bio: "5+ years in KOL Management. Expert in Trading, DeFi, Token niches.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "blockbelle@muffin.agency"
      }
    },
    {
      name: "Elias",
      role: "X Boosting",
      image: eliasImage,
      bio: "An experienced community builder on X & Discord.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "elias@muffin.agency"
      }
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
            [Team of 10 people]
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
                  <a
                    href={member.social.twitter}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
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
