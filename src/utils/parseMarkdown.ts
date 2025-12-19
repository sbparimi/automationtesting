import React from 'react';

// Simple markdown parser for inline formatting
export function parseMarkdown(text: string): React.ReactNode[] {
  if (!text) return [text];
  
  const parts: React.ReactNode[] = [];
  let key = 0;
  
  // Pattern to match **bold**, *italic*, and `code`
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  
  let match;
  let lastIndex = 0;
  
  while ((match = pattern.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    
    const matched = match[0];
    
    if (matched.startsWith('**') && matched.endsWith('**')) {
      // Bold text
      const content = matched.slice(2, -2);
      parts.push(React.createElement('strong', { key: key++, className: 'font-bold text-foreground' }, content));
    } else if (matched.startsWith('`') && matched.endsWith('`')) {
      // Inline code
      const content = matched.slice(1, -1);
      parts.push(React.createElement('code', { key: key++, className: 'bg-muted px-1.5 py-0.5 rounded text-sm font-mono' }, content));
    } else if (matched.startsWith('*') && matched.endsWith('*')) {
      // Italic text
      const content = matched.slice(1, -1);
      parts.push(React.createElement('em', { key: key++, className: 'italic' }, content));
    }
    
    lastIndex = match.index + matched.length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  
  return parts.length > 0 ? parts : [text];
}
