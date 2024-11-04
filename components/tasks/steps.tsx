import { Check } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
}

interface StepsProps {
  steps: Step[];
  currentStep: number;
}

export function Steps({ steps, currentStep }: StepsProps) {
  return (
    <div className="relative space-y-4">
      <div className="absolute left-0 top-4 h-0.5 w-full bg-muted">
        <div
          className="absolute h-full bg-primary transition-all duration-500"
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
        />
      </div>

      <div className="relative z-10 flex justify-between">
        {steps.map((step) => {
          const isComplete = currentStep > step.id;
          const isCurrent = currentStep === step.id;

          return (
            <div
              key={step.id}
              className="flex flex-col items-center space-y-2"
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors ${
                  isComplete
                    ? "border-primary bg-primary text-primary-foreground"
                    : isCurrent
                    ? "border-primary bg-background text-primary"
                    : "border-muted bg-background"
                }`}
              >
                {isComplete ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <span className="text-sm">{step.id}</span>
                )}
              </div>
              <div className="flex flex-col items-center space-y-1">
                <span className="text-sm font-medium">{step.title}</span>
                <span className="text-xs text-muted-foreground">
                  {step.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}