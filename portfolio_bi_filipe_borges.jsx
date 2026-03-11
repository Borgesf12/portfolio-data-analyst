/*
===========================
GITHUB PORTFOLIO STRUCTURE
===========================

Recommended Repository Structure:

portfolio-data-analyst/
│
├── README.md
├── package.json
├── public/
├── src/
│   ├── data/
│   │   ├── kpis.js
│   │   ├── salesData.js
│   ├── PortfolioBI.jsx
│   └── main.jsx

---------------------------
README.md TEMPLATE (Copy Below)
---------------------------

# Filipe Borges - Data Analyst Portfolio

## About Me
Data Analyst focused on transforming complex datasets into strategic business insights.
Experience with Python, SQL, Power BI and Business Intelligence dashboards.

## Tech Stack
- Python (Pandas, Numpy)
- SQL (PostgreSQL, MySQL)
- Power BI
- Excel Advanced
- React + Recharts

## Highlighted Projects

### 1. Market Growth Analysis
Business problem: Identify seasonality and revenue optimization opportunities.
Impact: +15% simulated revenue growth.
Tools: Python, Pandas, Visualization.

### 2. Executive Financial Dashboard
Business problem: Improve executive decision-making through KPIs.
KPIs: ROI, Margin, Break-even, Growth.
Tools: Power BI, SQL.

## How to Run Locally

```bash
npm install
npm run dev
```

## Contact
LinkedIn: (your link)
GitHub: (your link)
Email: (your email)

===========================
EDITABLE DATA SECTION
===========================
To update with new analyses, just modify the arrays below.
You can replace values monthly with real project metrics.
*/

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from "recharts";
import { Database, BarChart3, TrendingUp, Github, Mail, Linkedin } from "lucide-react";

// ===========================
// EDIT KPIs HERE
// ===========================

const kpiData = [
  { title: "Revenue Growth (6M)", value: "+166%", icon: <TrendingUp size={28} /> },
  { title: "Data Projects Delivered", value: "12+", icon: <Database size={28} /> },
  { title: "Dashboards Built", value: "20+", icon: <BarChart3 size={28} /> },
];

// ===========================
// EDIT MONTHLY DATA HERE
// ===========================

const salesData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 22000 },
  { month: "May", revenue: 27000 },
  { month: "Jun", revenue: 32000 },
];

export default function PortfolioBI() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <h1 className="text-5xl font-bold mb-3">Filipe Borges</h1>
        <p className="text-xl text-gray-400 mb-4">
          Data Analyst | Business Intelligence | Python | SQL | Power BI
        </p>

        <p className="text-gray-400 max-w-3xl mb-6 leading-relaxed">
          Data Analyst focused on business impact, KPI optimization and strategic dashboards.
          Strong analytical mindset with experience in exploratory data analysis and executive reporting.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button className="rounded-2xl">Download Resume</Button>
          <Button variant="outline" className="rounded-2xl flex items-center gap-2">
            <Github size={18} /> GitHub
          </Button>
          <Button variant="outline" className="rounded-2xl flex items-center gap-2">
            <Linkedin size={18} /> LinkedIn
          </Button>
          <Button variant="outline" className="rounded-2xl flex items-center gap-2">
            <Mail size={18} /> Contact
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        {kpiData.map((kpi, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="bg-gray-900 border-none rounded-2xl shadow-2xl">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{kpi.title}</p>
                  <h2 className="text-3xl font-bold">{kpi.value}</h2>
                </div>
                <div className="text-indigo-400">{kpi.icon}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
        <Card className="bg-gray-900 border-none rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Revenue Dashboard Preview</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Bar dataKey="revenue" fill="#6366f1" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-none rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Growth Trend Analysis</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#22c55e" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Highlighted Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-900 border-none rounded-2xl shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Market Growth Analysis</h3>
              <p className="text-gray-400 mb-4">
                Exploratory data analysis identifying seasonality patterns and revenue optimization opportunities.
                Generated +15% simulated revenue growth.
              </p>
              <Button className="rounded-2xl">View Case Study</Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-none rounded-2xl shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Executive Financial Dashboard</h3>
              <p className="text-gray-400 mb-4">
                Executive BI dashboard with ROI, margin, break-even and growth KPIs.
              </p>
              <Button className="rounded-2xl">View Case Study</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
