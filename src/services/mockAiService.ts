
import { FormData } from "@/components/ClientInputForm";
import { OutputData } from "@/components/OutputSection";

// This function simulates the AI analysis by generating a mock output
export const generateTechnicalScope = async (inputData: FormData): Promise<OutputData> => {
  // In a real implementation, this would call an API or directly use a model like GPT-4
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Generate mock response based on input
  const isPetBoardingApp = inputData.clientDescription.toLowerCase().includes("pet") && 
                           (inputData.clientDescription.toLowerCase().includes("boarding") || 
                            inputData.clientDescription.toLowerCase().includes("sitting"));
  
  if (isPetBoardingApp) {
    return {
      functionalScope: [
        "User authentication and profile management",
        "Pet sitter profiles with availability calendar",
        "Search functionality with filters (location, dates, pet type)",
        "Booking system with confirmation",
        "Review and rating system",
        "Secure payment processing",
        "In-app messaging between pet owners and sitters",
        "Admin panel for managing users and listings",
        "Notification system (email, push, SMS)"
      ],
      techStack: {
        frontend: "React with Tailwind CSS",
        backend: "Node.js with Express",
        database: "MongoDB for flexible schema",
        other: "AWS S3 for image storage"
      },
      integrations: [
        "Stripe for payment processing",
        "Google Maps API for location services",
        "SendGrid for email notifications",
        "Twilio for SMS alerts"
      ],
      thirdPartyTools: [
        "Cloudinary for image optimization",
        "Auth0 for secure authentication",
        "Redis for caching",
        "ElasticSearch for advanced search capabilities"
      ],
      businessLookalikes: [
        {
          name: "Rover.com",
          note: "Market leader in pet sitting services with similar booking flow"
        },
        {
          name: "Wag!",
          note: "Similar service with focus on dog walking, good UX for location-based search"
        },
        {
          name: "PetBacker",
          note: "International pet sitting platform with comprehensive review system"
        }
      ],
      estimatedTimeline: {
        total: "14-16 weeks",
        breakdown: [
          { phase: "UI/UX Design", duration: "2-3 weeks" },
          { phase: "Frontend Development", duration: "5-6 weeks" },
          { phase: "Backend Development", duration: "5-6 weeks" },
          { phase: "Testing & QA", duration: "1-2 weeks" },
          { phase: "Deployment", duration: "1 week" }
        ]
      },
      backendFrontendTasks: {
        backend: [
          "User authentication API",
          "Pet sitter profile & availability API",
          "Search & filtering API",
          "Booking & payment processing",
          "Review & rating system",
          "Messaging system",
          "Notification service",
          "Admin panel API endpoints"
        ],
        frontend: [
          "User registration & login flows",
          "Pet sitter profile creation & editing",
          "Search interface with filters",
          "Booking calendar & confirmation flow",
          "Payment processing UI",
          "Review & rating interface",
          "Messaging interface",
          "Responsive design for mobile & desktop",
          "Admin dashboard"
        ]
      },
      sprintBreakdown: [
        {
          sprint: "Sprint 1 (2 weeks)",
          deliverables: [
            "User authentication system",
            "Basic profile management",
            "Project setup & initial architecture"
          ]
        },
        {
          sprint: "Sprint 2 (2 weeks)",
          deliverables: [
            "Pet sitter profiles",
            "Availability calendar implementation",
            "Basic search functionality"
          ]
        },
        {
          sprint: "Sprint 3 (2 weeks)",
          deliverables: [
            "Advanced search with filters",
            "Booking system implementation",
            "Initial payment integration"
          ]
        },
        {
          sprint: "Sprint 4 (2 weeks)",
          deliverables: [
            "Review & rating system",
            "Messaging system between users",
            "Notification system"
          ]
        },
        {
          sprint: "Sprint 5 (2 weeks)",
          deliverables: [
            "Admin panel implementation",
            "Payment system completion",
            "Bug fixing & optimization"
          ]
        },
        {
          sprint: "Sprint 6 (2 weeks)",
          deliverables: [
            "Testing & QA",
            "Deployment preparation",
            "Launch & final adjustments"
          ]
        }
      ],
      scopeGapWarning: "The client request does not mention security requirements for handling user data and payment information, which is critical for a platform dealing with financial transactions. Additionally, there's no mention of a user verification system for pet sitters, which would increase trust on the platform.",
      clientFriendlyBrief: "We're going to build a user-friendly platform where pet owners can easily find and book trustworthy pet sitters in their area. Your customers will be able to create profiles, search for sitters based on location and availability, read reviews from other pet owners, and securely book and pay for services.\n\nPet sitters will have their own profiles where they can showcase their experience, set their availability, and manage booking requests. The platform will include a messaging system so owners and sitters can communicate directly.\n\nYour admin dashboard will give you full control over the platform, allowing you to manage users, monitor bookings, and ensure quality service.\n\nThe platform will work seamlessly on both mobile phones and desktop computers, making it accessible to all your potential users."
    };
  } 
  
  // Generic response for other types of projects
  return {
    functionalScope: [
      "User authentication and profile management",
      "Core feature implementation based on project goals",
      "Search and filtering functionality",
      "Admin dashboard for management",
      "Responsive design for all devices",
      "Basic analytics and reporting"
    ],
    techStack: {
      frontend: inputData.preferredStack?.includes("React") ? "React.js" : "Vue.js",
      backend: inputData.preferredStack?.includes("Node") ? "Node.js" : "Django",
      database: "PostgreSQL"
    },
    integrations: [
      "Payment gateway (if applicable)",
      "Email service provider",
      "Cloud storage for assets"
    ],
    thirdPartyTools: [
      "Analytics platform",
      "Error tracking service",
      "CDN for faster content delivery"
    ],
    businessLookalikes: [
      {
        name: "Similar Business 1",
        note: "Market leader with similar functionality"
      },
      {
        name: "Similar Business 2",
        note: "Competitor with innovative features"
      },
      {
        name: "Similar Business 3",
        note: "Niche player with focused solution"
      }
    ],
    estimatedTimeline: {
      total: "12-14 weeks",
      breakdown: [
        { phase: "Design", duration: "2-3 weeks" },
        { phase: "Frontend Development", duration: "4-5 weeks" },
        { phase: "Backend Development", duration: "4-5 weeks" },
        { phase: "Testing", duration: "1-2 weeks" },
        { phase: "Deployment", duration: "1 week" }
      ]
    },
    backendFrontendTasks: {
      backend: [
        "User authentication API",
        "Core business logic APIs",
        "Database schema design",
        "Integration with third-party services",
        "Admin functionality"
      ],
      frontend: [
        "User interface implementation",
        "Responsive design",
        "Form validation",
        "State management",
        "API integration",
        "Admin interface"
      ]
    },
    sprintBreakdown: [
      {
        sprint: "Sprint 1 (2 weeks)",
        deliverables: [
          "Project setup",
          "User authentication system",
          "Basic UI components"
        ]
      },
      {
        sprint: "Sprint 2 (2 weeks)",
        deliverables: [
          "Core feature implementation part 1",
          "Database schema finalization",
          "Initial API endpoints"
        ]
      },
      {
        sprint: "Sprint 3 (2 weeks)",
        deliverables: [
          "Core feature implementation part 2",
          "User profile management",
          "Frontend-backend integration"
        ]
      },
      {
        sprint: "Sprint 4 (2 weeks)",
        deliverables: [
          "Search and filtering",
          "Admin dashboard basics",
          "Third-party integrations"
        ]
      },
      {
        sprint: "Sprint 5 (2 weeks)",
        deliverables: [
          "Admin dashboard completion",
          "Analytics implementation",
          "Bug fixing and optimization"
        ]
      },
      {
        sprint: "Sprint 6 (2 weeks)",
        deliverables: [
          "Testing and QA",
          "Deployment preparation",
          "Launch and monitoring"
        ]
      }
    ],
    scopeGapWarning: "The client description lacks specific details about expected user workflows, security requirements, and performance expectations. It's also unclear what specific features would differentiate this product from competitors.",
    clientFriendlyBrief: `We'll be building a custom web application that focuses on ${inputData.projectGoal}. The platform will include user accounts, intuitive navigation, and all the core functionality needed to achieve your business goals.\n\nYour customers will enjoy a smooth experience on any device, with fast loading times and an intuitive interface. As an administrator, you'll have a comprehensive dashboard to manage users, content, and monitor key metrics.\n\nThe system will be built with scalability in mind, allowing for future enhancements as your business grows. We'll use modern, reliable technologies that ensure security and performance.`
  };
};

export const exportScopeDocument = (): void => {
  // In a real implementation, this would generate a PDF or Word document
  console.log("Export functionality would be implemented here");
  // For now, just show an alert
  alert("Your scope document would be exported here in a real implementation.");
};
