# Angular Two-Way Data Binding Demo

This project demonstrates Angular's two-way data binding using `[(ngModel)]` directive.

## Features

- Two-way data binding with `[(ngModel)]`
- Real-time input display
- Modern, responsive UI
- Form validation ready

## Project Structure

```
AngularBinding-2.23/
├── app/
│   ├── components/
│   │   └── twoway-binding/
│   │       ├── twoway-binding.component.ts
│   │       ├── twoway-binding.component.html
│   │       └── twoway-binding.component.css
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   └── app.module.ts
├── main.ts
├── index.html
├── styles.css
├── angular.json
├── tsconfig.json
├── package.json
└── README.md
```

## Implementation Details

### 1. FormsModule Import
The `FormsModule` is imported in `app.module.ts` to enable two-way data binding:
```typescript
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  // ...
})
```

### 2. TwowayBindingComponent
- **TypeScript**: Contains `studentName` property initialized to empty string
- **HTML**: Input field bound with `[(ngModel)]="studentName"`
- **Display**: Shows "Hello, {{studentName}}!" in real-time

### 3. Two-Way Binding
The input field uses `[(ngModel)]` directive:
```html
<input [(ngModel)]="studentName" placeholder="Type your name here...">
```

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:4200`

## What You'll See

- A clean, modern interface
- An input field where you can type your name
- Real-time display of "Hello, [your name]!" as you type
- Responsive design that works on all devices

## Key Angular Concepts Demonstrated

- **Two-Way Data Binding**: Using `[(ngModel)]` directive
- **Component Architecture**: Modular component structure
- **Template Syntax**: String interpolation with `{{}}`
- **FormsModule**: Angular's forms module for data binding
- **CSS Styling**: Component-specific styles with modern design
