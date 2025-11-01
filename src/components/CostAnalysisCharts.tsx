import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// 5-year savings data
const savingsOverTime = [
  { year: "Year 1", evCost: 600, gasCost: 2100, cumulative: 1500 },
  { year: "Year 2", evCost: 600, gasCost: 2205, cumulative: 3105 },
  { year: "Year 3", evCost: 600, gasCost: 2315, cumulative: 4820 },
  { year: "Year 4", evCost: 600, gasCost: 2431, cumulative: 6651 },
  { year: "Year 5", evCost: 600, gasCost: 2552, cumulative: 8603 },
];

// Monthly comparison
const monthlyData = [
  { month: "Jan", ev: 45, gas: 175 },
  { month: "Feb", ev: 42, gas: 168 },
  { month: "Mar", ev: 48, gas: 180 },
  { month: "Apr", ev: 50, gas: 185 },
  { month: "May", ev: 55, gas: 195 },
  { month: "Jun", ev: 58, gas: 205 },
  { month: "Jul", ev: 62, gas: 215 },
  { month: "Aug", ev: 60, gas: 210 },
  { month: "Sep", ev: 52, gas: 190 },
  { month: "Oct", ev: 48, gas: 182 },
  { month: "Nov", ev: 45, gas: 175 },
  { month: "Dec", ev: 43, gas: 170 },
];

// Battery health over time
const batteryHealth = [
  { year: 0, health: 100, warranty: 100 },
  { year: 1, health: 98, warranty: 100 },
  { year: 2, health: 96, warranty: 100 },
  { year: 3, health: 94, warranty: 100 },
  { year: 4, health: 92, warranty: 100 },
  { year: 5, health: 91, warranty: 100 },
  { year: 6, health: 89, warranty: 100 },
  { year: 7, health: 88, warranty: 100 },
  { year: 8, health: 87, warranty: 100 },
  { year: 10, health: 85, warranty: 80 },
];

// Energy breakdown
const energyBreakdown = [
  { name: "Driving", value: 65, color: "hsl(210, 90%, 50%)" },
  { name: "Climate Control", value: 20, color: "hsl(155, 70%, 45%)" },
  { name: "Electronics", value: 10, color: "hsl(195, 100%, 60%)" },
  { name: "Battery Management", value: 5, color: "hsl(220, 20%, 60%)" },
];

const CostAnalysisCharts = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Data-Driven Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visualize the financial and performance benefits of electric vehicles
          </p>
        </div>

        <Tabs defaultValue="savings" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="savings">Savings</TabsTrigger>
            <TabsTrigger value="monthly">Monthly Costs</TabsTrigger>
            <TabsTrigger value="battery">Battery Health</TabsTrigger>
            <TabsTrigger value="energy">Energy Use</TabsTrigger>
          </TabsList>

          <TabsContent value="savings" className="animate-fade-in">
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle>5-Year Cost Savings Analysis</CardTitle>
                <CardDescription>
                  Cumulative savings comparing EV vs gasoline vehicle over 5 years
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={savingsOverTime}>
                    <defs>
                      <linearGradient id="colorCumulative" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(155, 70%, 45%)" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="hsl(155, 70%, 45%)" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => `$${value}`}
                      contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="cumulative"
                      stroke="hsl(155, 70%, 45%)"
                      fillOpacity={1}
                      fill="url(#colorCumulative)"
                      name="Total Savings"
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="mt-6 p-6 bg-accent/10 rounded-lg border-2 border-accent/20">
                  <p className="text-center">
                    <span className="text-3xl font-bold text-accent">$8,603</span>
                    <span className="text-muted-foreground ml-2">saved over 5 years</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monthly" className="animate-fade-in">
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle>Monthly Energy Cost Comparison</CardTitle>
                <CardDescription>
                  Average monthly fuel/electricity costs throughout the year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => `$${value}`}
                      contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                    />
                    <Legend />
                    <Bar dataKey="ev" fill="hsl(210, 90%, 50%)" name="Electric Vehicle" />
                    <Bar dataKey="gas" fill="hsl(0, 84%, 60%)" name="Gas Vehicle" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/10 rounded-lg border-2 border-primary/20 text-center">
                    <p className="text-2xl font-bold text-primary">$50/mo</p>
                    <p className="text-sm text-muted-foreground">Avg. EV Cost</p>
                  </div>
                  <div className="p-4 bg-destructive/10 rounded-lg border-2 border-destructive/20 text-center">
                    <p className="text-2xl font-bold text-destructive">$188/mo</p>
                    <p className="text-sm text-muted-foreground">Avg. Gas Cost</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="battery" className="animate-fade-in">
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle>Battery Health Over Time</CardTitle>
                <CardDescription>
                  Projected battery capacity retention with 8-year warranty baseline
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={batteryHealth}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" label={{ value: "Years", position: "insideBottom", offset: -5 }} />
                    <YAxis label={{ value: "Capacity %", angle: -90, position: "insideLeft" }} />
                    <Tooltip 
                      formatter={(value) => `${value}%`}
                      contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="health"
                      stroke="hsl(210, 90%, 50%)"
                      strokeWidth={3}
                      name="Battery Health"
                      dot={{ fill: "hsl(210, 90%, 50%)", r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="warranty"
                      stroke="hsl(155, 70%, 45%)"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="Warranty Coverage"
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-6 p-6 bg-primary/10 rounded-lg border-2 border-primary/20">
                  <p className="text-center">
                    <span className="text-3xl font-bold text-primary">85%</span>
                    <span className="text-muted-foreground ml-2">capacity retained after 10 years</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="energy" className="animate-fade-in">
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle>Energy Consumption Breakdown</CardTitle>
                <CardDescription>
                  Where your battery power goes during typical driving
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row items-center justify-around">
                  <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                      <Pie
                        data={energyBreakdown}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {energyBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => `${value}%`}
                        contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  
                  <div className="space-y-4 md:ml-8">
                    {energyBreakdown.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: item.color }}
                        />
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.value}% of energy</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CostAnalysisCharts;
