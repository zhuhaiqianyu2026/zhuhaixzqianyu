import { useEffect } from "react";

interface SchemaInjectorProps {
  schemas: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function SchemaInjector({ schemas }: SchemaInjectorProps) {
  useEffect(() => {
    const schemaArray = Array.isArray(schemas) ? schemas : [schemas];

    schemaArray.forEach((schema, index) => {
      const scriptId = `schema-ld-${index}`;
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();

      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema, null, 2);
      document.head.appendChild(script);
    });

    return () => {
      schemaArray.forEach((_, index) => {
        const scriptId = `schema-ld-${index}`;
        const existing = document.getElementById(scriptId);
        if (existing) existing.remove();
      });
    };
  }, [schemas]);

  return null;
}
