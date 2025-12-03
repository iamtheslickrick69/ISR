"use client"

import { useState } from "react"
import { ChevronRight, Edit2, Download, Target, TrendingUp, TrendingDown, Calendar, DollarSign } from "lucide-react"

const mockTransactions = [
  { id: "1", date: "Jan 1", client: "John D.", amount: 90, type: "In-Person" },
  { id: "2", date: "Dec 30", client: "Sarah M.", amount: 90, type: "Virtual" },
  { id: "3", date: "Dec 28", client: "Mike R.", amount: 90, type: "Simulator" },
  { id: "4", date: "Dec 25", client: "Tom K.", amount: 90, type: "In-Person" },
  { id: "5", date: "Dec 22", client: "Lisa W.", amount: 120, type: "Package" },
  { id: "6", date: "Dec 20", client: "James H.", amount: 90, type: "Virtual" },
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

const payoutHistory = [
  { id: "1", date: "Dec 15, 2024", amount: 890, status: "Completed" },
  { id: "2", date: "Nov 15, 2024", amount: 720, status: "Completed" },
  { id: "3", date: "Oct 15, 2024", amount: 650, status: "Completed" },
]

// Goal tracking
const monthlyGoal = 1500
const currentMonthEarnings = 1080
const goalProgress = Math.min((currentMonthEarnings / monthlyGoal) * 100, 100)

// Year over year comparison
const lastYearSameMonth = 820
const yoyGrowth = ((currentMonthEarnings - lastYearSameMonth) / lastYearSameMonth) * 100

export function ProEarningsTab() {
  const [chartPeriod, setChartPeriod] = useState<"week" | "month" | "year">("month")
  const [showGoalModal, setShowGoalModal] = useState(false)
  const [goalAmount, setGoalAmount] = useState(monthlyGoal.toString())

  const handleDownloadReport = () => {
    // In production, this would generate a PDF/CSV report
    alert("Downloading earnings report...")
  }

  return (
    <div>
      {/* Header with Title and Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="font-serif text-2xl tracking-wider text-white drop-shadow-lg">EARNINGS</h2>
        <button
          onClick={handleDownloadReport}
          className="flex items-center gap-2 px-5 py-2.5 bg-white text-[#226D50] font-serif text-sm tracking-wider shadow-[0_4px_24px_rgba(0,0,0,0.12)] hover:bg-[#226D50] hover:text-white transition-colors"
          style={{
            clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
          }}
        >
          <Download className="h-4 w-4" />
          DOWNLOAD REPORT
        </button>
      </div>

      {/* Monthly Goal Progress Card */}
      <div
        className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)] mb-8"
        style={{
          clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
        }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#226D50]/10 flex items-center justify-center" style={{ clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)" }}>
                <Target className="h-5 w-5 text-[#226D50]" />
              </div>
              <div>
                <h4 className="font-serif text-sm tracking-wider text-gray-400">JANUARY GOAL</h4>
                <p className="text-xs text-gray-500">15 days remaining</p>
              </div>
            </div>
            <div className="flex items-end gap-2 mb-3">
              <span className="font-serif text-4xl text-[#226D50]">${currentMonthEarnings.toLocaleString()}</span>
              <span className="font-serif text-xl text-gray-400">/ ${monthlyGoal.toLocaleString()}</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-gradient-to-r from-[#226D50] to-[#2D8B68] rounded-full transition-all duration-500"
                style={{ width: `${goalProgress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-[#226D50]">{goalProgress.toFixed(0)}%</span> of monthly goal reached
              {goalProgress < 100 && (
                <span className="text-gray-400"> — ${(monthlyGoal - currentMonthEarnings).toLocaleString()} to go</span>
              )}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 px-4 py-3 bg-[#F5F5F5]" style={{ clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)" }}>
              {yoyGrowth >= 0 ? (
                <TrendingUp className="h-5 w-5 text-[#226D50]" />
              ) : (
                <TrendingDown className="h-5 w-5 text-[#BF2424]" />
              )}
              <div>
                <p className="text-xs text-gray-500">vs. Last Year</p>
                <p className={`font-serif text-lg ${yoyGrowth >= 0 ? "text-[#226D50]" : "text-[#BF2424]"}`}>
                  {yoyGrowth >= 0 ? "+" : ""}{yoyGrowth.toFixed(0)}%
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowGoalModal(true)}
              className="flex items-center justify-center gap-2 px-4 py-2 border border-[#a29e7b] text-[#a29e7b] font-serif text-xs tracking-wider hover:bg-[#a29e7b] hover:text-white transition-colors"
              style={{
                clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
              }}
            >
              <Edit2 className="h-3 w-3" />
              SET GOAL
            </button>
          </div>
        </div>
      </div>

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

      {/* Two Column: Payout Settings + Payout History */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Payout Settings Card */}
        <div
          className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
          style={{
            clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
          }}
        >
          <h4 className="font-serif text-sm tracking-wider text-gray-400 mb-5">PAYOUT SETTINGS</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-[#F0F0F0]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#226D50]/10 flex items-center justify-center" style={{ clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)" }}>
                  <DollarSign className="h-5 w-5 text-[#226D50]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Bank Account</p>
                  <p className="text-sm font-medium text-black">Chase ****4521</p>
                </div>
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
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#a29e7b]/10 flex items-center justify-center" style={{ clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)" }}>
                  <Calendar className="h-5 w-5 text-[#a29e7b]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Next Payout</p>
                  <p className="text-sm font-medium text-black">Jan 15, 2025</p>
                </div>
              </div>
              <p className="font-serif text-2xl text-[#226D50]">$540</p>
            </div>
          </div>
        </div>

        {/* Payout History Card */}
        <div
          className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
          style={{
            clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
          }}
        >
          <h4 className="font-serif text-sm tracking-wider text-gray-400 mb-5">PAYOUT HISTORY</h4>
          <div className="space-y-0">
            {payoutHistory.map((payout) => (
              <div key={payout.id} className="flex items-center justify-between py-3 border-b border-[#F0F0F0] last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#226D50] rounded-full" />
                  <span className="text-sm text-gray-600">{payout.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs px-2 py-1 bg-[#226D50]/10 text-[#226D50]" style={{ clipPath: "polygon(3px 0, 100% 0, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0 100%, 0 3px)" }}>
                    {payout.status}
                  </span>
                  <span className="font-serif text-base text-[#226D50]">${payout.amount}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="flex items-center gap-1 mt-4 text-[#a29e7b] font-serif text-sm tracking-wider hover:gap-2 transition-all">
            VIEW ALL PAYOUTS
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Set Goal Modal */}
      {showGoalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowGoalModal(false)} />
          <div
            className="relative bg-white p-8 w-full max-w-md shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
            style={{
              clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
            }}
          >
            <h3 className="font-serif text-xl tracking-wider text-black mb-2">SET MONTHLY GOAL</h3>
            <p className="text-sm text-gray-500 mb-6">Set a revenue target to track your progress</p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs text-gray-500 mb-2">GOAL AMOUNT</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input
                    type="number"
                    value={goalAmount}
                    onChange={(e) => setGoalAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-200 text-lg focus:outline-none focus:border-[#226D50]"
                    style={{
                      clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                    }}
                  />
                </div>
              </div>

              <div className="flex gap-3">
                {[1000, 1500, 2000, 2500].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setGoalAmount(amount.toString())}
                    className={`flex-1 py-2 text-sm font-serif tracking-wider transition-colors ${
                      goalAmount === amount.toString()
                        ? "bg-[#226D50] text-white"
                        : "bg-[#F5F5F5] text-gray-600 hover:bg-gray-200"
                    }`}
                    style={{
                      clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                    }}
                  >
                    ${amount.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowGoalModal(false)}
                className="flex-1 py-3 border border-gray-300 text-gray-600 font-serif text-sm tracking-wider hover:bg-gray-50 transition-colors"
                style={{
                  clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                }}
              >
                CANCEL
              </button>
              <button
                onClick={() => {
                  // In production, save to backend
                  setShowGoalModal(false)
                }}
                className="flex-1 py-3 bg-[#226D50] text-white font-serif text-sm tracking-wider hover:bg-[#1a5a40] transition-colors"
                style={{
                  clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                }}
              >
                SAVE GOAL
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
