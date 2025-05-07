
import React from "react";
import { FileText, Bot } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-briefforge-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center">
        <div className="flex items-center">
          <div className="bg-white p-1 rounded">
            <FileText className="h-6 w-6 text-briefforge-600" />
          </div>
          <h1 className="text-xl font-bold ml-2">BriefForge AI</h1>
        </div>
        <div className="ml-auto flex items-center space-x-3">
          <span className="flex items-center text-xs bg-briefforge-700 px-2 py-1 rounded">
            <Bot className="h-3 w-3 mr-1" />
            Enhanced with GGML
          </span>
          <span className="bg-briefforge-700 px-2 py-1 rounded text-sm">Technical Scope Builder</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
