import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = {
  language: string;
  value: string;
};

const CodeBlock: React.FC<Props> = (props: Props) => {
  const { language = null, value } = props;
  return (
    <SyntaxHighlighter language={language} style={atomDark}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
