import React from 'react';
import { Eye, Star } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Star className="h-6 w-6 text-purple-600" />
            <span className="font-bold text-xl">AI Studio</span>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-4 mt-8">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <Eye className="h-12 w-12 mx-auto text-purple-600 mb-4" />
          <h1 className="text-3xl font-bold mb-4">AI Image Generator</h1>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </main>
    </div>
  );
}
