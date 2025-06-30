import React, { useState } from 'react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [credits] = useState(3);

  return (
    <div className="App">
      {/* Hero Section */}
      <header className="bg-white shadow p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">AI Video Studio</h1>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-extrabold leading-tight mb-6">
            Generate AI Videos From Text Prompts Instantly
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Turn your ideas into stunning videos in seconds — no editing skills required.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition shadow-md">
            Start Creating Free
          </button>
        </section>

        {/* Prompt Input */}
        <section className="mb-12 bg-white p-6 rounded shadow">
          <h3 className="text-2xl font-bold text-center mb-6">Try Our AI Video Generator</h3>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe what you want to see..."
            rows="4"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
          />
          <button
            disabled={!prompt.trim()}
            onClick={() => alert('Video generation would start now!')}
            className={`w-full bg-indigo-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-indigo-700 transition ${
              !prompt.trim() ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Generate Video
          </button>
          {prompt && (
            <p className="mt-4 text-center text-sm text-gray-500">
              Estimated credits used: 1 • Remaining: {credits - 1}
            </p>
          )}
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-white p-6 rounded shadow">
          <h3 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Free Tier */}
            <div className="p-6 border rounded shadow-sm">
              <h4 className="text-xl font-semibold mb-2">Free</h4>
              <p className="text-3xl font-bold mb-4">$0</p>
              <ul className="text-left text-gray-600 space-y-2 mb-6">
                <li>✔ 3 free credits/month</li>
                <li>✔ Basic AI video generation</li>
                <li>✔ Watermarked output</li>
              </ul>
              <button className="w-full bg-indigo-100 text-indigo-600 py-2 rounded hover:bg-indigo-200 transition">
                Get Started
              </button>
            </div>

            {/* Starter Tier */}
            <div className="p-6 border rounded shadow-sm transform scale-105 border-indigo-200">
              <h4 className="text-xl font-semibold mb-2">Starter</h4>
              <p className="text-3xl font-bold mb-1">$7<span className="text-sm font-normal">/mo</span></p>
              <p className="text-sm text-gray-500">Billed monthly</p>
              <ul className="text-left text-gray-600 space-y-2 mt-4 mb-6">
                <li>✔ 1000 credits/month</li>
                <li>✔ HD video export</li>
                <li>✔ No watermark</li>
                <li>✔ Voiceover support</li>
              </ul>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
                Subscribe Now
              </button>
            </div>

            {/* Pro Tier */}
            <div className="p-6 border rounded shadow-sm">
              <h4 className="text-xl font-semibold mb-2">Pro</h4>
              <p className="text-3xl font-bold mb-1">$24<span className="text-sm font-normal">/mo</span></p>
              <p className="text-sm text-gray-500">Unlimited credits & features</p>
              <ul className="text-left text-gray-600 space-y-2 mt-4 mb-6">
                <li>✔ Unlimited credits</li>
                <li>✔ Priority rendering</li>
                <li>✔ Custom branding</li>
                <li>✔ Template access</li>
              </ul>
              <button className="w-full bg-indigo-100 text-indigo-600 py-2 rounded-md hover:bg-indigo-200 transition">
                Subscribe Now
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 pb-10">
        &copy; {new Date().getFullYear()} AI Video Studio • All rights reserved
      </footer>
    </div>
  );
}

export default App;