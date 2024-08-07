export function kebabCaseToTitleCase(colorName) {
    const colorWithSpaces = colorName.replace(/-/g, " "); // Utiliza /-/g para substituir todas as ocorrências de "-"
  
    const colorWithCaps = colorWithSpaces.replace(/\b([a-z])/g, (match) =>
      match.toUpperCase()
    );
  
    console.log(colorWithCaps);
    return colorWithCaps;
  }