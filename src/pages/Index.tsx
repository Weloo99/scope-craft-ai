
import React, { useState } from "react";
import Header from "@/components/Header";
import ClientInputForm, { FormData } from "@/components/ClientInputForm";
import OutputSection, { OutputData } from "@/components/OutputSection";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generateTechnicalScope, exportScopeDocument } from "@/services/mockAiService";
import { Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [outputData, setOutputData] = useState<OutputData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("input");

  const handleFormSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      
      // Generate the technical scope using our AI service (mock for now)
      const result = await generateTechnicalScope(data);
      
      // Set the result in state
      setOutputData(result);
      
      // Switch to output tab
      setActiveTab("output");
      
      toast({
        title: "Scope Generated Successfully",
        description: "The AI has analyzed the input and generated a technical scope.",
      });
    } catch (error) {
      console.error("Error generating scope:", error);
      toast({
        title: "Error Generating Scope",
        description: "There was an error processing your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleExport = () => {
    exportScopeDocument();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6 bg-gradient-to-r from-purple-200 to-pink-200">
              <TabsTrigger value="input" className="data-[state=active]:bg-white">Client Input</TabsTrigger>
              <TabsTrigger value="output" disabled={!outputData} className="data-[state=active]:bg-white">Scope Output</TabsTrigger>
            </TabsList>
            
            <TabsContent value="input">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2">
                  <Card className="border-purple-200">
                    <CardContent className="pt-6">
                      <ClientInputForm onSubmit={handleFormSubmit} isLoading={isLoading} />
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-purple-200">
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        <Sparkles className="h-5 w-5 mr-2 text-purple-600" />
                        <h3 className="font-medium text-purple-800">How Briefly Works</h3>
                      </div>
                      <div className="space-y-4 text-sm">
                        <p className="text-gray-700">
                          Enter your client's requirements along with key project details, and 
                          Briefly will transform them into a comprehensive technical scope.
                        </p>
                        
                        <div>
                          <h4 className="font-medium text-purple-700 mb-1">You'll get:</h4>
                          <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>Detailed functional requirements</li>
                            <li>Recommended tech stack</li>
                            <li>Integration requirements</li>
                            <li>Sprint-based project roadmap</li>
                            <li>Gap analysis to prevent scope creep</li>
                            <li>Client-friendly explanation</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white p-3 rounded-md border border-purple-200">
                          <h4 className="font-medium text-purple-700 mb-1">Pro tip</h4>
                          <p className="text-gray-700">
                            The more specific your client's description, the more accurate your scope will be. Include 
                            all available details in the description.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="output">
              {outputData && (
                <OutputSection outputData={outputData} onExport={handleExport} />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <footer className="bg-gradient-to-r from-purple-100 to-pink-100 py-4 border-t border-purple-200">
        <div className="container mx-auto text-center text-purple-600 text-sm">
          Briefly - Technical Scope Builder for Software Projects
        </div>
      </footer>
    </div>
  );
};

export default Index;
