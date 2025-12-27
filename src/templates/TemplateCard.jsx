export default function TemplateCard({ template }) {
    return (
      <div className="border rounded-xl p-4">
        <h3 className="font-bold">{template.name}</h3>
        <p>{template.description}</p>
        <button className="btn-primary mt-2">Usar Template</button>
      </div>
    );
  }
  