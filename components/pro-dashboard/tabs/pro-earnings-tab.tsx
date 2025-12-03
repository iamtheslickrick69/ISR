"use client"

import { useState } from "react"
import { ChevronRight, Edit2 } from "lucide-react"

const mockTransactions = [
  { id: "1", date: "Jan 1", client: "John D.", amount: 90 },
  { id: "2", date: "Dec 30", client: "Sarah M.", amount: 90 },
  { id: "3", date: "Dec 28", client: "Mike R.", amount: 90 },
  { id: "4", date: "Dec 25", client: "Tom K.", amount: 90 },
]

const breakdownData = [
  { type: "In-Person", amount: 5200, percentage: 42 },
  { type: "Simulator", amount: 4800, percentage: 38 },
  { type: "Virtual", amount: 2450, percentage: 20 },
]

const chartData = [
  { month: "Oct", value: 600 },
  { month: "Nov", value: 850 },
  { month: "Dec", value: 1020 },
  { month: "Jan", value: 1080 },
]

export function ProEarningsTab() {
  const [chartPeriod, setChartPeriod] = useState<"week" | "month" | "year">("month")

  return (
    <div>
      <h2 className="font-serif text-2xl tracking-wider text-white mb-6 drop-shadow-lg">EARNINGS</h2>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div
          className="bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
          style={{
            clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
          }}
        >
          <p className="font-serif text-xs tracking-wider text-gray-400 mb-2">ALL-TIME EARNINGS</p>
          <p className="font-serif text-3xl text-[#a29e7b]">$12,450</p>
        </div>
        <div
          className="bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
          style={{
            clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
          }}
        >
          <p className="font-serif text-xs tracking-wider text-gray-400 mb-2">THIS MONTH</p>
          <p className="font-serif text-3xl text-[#a29e7b]">$1,080</p>
        </div>
        <div
          className="bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
          style={{
            clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
          }}
        >
          <p className="font-serif text-xs tracking-wider text-gray-400 mb-2">PENDING PAYOUT</p>
          <p className="font-serif text-3xl text-[#a29e7b]">$540</p>
        </div>
        <div
          className="bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
          style={{
            clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
          }}
        >
          <p className="font-serif text-xs tracking-wider text-gray-400 mb-2">COURSE FEE</p>
          <p className="font-serif text-3xl text-[#a29e7b]">5%</p>
          <p className="text-xs text-gray-500">Revenue share</p>
        </div>
      </div>

      {/* Revenue Chart Card */}
      <div
        className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)] mb-8"
        style={{
          clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
        }}
      >
        <div className="flex items-center justify-between mb-6">
          <h4 className="font-serif text-sm tracking-wider text-gray-400">REVENUE CHART</h4>
          <div className="flex gap-1">
            {(["week", "month", "year"] as const).map((period) => (
              <button
                key={period}
                onClick={() => setChartPeriod(period)}
                className={`px-4 py-2 font-serif text-xs tracking-wider transition-colors ${
                  chartPeriod === period ? "bg-[#a29e7b] text-white" : "bg-[#F5F5F5] text-gray-500 hover:bg-gray-200"
                }`}
                style={{
                  clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                }}
              >
                {period.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Simple Bar Chart */}
        <div className="h-[200px] flex items-end justify-around gap-4 border-b border-gray-200 pb-4">
          {chartData.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2 flex-1">
              <div
                className="w-full max-w-[60px] bg-gradient-to-t from-[#a29e7b] to-[#D4AF37] transition-all duration-300"
                style={{
                  height: `${(item.value / 1200) * 160}px`,
                  clipPath: "polygon(4px 0, 100% 0, 100% 100%, 0 100%, 0 4px)",
                }}
              />
              <span className="text-xs text-gray-500">{item.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Breakdown by Type */}
        <div
          className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
          style={{
            clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
          }}
        >
          <h4 className="font-serif text-sm tracking-wider text-gray-400 mb-5">BREAKDOWN BY TYPE</h4>
          <div className="space-y-4">
            {breakdownData.map((item) => (
              <div key={item.type} className="pb-4 border-b border-[#F0F0F0] last:border-0">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-black">{item.type}</span>
                  <span className="font-serif text-base text-[#a29e7b]">${item.amount.toLocaleString()}</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#a29e7b] to-[#D4AF37] rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transaction History */}
        <div
          className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
          style={{
            clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
          }}
        >
          <h4 className="font-serif text-sm tracking-wider text-gray-400 mb-5">TRANSACTION HISTORY</h4>
          <div className="space-y-0">
            {mockTransactions.map((tx) => (
              <div key={tx.id} className="flex justify-between py-3 border-b border-[#F0F0F0] last:border-0">
                <span className="text-sm text-gray-500">
                  {tx.date} — {tx.client}
                </span>
                <span className="font-serif text-base text-[#226D50]">+${tx.amount}</span>
              </div>
            ))}
          </div>
          <button className="flex items-center gap-1 mt-4 text-[#a29e7b] font-serif text-sm tracking-wider hover:gap-2 transition-all">
            VIEW ALL
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Payout Settings Card */}
      <div
        className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
        style={{
          clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
        }}
      >
        <h4 className="font-serif text-sm tracking-wider text-gray-400 mb-5">PAYOUT SETTINGS</h4>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-xs text-gray-500 mb-1">Bank Account</p>
              <p className="text-sm font-medium text-black">****4521</p>
            </div>
            <button
              className="flex items-center gap-1 border border-[#a29e7b] text-[#a29e7b] font-serif text-xs tracking-wider px-3 py-1.5 hover:bg-[#a29e7b] hover:text-white transition-colors"
              style={{
                clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
              }}
            >
              <Edit2 className="h-3 w-3" />
              EDIT
            </button>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500 mb-1">Next Payout: Jan 15, 2025</p>
            <p className="font-serif text-xl text-[#226D50]">$540</p>
          </div>
        </div>
      </div>
    </div>
  )
}
