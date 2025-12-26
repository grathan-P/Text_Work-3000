import React from 'react'

export default function About(props) {
  const textColor = props.mode === 'dark' ? 'white' : 'black';
  const bgColor = props.mode === 'dark' ? 'black' : 'white';

  return (
    <div className="container" style={{ color: textColor }}>
      <h1>About Text Work 3000</h1>
      <p className="mb-4">
        Text Work 3000 is a focused text utility for quick edits and instant feedback. Transform text, check
        word counts, and preview results without leaving the page.
      </p>

      <div className="accordion" id="aboutAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={{ color: textColor, backgroundColor: bgColor }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#about-tools"
              aria-expanded="true"
              aria-controls="about-tools"
            >
              Core tools
            </button>
          </h2>
          <div id="about-tools" className="accordion-collapse collapse show">
            <div className="accordion-body" style={{ color: textColor, backgroundColor: bgColor }}>
              <ul>
                <li><strong>Convert to Uppercase:</strong> Transform all text to capital letters instantly.</li>
                <li><strong>Convert to Lowercase:</strong> Convert all text to small letters.</li>
                <li><strong>Remove Extra Spaces:</strong> Clean up multiple spaces and keep single spaces between words.</li>
                <li><strong>Copy to Clipboard:</strong> Select and copy your text in one click.</li>
                <li><strong>Clear Text:</strong> Empty the editor quickly to start fresh.</li>
              </ul>
              <p className="mt-2"><strong>Live Analytics:</strong> See word count, character count, and estimated reading time update as you type.</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{ color: textColor, backgroundColor: bgColor }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#about-experience"
              aria-expanded="false"
              aria-controls="about-experience"
            >
              Experience
            </button>
          </h2>
          <div id="about-experience" className="accordion-collapse collapse">
            <div className="accordion-body" style={{ color: textColor, backgroundColor: bgColor }}>
              <p><strong>Theme Toggle:</strong> Switch between light and dark modes with a single click. Your preference is saved and remembered on your next visit.</p>
              <p><strong>Smart Buttons:</strong> Buttons automatically disable when the text area is empty, preventing unnecessary actions.</p>
              <p><strong>Action Feedback:</strong> Every action (convert, copy, clear, remove spaces) shows a brief alert so you know exactly what was done.</p>
              <p><strong>Real-time Preview:</strong> See your text and statistics update instantly as you type—no delays.</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{ color: textColor, backgroundColor: bgColor }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#about-routing"
              aria-expanded="false"
              aria-controls="about-routing"
            >
              Routing and hosting
            </button>
          </h2>
          <div id="about-routing" className="accordion-collapse collapse">
            <div className="accordion-body" style={{ color: textColor, backgroundColor: bgColor }}>
              <p><strong>Hash-based Routing:</strong> The app uses hash routing (#/home, #/about), which means it works on any static file server without special configuration.</p>
              <p><strong>Deployment Ready:</strong> Built with Create React App and optimized for static hosting. Run <code>npm run build</code> and deploy the contents of the <code>build/</code> folder to Netlify, GitHub Pages, Vercel, or any static host.</p>
              <p><strong>Offline Ready:</strong> Once loaded, the app works fully offline. No server required to edit and transform your text.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
