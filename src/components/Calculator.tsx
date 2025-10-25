import { useState } from "react";
import { motion } from "motion/react";
import { Calculator as CalcIcon, TrendingDown, Home, Percent } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";

export function Calculator() {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const calculateMonthlyPayment = () => {
    const principal = loanAmount - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (principal <= 0 || loanTerm <= 0) return 0;
    if (monthlyRate === 0) return principal / numberOfPayments;

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return monthlyPayment;
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalPayment = monthlyPayment * loanTerm * 12;
  const totalInterest = totalPayment - (loanAmount - downPayment);

  return (
    <section
      id="calculator"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-6">
            <CalcIcon className="w-4 h-4 text-blue-900" />
            <span className="text-blue-900">Calculadora de Hipoteca</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6">
            Calculate your Monthly Payment
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get an instant estimate of your monthly payment and plan your financial future
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100 space-y-8">
              {/* Loan Amount */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Label className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-blue-900" />
                    House Price
                  </Label>
                  <div className="text-2xl text-blue-900">
                    ${loanAmount.toLocaleString()}
                  </div>
                </div>
                <Slider
                  value={[loanAmount]}
                  onValueChange={(value: number[]) => setLoanAmount(value[0])}
                  min={50000}
                  max={2000000}
                  step={10000}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-slate-500">
                  <span>$50K</span>
                  <span>$2M</span>
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Label className="flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-amber-600" />
                    Initial Payment ({((downPayment / loanAmount) * 100).toFixed(0)}%)
                  </Label>
                  <div className="text-2xl text-amber-600">
                    ${downPayment.toLocaleString()}
                  </div>
                </div>
                <Slider
                  value={[downPayment]}
                  onValueChange={(value: number[]) => setDownPayment(value[0])}
                  min={0}
                  max={loanAmount * 0.5}
                  step={5000}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-slate-500">
                  <span>$0</span>
                  <span>${(loanAmount * 0.5).toLocaleString()}</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Label className="flex items-center gap-2">
                    <Percent className="w-4 h-4 text-emerald-600" />
                    Interest rate
                  </Label>
                  <div className="text-2xl text-emerald-600">
                    {interestRate.toFixed(2)}%
                  </div>
                </div>
                <Slider
                  value={[interestRate]}
                  onValueChange={(value: number[]) => setInterestRate(value[0])}
                  min={2}
                  max={12}
                  step={0.1}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-slate-500">
                  <span>2%</span>
                  <span>12%</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <Label className="mb-4 block">Loan Term</Label>
                <div className="grid grid-cols-3 gap-4">
                  {[15, 20, 30].map((term) => (
                    <button
                      key={term}
                      onClick={() => setLoanTerm(term)}
                      className={`py-4 px-6 rounded-xl border-2 transition-all duration-300 ${
                        loanTerm === term
                          ? "border-blue-900 bg-blue-900 text-white shadow-lg"
                          : "border-slate-200 hover:border-blue-300 bg-white text-slate-700"
                      }`}
                    >
                      <div className="text-2xl mb-1">{term}</div>
                      <div className="text-sm opacity-80">años</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resultados */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 text-white shadow-2xl">
              <div className="text-blue-200 mb-2">Estimated Monthly Payment</div>
              <div className="text-5xl mb-6">
                ${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
              <div className="space-y-3 pt-6 border-t border-blue-700">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200">Principal and Interest</span>
                  <span>${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200">Loan Term</span>
                  <span>{loanTerm} years</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <div className="text-slate-600 text-sm mb-2">Total Payment</div>
              <div className="text-3xl text-slate-900 mb-1">
                ${totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
              <div className="text-sm text-slate-500">Over {loanTerm} years</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <div className="text-slate-600 text-sm mb-2">Total Interest</div>
              <div className="text-3xl text-slate-900 mb-1">
                ${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
              <div className="text-sm text-slate-500">Cost of your loan</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
