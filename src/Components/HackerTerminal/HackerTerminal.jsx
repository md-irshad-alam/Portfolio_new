import React, { useState, useRef, useEffect } from 'react';
import './HackerTerminal.css';
import { BsTerminalFill } from 'react-icons/bs';

export const HackerTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to IrshadOS v1.0.0' },
    { type: 'system', text: 'Type "help" for a list of available commands.' }
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let response = [];

    switch (trimmed) {
      case 'help':
        response = [
          'Available commands:',
          '  whoami       - Display my brief introduction',
          '  skills       - List my technical arsenal',
          '  projects     - View my top secret projects',
          '  experience   - Show my professional background',
          '  sudo hire-me - Initiates recruitment protocol',
          '  clear        - Clear the terminal screen'
        ];
        break;
      case 'whoami':
        response = [
          'Name: Moh. Irshad Alam',
          'Role: Full Stack Web Developer',
          'Location: Bangalore, India',
          'Status: Ready to build awesome products'
        ];
        break;
      case 'skills':
        response = [
          '[Frontend]: React, Next.js, HTML/CSS, Tailwind',
          '[Backend] : Node.js, Express, Java',
          '[Database]: MongoDB, SQL',
          '[Tools]   : Git, Github, Vercel, Netlify'
        ];
        break;
      case 'projects':
        response = [
          '1. Visio - AI-powered educational ecosystem',
          '2. Store Management - Inventory & Sales tracker',
          '3. Sentinel Logs - Security monitoring layer',
          '4. QuickRide - Peer-to-peer ride-sharing'
        ];
        break;
      case 'experience':
        response = [
          '> Software Developer @ MatreComm Technology (May 2024 - Present)',
          '> MERN Stack Developer Intern @ Vatech Solution (Nov 2023 - May 2024)'
        ];
        break;
      case 'sudo hire-me':
        response = [
          'ACCESS GRANTED.',
          'Initiating recruitment protocol...',
          'Sending encrypted transmission to almairsh0205@gmail.com...',
          'Please wait for my response!'
        ];
        setTimeout(() => {
          window.open('mailto:almairsh0205@gmail.com', '_blank');
        }, 1500);
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        response = [`Command not found: ${trimmed}. Type "help" for a list of commands.`];
    }

    setHistory(prev => [
      ...prev,
      { type: 'user', text: `guest@irshados:~$ ${cmd}` },
      ...response.map(text => ({ type: 'system', text }))
    ]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  if (!isOpen) {
    return (
      <div className="terminal-launcher" onClick={() => setIsOpen(true)} title="Developer Mode">
        <BsTerminalFill />
      </div>
    );
  }

  return (
    <div className={`terminal-window ${isMaximized ? 'maximized' : ''}`}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="term-btn close" onClick={() => setIsOpen(false)}></div>
          <div className="term-btn minimize" onClick={() => setIsMaximized(false)}></div>
          <div className="term-btn maximize" onClick={() => setIsMaximized(!isMaximized)}></div>
        </div>
        <div className="terminal-title">guest@irshados:~</div>
      </div>
      <div className="terminal-body" onClick={() => document.getElementById('terminal-input').focus()}>
        {history.map((line, i) => (
          <div key={i} className={`terminal-line ${line.type}`}>
            {line.text}
          </div>
        ))}
        <form onSubmit={onSubmit} className="terminal-input-line">
          <span className="prompt">guest@irshados:~$</span>
          <input 
            id="terminal-input"
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            autoFocus 
            autoComplete="off"
            spellCheck="false"
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
