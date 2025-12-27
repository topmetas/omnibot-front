import Joyride from "react-joyride";

export default function Onboarding() {
  const steps = [
    {
      target: "body",
      content: "Bem-vindo ao OmniBot IA 🚀",
      placement: "center",
    },
    {
      target: ".dashboard-title",
      content: "Aqui você acompanha o uso do seu plano",
    },
    {
      target: ".usage-cards",
      content: "Esses cards mostram mensagens e tokens",
    },
  ];

  return (
    <Joyride
      steps={steps}
      continuous
      showSkipButton
      showProgress
      styles={{
        options: {
          primaryColor: "#4f46e5",
          zIndex: 10000,
        },
      }}
    />
  );
}