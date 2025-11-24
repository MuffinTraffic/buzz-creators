import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Activity, TrendingUp, CheckCircle2 } from "lucide-react";
import kolPerformanceDashboard from "@/assets/kol-performance-dashboard.png";

const PerformanceDashboard = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-1.5 bg-orange/10 text-orange rounded-full text-sm font-semibold">
              Real-Time Analytics
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Performance <span className="text-gradient">Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track every metric that matters with our comprehensive performance dashboard. 
            Monitor KOL health, engagement rates, and campaign ROI in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* First Image - KOL Performance Tracking */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange to-orange-light rounded-2xl opacity-25 group-hover:opacity-40 blur transition duration-300"></div>
            <Card className="relative border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={kolPerformanceDashboard}
                  alt="KOL Performance Tracking Dashboard"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-orange/20 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-orange" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">KOL Performance Tracking</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Monitor engagement rates, reach, conversions, and ROI across all your KOL campaigns
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content for Performance Tracking */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Easy KOL Performance Tracking</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our intuitive dashboard provides instant visibility into every aspect of your KOL campaigns. 
              Track engagement metrics, audience growth, content performance, and conversion rates—all in one place.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Real-Time Metrics</p>
                  <p className="text-sm text-muted-foreground">Live data updates for immediate insights</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Engagement Analytics</p>
                  <p className="text-sm text-muted-foreground">Track likes, shares, comments, and conversions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">ROI Calculation</p>
                  <p className="text-sm text-muted-foreground">Measure campaign profitability automatically</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content for Health Check */}
          <div className="space-y-6 order-2 lg:order-1">
            <h3 className="text-2xl font-bold">Comprehensive KOL Health Check</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ensure authenticity and quality with our advanced KOL health monitoring system. 
              We analyze follower quality, engagement authenticity, content consistency, and brand alignment to protect your investment.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Activity className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Authenticity Score</p>
                  <p className="text-sm text-muted-foreground">Detect fake followers and engagement patterns</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Activity className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Content Quality</p>
                  <p className="text-sm text-muted-foreground">Evaluate consistency and production value</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Activity className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Brand Safety</p>
                  <p className="text-sm text-muted-foreground">Monitor alignment with your brand values</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Image - KOL Health Check */}
          <div className="relative group order-1 lg:order-2">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-light to-orange rounded-2xl opacity-25 group-hover:opacity-40 blur transition duration-300"></div>
            <Card className="relative border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                  alt="KOL Health Check Analytics"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-orange/20 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-orange" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">KOL Health Check</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Verify authenticity, audience quality, and brand alignment for every influencer
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceDashboard;
