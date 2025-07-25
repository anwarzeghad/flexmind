import React, { useRef, useEffect } from 'react';

const Terminal = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    terminalRef.current?.focus();
  }, []);

  const fixedLineCount = 30;
  const lineNumbers = Array.from({ length: fixedLineCount }, (_, i) => i + 1);

  return (
    <div
      className="rounded-xl shadow-2xl mx-auto mt-16 select-text max-w-full"
      style={{
        width: '700px',
        maxWidth: '100%',
        height: '450px',
        background:
          'linear-gradient(135deg, rgba(18,163,135,0.95) 0%, rgba(11,85,69,0.85) 100%)',
        fontFamily: "'Source Code Pro', monospace",
        color: '#a8f0c6',
        userSelect: 'text',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
        display: 'flex',
        flexDirection: 'column',
      }}
      role="region"
      aria-label="Interactive coding terminal"
      tabIndex={-1}
    >
      {/* Barre titre */}
      <header
        className="flex items-center space-x-3 px-4 py-2 select-none"
        style={{
          backgroundColor: 'rgba(0,0,0,0.15)',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
        }}
      >
        <div className="flex space-x-2">
          <span
            className="w-4 h-4 rounded-full shadow-md"
            style={{ backgroundColor: '#ff5f56' }}
          ></span>
          <span
            className="w-4 h-4 rounded-full shadow-md"
            style={{ backgroundColor: '#ffbd2e' }}
          ></span>
          <span
            className="w-4 h-4 rounded-full shadow-md"
            style={{ backgroundColor: '#27c93f' }}
          ></span>
        </div>
        <span className="ml-4 font-semibold text-green-100 text-sm">
          green-terminal — bash
        </span>
      </header>

      {/* Terminal contenu */}
      <main className="flex flex-1 overflow-hidden">
        {/* Numéros de ligne (fixés) */}
        <aside
          aria-hidden="true"
          className="select-none pr-4 pt-6 text-green-300 text-right font-mono"
          style={{
            width: '3.5rem',
            lineHeight: '1.5rem',
            fontSize: '0.85rem',
            userSelect: 'none',
            backgroundColor: 'rgba(0,0,0,0.1)',
          }}
        >
          {lineNumbers.map((num) => (
            <div key={num} className="leading-6">
              {num}
            </div>
          ))}
        </aside>

        {/* Zone editable */}
        <section
          ref={terminalRef}
          contentEditable
          spellCheck={false}
          suppressContentEditableWarning={true}
          className="p-6 pt-6 flex-1 leading-6 outline-none whitespace-pre-wrap break-words overflow-auto font-mono text-base"
          style={{
            caretColor: '#a8f0c6',
            lineHeight: '1.5rem',
            direction: 'ltr',
            textAlign: 'left',
            minHeight: '450px',
            userSelect: 'text',
          }}
          onKeyDown={(e) => {
            if (e.key === 'Tab') {
              e.preventDefault();
              document.execCommand('insertText', false, '  ');
            }
          }}
          aria-label="Editable terminal input"
          role="textbox"
        >
          Welcome to Flexmind — your coding playground
        </section>
      </main>

      {/* Footer */}
      <footer
        className="text-green-200 text-xs px-6 py-1 select-none"
        style={{
          backgroundColor: 'rgba(0,0,0,0.12)',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
        }}
      >
        green-terminal v1.0 — Ready.
      </footer>
    </div>
  );
};

export default Terminal;
