
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Save,
  Download,
  AlertTriangle,
  CheckCircle,
  Clock,
  Calendar,
  Layers,
  Wrench,
  Link,
  Search,
  MessageSquare
} from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export interface OutputData {
  functionalScope: string[];
  techStack: {
    frontend: string;
    backend: string;
    database: string;
    other?: string;
  };
  integrations: string[];
  thirdPartyTools: string[];
  businessLookalikes: Array<{
    name: string;
    note: string;
  }>;
  estimatedTimeline: {
    total: string;
    breakdown: Array<{
      phase: string;
      duration: string;
    }>;
  };
  backendFrontendTasks: {
    backend: string[];
    frontend: string[];
  };
  sprintBreakdown: Array<{
    sprint: string;
    deliverables: string[];
  }>;
  scopeGapWarning?: string;
  clientFriendlyBrief: string;
}

interface OutputSectionProps {
  outputData: OutputData | null;
  onExport: () => void;
}

const OutputSection: React.FC<OutputSectionProps> = ({ outputData, onExport }) => {
  if (!outputData) return null;

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-briefforge-800">Technical Scope Analysis</h2>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={onExport}>
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" onClick={onExport}>
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="functional-scope">
        <TabsList className="w-full grid grid-cols-5">
          <TabsTrigger value="functional-scope">Scope</TabsTrigger>
          <TabsTrigger value="tech-details">Tech Details</TabsTrigger>
          <TabsTrigger value="timeline-tasks">Timeline & Tasks</TabsTrigger>
          <TabsTrigger value="client-brief">Client Brief</TabsTrigger>
          <TabsTrigger value="gaps">Scope Gaps</TabsTrigger>
        </TabsList>
        
        <TabsContent value="functional-scope">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-briefforge-600" />
                Functional Scope
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc pl-5 space-y-2">
                {outputData.functionalScope.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tech-details">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wrench className="w-5 h-5 mr-2 text-briefforge-600" />
                  Recommended Tech Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li><span className="font-medium">Frontend:</span> {outputData.techStack.frontend}</li>
                  <li><span className="font-medium">Backend:</span> {outputData.techStack.backend}</li>
                  <li><span className="font-medium">Database:</span> {outputData.techStack.database}</li>
                  {outputData.techStack.other && (
                    <li><span className="font-medium">Other:</span> {outputData.techStack.other}</li>
                  )}
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Link className="w-5 h-5 mr-2 text-briefforge-600" />
                  Integrations Needed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  {outputData.integrations.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Layers className="w-5 h-5 mr-2 text-briefforge-600" />
                  Third-Party Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  {outputData.thirdPartyTools.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="w-5 h-5 mr-2 text-briefforge-600" />
                  Business Lookalikes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {outputData.businessLookalikes.map((item, index) => (
                    <li key={index}>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-600">{item.note}</div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="timeline-tasks">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-briefforge-600" />
                  Estimated Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-3 font-medium">Total Duration: {outputData.estimatedTimeline.total}</div>
                <ul className="space-y-2">
                  {outputData.estimatedTimeline.breakdown.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{item.phase}</span>
                      <span className="text-gray-600">{item.duration}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-briefforge-600" />
                  Backend/Frontend Tasks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Backend:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {outputData.backendFrontendTasks.backend.map((task, index) => (
                        <li key={index}>{task}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Frontend:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {outputData.backendFrontendTasks.frontend.map((task, index) => (
                        <li key={index}>{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-briefforge-600" />
                  Sprint Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {outputData.sprintBreakdown.map((sprint, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-md">
                      <h4 className="font-medium mb-2">{sprint.sprint}</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {sprint.deliverables.map((deliverable, idx) => (
                          <li key={idx}>{deliverable}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="client-brief">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-briefforge-600" />
                Client-Friendly Brief
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-briefforge-50 p-4 rounded-md border border-briefforge-200">
                <div className="whitespace-pre-line">{outputData.clientFriendlyBrief}</div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p>This client-friendly brief summarizes the technical scope in non-technical language, 
                making it easier to explain the project deliverables to your client.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="gaps">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" />
                Scope Gap Detection
              </CardTitle>
            </CardHeader>
            <CardContent>
              {outputData.scopeGapWarning ? (
                <Alert variant="destructive" className="bg-amber-50 text-amber-800 border-amber-300">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Potential Scope Gaps Detected</AlertTitle>
                  <AlertDescription>
                    {outputData.scopeGapWarning}
                  </AlertDescription>
                </Alert>
              ) : (
                <Alert className="bg-green-50 text-green-800 border-green-300">
                  <CheckCircle className="h-4 w-4" />
                  <AlertTitle>No Major Scope Gaps Detected</AlertTitle>
                  <AlertDescription>
                    The client request appears to cover the main aspects needed for this project type.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OutputSection;
