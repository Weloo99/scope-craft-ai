
import React from "react";
import { FileText, Bot } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center">
        <div className="flex items-center">
          <div className="bg-white p-1 rounded-full">
            <FileText className="h-6 w-6 text-purple-600" />
          </div>
          <h1 className="text-xl font-bold ml-2">Briefly</h1>
        </div>
        <div className="ml-auto flex items-center space-x-3">
          <span className="flex items-center text-xs bg-purple-700 px-2 py-1 rounded-full">
            <Bot className="h-3 w-3 mr-1" />
            Enhanced with GGML
          </span>
          <span className="bg-pink-600 px-2 py-1 rounded-full text-sm">Technical Scope Builder</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
