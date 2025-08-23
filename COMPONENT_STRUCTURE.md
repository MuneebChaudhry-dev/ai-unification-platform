# Component Structure Documentation

## Overview
The codebase has been refactored to follow React best practices with a clean, modular component architecture using authentic shadcn/ui components wrapped with custom theme styling.

## Directory Structure

```
src/
├── components/
│   ├── ui/                     # Reusable UI components (shadcn-style)
│   │   ├── badge.tsx          # Badge component with variants
│   │   ├── button.tsx         # Button component with variants
│   │   ├── card.tsx           # Card components (Card, CardHeader, etc.)
│   │   ├── checkbox.tsx       # Checkbox component
│   │   ├── input.tsx          # Input component
│   │   └── index.ts           # UI components barrel export
│   │
│   ├── home/                  # Home page specific components
│   │   ├── hero-section.tsx   # Hero section with prompt input
│   │   ├── features-section.tsx # Features grid
│   │   ├── pricing-section.tsx  # Pricing tiers
│   │   ├── testimonials-section.tsx # User testimonials
│   │   ├── mission-section.tsx    # Mission and values
│   │   ├── cta-section.tsx       # Call-to-action section
│   │   └── index.ts              # Home components barrel export
│   │
│   ├── chat/                  # Chat page specific components
│   │   ├── chat-sidebar.tsx   # Chat history sidebar
│   │   ├── chat-header.tsx    # Chat header with model info
│   │   ├── chat-composer.tsx  # Message composer with services
│   │   ├── empty-state.tsx    # Empty chat state
│   │   ├── sidebar-item.tsx   # Individual chat history item
│   │   └── index.ts           # Chat components barrel export
│   │
│   ├── Footer.tsx             # Site footer (existing)
│   ├── Navbar.tsx            # Navigation bar (existing)
│   ├── ConditionalNavbar.tsx # Conditional navigation (existing)
│   └── index.ts              # Main components barrel export
└── app/
    ├── page.tsx              # Refactored home page
    └── chat/
        └── page.tsx          # Refactored chat page
```

## Component Features

### UI Components
- **Consistent API**: All components follow shadcn patterns with forwardRef
- **Variant system**: Using class-variance-authority for component variants
- **TypeScript**: Full TypeScript support with proper interfaces
- **Composable**: Components can be combined and extended easily

### Page Components
- **Feature separation**: Each section is its own component
- **Props interface**: Clean props for customization
- **Reusability**: Components can be reused across pages

### Benefits of Refactoring
1. **Maintainability**: Easier to maintain and update individual components
2. **Reusability**: Components can be used across different pages
3. **Testing**: Individual components can be tested in isolation
4. **Type Safety**: Full TypeScript support with proper interfaces
5. **Performance**: Better tree-shaking and code splitting potential
6. **Developer Experience**: Cleaner imports and better IDE support

## Usage Examples

### Importing UI Components
```tsx
import { Button, Card, Badge } from "@/components/ui";

// or specific imports
import { Button } from "@/components/ui/button";
```

### Importing Page Components
```tsx
import { HeroSection, FeaturesSection } from "@/components/home";
import { ChatSidebar, ChatHeader } from "@/components/chat";
```

### Component Props
All components support standard HTML attributes plus custom props:

```tsx
<Button variant="outline" size="lg" onClick={handleClick}>
  Click me
</Button>

<Card className="custom-class">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
</Card>
```

## Next Steps
- Add Storybook for component documentation
- Add unit tests for individual components  
- Consider adding component composition patterns
- Add more UI components as needed (Select, Dialog, etc.)