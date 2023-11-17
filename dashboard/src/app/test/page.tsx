'use client'
import Step from "@/components/multi-step";
import { useState } from "react";

export default function Demo() {
    let [step, setStep] = useState(1);

    return (
        <div className="flex min-h-full flex-1 flex-col items-center justify-center bg-gray-900/90 p-4 backdrop-blur-xl sm:aspect-[4/3] md:aspect-[2/1]">
            <div className="mx-auto w-full max-w-md rounded-lg bg-white shadow-xl">
                <div className="flex justify-between rounded p-8">
                    <Step step={1} currentStep={step} />
                    <Step step={2} currentStep={step} />
                    <Step step={3} currentStep={step} />
                    <Step step={4} currentStep={step} />
                </div>

                {/* Dynamic content based on `step` */}
                <div className="space-y-2 px-8">
                    <div className="h-4 w-5/6 rounded bg-red-4  00" />
                    <div className="h-4 rounded bg-neutral-100" />
                    <div className="h-4 w-4/6 rounded bg-neutral-100" />
                </div>

                <div className="px-8 pb-8">
                    <div className="mt-10 flex justify-between">
                        <button
                            onClick={() => setStep(step < 2 ? step : step - 1)}
                            className={`${step === 1 ? "pointer-events-none opacity-50" : ""
                                } duration-350 rounded px-2 py-1 text-neutral-400 transition hover:text-neutral-700`}
                        >
                            Back
                        </button>
                        <button
                            onClick={() => setStep(step > 4 ? step : step + 1)}
                            className={`${step > 4 ? "pointer-events-none opacity-50" : ""
                                } bg duration-350 flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-3.5 font-medium tracking-tight text-white transition hover:bg-blue-600 active:bg-blue-700`}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
