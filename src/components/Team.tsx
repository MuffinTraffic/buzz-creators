import { Linkedin, Twitter, Mail } from "lucide-react";
import kompyImage from "@/assets/kompy.jpg";

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
      name: "Michael Rodriguez",
      role: "Head of Strategy",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Former CMO at leading Web3 companies",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@muffin.agency"
      }
    },
    {
      name: "Emily Zhang",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Award-winning designer with a passion for crypto",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@muffin.agency"
      }
    },
    {
      name: "David Park",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Blockchain architect and full-stack developer",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@muffin.agency"
      }
    }
  ];

  return (
    <section className="py-20 bg-background" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experts dedicated to elevating your crypto project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                
                <div className="flex gap-3">
                  <a
                    href={member.social.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={20} />
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
