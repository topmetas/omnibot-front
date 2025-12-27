import Joyride from "react-joyride";

export default function OnboardingTour({ run }) {
  const steps = [
    {
      target: "#menu-dashboard",
      content: "Aqui você vê o uso do chatbot",
    },
    {
      target: "#menu-clients",
      content: "Gerencie seus clientes SaaS",
    },
    {
      target: "#menu-billing",
      content: "Faça upgrade do plano",
    },
  ];

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      showProgress
      showSkipButton
    />
  );
}
