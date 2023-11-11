import React from 'react';
import ReactMarkdown from 'react-markdown';

export function convertMarkdownToHtml(markdown) {
    // Removed the enclosing "<p>" tags. References: https://github.com/remarkjs/react-markdown/issues/42
    return (
        <ReactMarkdown
            components={{
                p: React.Fragment,
            }}
        >
            {markdown}
        </ReactMarkdown>
    )
}
