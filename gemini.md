# Project: Portfolio Core (ng-with-ai)

> [!IMPORTANT]
> This repository contains a high-performance Angular 21+ project for a Senior Consultant's portfolio, emphasizing technical expertise in web architectures and modern AI integration.

## 🛠️ Technical Stack
- **Framework**: Angular 21+ (Signal-based components, Signal Forms, Resource API)
- **Change Detection**: `OnPush` by default (Mandatory)
- **Styling**: TailwindCSS v4 (as the utility/engine) + Vanilla CSS (for complex animations and glassmorphism)
- **Font**: "Outfit" for headings/primary UI; "Inter" for body text (High-contrast typography)
- **Architecture**: Bento Grid Layout System
- **Backend Components**: .NET Core, Node.js, React (Integrated or context-relevant)
- **Deployment**: Azure Static Web Apps

## 🏛️ Project Architecture
The project follows a component-based "Bento" architecture, where each portfolio section is an independent containerized module.

### Core Directories
- `src/app/components/shared`: Reusable atoms (Bento cards, tags, buttons)
- `src/app/components/sections`: Feature-specific modules (About, Projects, Experience)
- `src/app/services`: State management using Signals and HTTP Resource API

## 🎨 Design Principles
1. **Minimalist Premium**: Dark-mode primary aesthetic (`#000000`) with monotone accents. Focus on whitespace and clarity.
2. **Dynamic Transitions**: Use of scroll-triggered animations (via `IntersectionObserver` or custom directives) and glassmorphism effects.
3. **Bento Layout**: Grid-based responsive layout that adapts from multi-column desktop to single-column mobile. Use `aspect-ratio` to maintain card proportions.
4. **Glassmorphism**: Use translucent backgrounds (`backdrop-filter: blur()`) and thin borders to create depth.

## 🤖 Guidelines for Gemini
When assisting with this codebase, always:
1. **Prioritize Signals**: Use Angular Signals for all state management. Use `resource()` and `httpResource()` for data fetching.
2. **Enforce OnPush**: Every component MUST use `ChangeDetectionStrategy.OnPush`.
3. **Standalone First**: Every new component, pipe, or directive must be `standalone: true`.
4. **Aesthetic Excellence**: CSS should be expressive, using modern properties like `clamp()`, `aspect-ratio`, and `backdrop-filter`.
5. **SEO & Accessibility**: Use semantic HTML5 and unique ARIA labels for bento cards and interactive elements.
6. **No Sprawl**: Maintain minimalism—avoid unnecessary elements, loud colors, or competing focal points.

## 🚀 Development Workflow
- **Service**: `ng s`
- **Build**: `ng build`
- **Component Creation**: `npx -y @angular/cli generate component [path]/[name] --standalone --inline-style --inline-template=false`
