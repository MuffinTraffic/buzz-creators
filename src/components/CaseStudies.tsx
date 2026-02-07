import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Wallet, BarChart3, Clock, Target } from "lucide-react";

const caseStudies = [
  {
    badge: "Launch",
    client: "Layer-2 Gaming Protocol (NDA)",
    goal: "Launch awareness + onboard early community through KOLs",
    strategy: [
      "18 Twitter KOLs",
      "6 YouTube reviews",
      "Telegram AMA campaign"
    ],
    results: [
      { icon: TrendingUp, label: "Total Reach", value: "2.3M" },
      { icon: Users, label: "New Followers", value: "41,000" },
      { icon: Wallet, label: "Wallet Signups", value: "9,200" },
      { icon: BarChart3, label: "Avg Engagement", value: "3.8%" }
    ],
    duration: "6 weeks"
  },
  {
    badge: "Community Growth",
    client: "DeFi Yield Aggregator (NDA)",
    goal: "Scale community from 5K to 50K+ members and drive protocol TVL",
    strategy: [
      "25 Micro-KOL activations",
      "Discord & Telegram raid campaigns",
      "Weekly AMA series with ecosystem partners"
    ],
    results: [
      { icon: Users, label: "Community Growth", value: "48K+" },
      { icon: TrendingUp, label: "Total Impressions", value: "5.1M" },
      { icon: Target, label: "Discord Members", value: "32,000" },
      { icon: BarChart3, label: "Retention Rate", value: "72%" }
    ],
    duration: "8 weeks"
  },
  {
    badge: "Token Sale",
    client: "NFT Marketplace & Token (NDA)",
    goal: "Drive awareness and participation for public token sale and NFT mint",
    strategy: [
      "30 KOL partnerships (Twitter + YouTube)",
      "Whitelist campaign with giveaway mechanics",
      "Influencer-led countdown content series"
    ],
    results: [
      { icon: TrendingUp, label: "Total Reach", value: "8.7M" },
      { icon: Wallet, label: "Whitelist Signups", value: "24,500" },
      { icon: Users, label: "Sale Participants", value: "6,800" },
      { icon: BarChart3, label: "Sold Out In", value: "47 min" }
    ],
    duration: "4 weeks"
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Case <span className="text-gradient">Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real campaigns. Here's how we've helped Web3 projects scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={index}
              className="relative border-border bg-card hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <Badge className="bg-secondary text-secondary-foreground font-semibold">
                  {study.badge}
                </Badge>
              </div>

              <CardHeader className="pb-4">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Client</p>
                <CardTitle className="text-lg leading-snug pr-20">{study.client}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Goal */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Goal</p>
                  <p className="text-sm text-foreground/80">{study.goal}</p>
                </div>

                {/* Strategy */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Strategy</p>
                  <ul className="space-y-1.5">
                    {study.strategy.map((item, i) => (
                      <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Results</p>
                  <div className="grid grid-cols-2 gap-3">
                    {study.results.map((result, i) => (
                      <div key={i} className="bg-muted rounded-lg p-3 text-center">
                        <result.icon className="w-4 h-4 text-primary mx-auto mb-1" />
                        <p className="text-lg font-bold text-foreground">{result.value}</p>
                        <p className="text-xs text-muted-foreground">{result.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 pt-2 border-t border-border">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Campaign Duration:</span>
                  <span className="text-sm font-semibold text-foreground">{study.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
