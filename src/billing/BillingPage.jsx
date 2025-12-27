import PlanCard from "./PlanCard";

const plans = [
  { name: "free", price: 0 },
  { name: "eco", price: 49 },
  { name: "pro", price: 99 },
];

export default function BillingPage() {
  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      {plans.map((p) => (
        <PlanCard key={p.name} plan={p} />
      ))}
    </div>
  );
}
