import { StepperPage } from "../Stepper";

// Define the onboarding flow phases
export type OnboardingPhase = "context" | "health" | "goals";

// Enhanced configuration with phase grouping
export const onboardingConfig: Record<OnboardingPhase, StepperPage[]> = {
  context: [
    {
      title: "Welcome",
      copy: "Hey there 👋 I'm here to help you build a diet that actually fits your life, your health, and your taste.",
      steps: [
        {
          label: "Get Started",
          type: "radio",
          value: "",
          defaultValue: "start",
          options: [
            "Sounds good, let's start",
            "What can you help with?",
            "Not now",
          ],
          required: true,
        },
      ],
    },
    {
      title: "About You",
      copy: "First things first—just a few quick questions about you.",
      steps: [
        {
          label: "Age",
          type: "input",
          value: "",
          defaultValue: "",
          placeholder: "e.g. 29",
          required: true,
        },
        {
          label: "Sex Assigned at Birth",
          type: "radio",
          value: "",
          defaultValue: "",
          options: ["Male", "Female", "Other"],
          required: true,
        },
        {
          label: "Height",
          type: "input",
          value: "",
          defaultValue: "",
          placeholder: "e.g. 179cm",
          required: true,
        },
        {
          label: "Weight",
          type: "input",
          value: "",
          defaultValue: "",
          placeholder: "e.g. 135kg",
          required: true,
        },
      ],
    },
    {
      title: "Where Do You Live?",
      copy: "Where in the world do you live? This helps me recommend the right ingredients, meals, and shops.",
      steps: [
        {
          label: "Country",
          type: "input",
          value: "",
          defaultValue: "",
          placeholder: "e.g. South Africa",
          required: true,
        },
        {
          label: "City",
          type: "input",
          value: "",
          defaultValue: "",
          placeholder: "e.g. Johannesburg",
          required: true,
        },
        {
          label: "Area",
          type: "input",
          value: "",
          defaultValue: "",
          placeholder: "e.g. Linden",
          required: false,
        },
      ],
    },
    {
      title: "Culture & Food Background",
      copy: "Your cultural background can shape what's familiar and comforting. Want to tell me about yours?",
      steps: [
        {
          label: "Cultural Background",
          type: "radio",
          value: "",
          defaultValue: "",
          options: [
            "South Asian / Indian",
            "African / Afro-Caribbean",
            "Mediterranean",
            "Western / European",
            "+ Add my own",
            "Skip this",
          ],
          required: false,
        },
        {
          label: "Custom Cultural Background",
          type: "input",
          value: "",
          defaultValue: "",
          placeholder: "Describe your cultural background",
          required: false,
        },
      ],
    },
  ],
  health: [
    {
      title: "Medical Conditions",
      copy: "I'll adjust your plan based on this info.",
      steps: [
        {
          label: "Do you have any medical conditions?",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "Insulin Resistance",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "Hypothyroidism",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "High Cholesterol",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "Hidradenitis Suppurativa",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "Other Conditions",
          type: "input",
          value: "",
          defaultValue: "",
          placeholder: "Add other conditions",
          required: false,
        },
      ],
    },
    {
      title: "Medications & Supplements",
      copy: "Do you take any medications or supplements?",
      steps: [
        {
          label: "Medications Status",
          type: "radio",
          value: "",
          defaultValue: "",
          options: ["Yes", "No", "Prefer not to say"],
          required: true,
        },
        {
          label: "List Your Medications",
          type: "input",
          value: "",
          defaultValue: "",
          placeholder: "e.g. Metformin, Vitamin D",
          required: false,
        },
      ],
    },
    {
      title: "Current Eating Habits",
      copy: "What does a usual day of eating look like for you?",
      steps: [
        {
          label: "Skip breakfast",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "One big meal a day",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "Frequent takeout or fast food",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "Lots of coffee, little food",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "High sugar or carb cravings",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "Additional Details",
          type: "input",
          value: "",
          defaultValue: "",
          placeholder: "Add more details about your eating habits",
          required: false,
        },
      ],
    },
    {
      title: "Food Preferences & Restrictions",
      copy: "Let's avoid stuff that doesn't agree with you.",
      steps: [
        {
          label: "No gluten or wheat",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "No dairy",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "No sugar",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "No quinoa or grains",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "Dietary Preference",
          type: "select",
          value: "",
          defaultValue: "",
          options: [
            "No restrictions",
            "Vegetarian",
            "Vegan",
            "Pescatarian",
            "Halal",
            "Kosher",
          ],
          required: false,
        },
        {
          label: "Additional Restrictions",
          type: "input",
          value: "",
          defaultValue: "",
          placeholder: "Any other food restrictions",
          required: false,
        },
      ],
    },
  ],
  goals: [
    {
      title: "Your Top Goal",
      copy: "What's your top goal right now?",
      steps: [
        {
          label: "Primary Goal",
          type: "radio",
          value: "",
          defaultValue: "",
          options: [
            "Lose weight safely",
            "Reduce flare-ups or inflammation",
            "Improve energy or focus",
            "Just eat better overall",
          ],
          required: true,
        },
        {
          label: "Custom Goal",
          type: "input",
          value: "",
          defaultValue: "",
          placeholder: "Add your own goal",
          required: false,
        },
      ],
    },
    {
      title: "Cooking Style & Time",
      copy: "How much time do you actually want to spend on food?",
      steps: [
        {
          label: "Cooking Time Preference",
          type: "radio",
          value: "",
          defaultValue: "",
          options: [
            "Under 10 mins only",
            "I can do 15–30 mins",
            "I batch cook on Sundays",
            "Microwave only life",
          ],
          required: true,
        },
      ],
    },
    {
      title: "Grocery Preferences",
      copy: "Where do you usually shop?",
      steps: [
        {
          label: "Woolworths",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "Pick n Pay",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "Checkers",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "Food Lover's",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "Online delivery",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "Other Stores",
          type: "input",
          value: "",
          defaultValue: "",
          placeholder: "Other stores you shop at",
          required: false,
        },
      ],
    },
    {
      title: "Weekly Grocery Budget",
      copy: "What's your weekly grocery budget?",
      steps: [
        {
          label: "Budget Range",
          type: "radio",
          value: "",
          defaultValue: "",
          options: [
            "Tight budget (R500–R700)",
            "Moderate (R700–R1200)",
            "Flexible (R1200+)",
            "Not sure",
          ],
          required: true,
        },
      ],
    },
    {
      title: "Meal Plan Preferences",
      copy: "What do you want in your plan?",
      steps: [
        {
          label: "Quick breakfasts",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "Packable lunches",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "Wholesome dinners",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "Snacks",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "Smoothies",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "Soups & broths",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
        {
          label: "Anti-inflammatory meals",
          type: "checkbox",
          value: "",
          defaultValue: "false",
          required: false,
        },
      ],
    },
    {
      title: "Confirmation",
      copy: "Thanks! You're all set. I'm building your personalized plan now:\n\n✓ Tailored to your health\n✓ Based on what you like\n✓ Matched to your budget & lifestyle\n✓ With a smart grocery list for your local stores",
      steps: [
        {
          label: "Ready to proceed?",
          type: "radio",
          value: "",
          defaultValue: "build",
          options: ["Build My Plan"],
          required: true,
        },
      ],
    },
  ],
};

// Flatten pages for use with the Stepper component
export const getFlattenedPages = (): StepperPage[] => {
  return [
    ...onboardingConfig.context,
    ...onboardingConfig.health,
    ...onboardingConfig.goals,
  ];
};

// Helper to get phase for a page index
export const getPhaseForPageIndex = (pageIndex: number): OnboardingPhase => {
  const contextLength = onboardingConfig.context.length;
  const healthLength = onboardingConfig.health.length;

  if (pageIndex < contextLength) {
    return "context";
  } else if (pageIndex < contextLength + healthLength) {
    return "health";
  } else {
    return "goals";
  }
};
