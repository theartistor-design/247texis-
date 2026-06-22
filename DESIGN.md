---
name: Caledonian Prestige
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#44474d'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4e5f7c'
  primary: '#00030a'
  on-primary: '#ffffff'
  primary-container: '#0a1d37'
  on-primary-container: '#7586a5'
  inverse-primary: '#b6c7e9'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#00030b'
  on-tertiary: '#ffffff'
  tertiary-container: '#011d3e'
  on-tertiary-container: '#6f86ac'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b6c7e9'
  on-primary-fixed: '#081c36'
  on-primary-fixed-variant: '#364763'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#d5e3ff'
  tertiary-fixed-dim: '#b0c7f1'
  on-tertiary-fixed: '#001b3c'
  on-tertiary-fixed-variant: '#30476a'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  deep-navy: '#0A1D37'
  prestige-gold: '#C5A059'
  warm-amber: '#D4AF37'
  mist-white: '#F8F9FA'
  charcoal-text: '#2D2D2D'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  title-md:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system is anchored in the concept of "Premium Reliability." It targets high-end travelers, corporate clients, and tourists seeking a superior transit experience across Scotland. 

The visual style is **Corporate / Modern** with a lean toward **Minimalism**. It avoids the cluttered, aggressive "yellow-cab" aesthetic in favor of a sophisticated, editorial approach. The UI uses high-contrast typography and generous whitespace to evoke a sense of calm and punctuality. Interactions are fluid and understated, reinforcing the brand's professional and warm personality.

## Colors
The palette is dominated by **Deep Navy (#0A1D37)**, which provides a solid, authoritative foundation. This is contrasted by **Prestige Gold (#C5A059)**, used sparingly for primary actions, high-end highlights, and luxury service tiers. 

**Mist White (#F8F9FA)** serves as the primary background color to keep the interface airy and clean. Darker text is rendered in **Charcoal (#2D2D2D)** rather than pure black to maintain a softer, more premium feel. Functional colors (success, error) should be muted to align with the sophisticated tone.

## Typography
This design system uses a "Heritage & Modernity" pairing. **Playfair Display** is used for headlines to convey a sense of established luxury and Scottish hospitality. It should be used with tight letter-spacing in larger formats to maintain a modern editorial feel.

**Montserrat** is the workhorse for all functional text, navigation, and body copy. Its geometric clarity ensures high legibility, which is critical for a service where users are often checking details like prices and pickup times on the move. Use `label-sm` in all-caps for small metadata to add a touch of formal structure.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop (12 columns) to maintain a centered, premium feel. On mobile, it transitions to a single-column fluid layout with 16px margins.

Spacing is generous. We use a base-8 rhythm, but favor larger "stack" increments (32px, 64px) between major sections to prevent the UI from feeling cramped. Elements should "breathe," using internal padding to create a spacious, high-end environment that reflects the comfort of a premium taxi cabin.

## Elevation & Depth
Hierarchy is established through **Tonal Layers** and **Ambient Shadows**. 

Surfaces are primarily flat, but "Floating Cards" (used for the Quote Tool and Testimonials) utilize very soft, diffused shadows (e.g., `box-shadow: 0 4px 20px rgba(10, 29, 55, 0.05)`). This subtle lift suggests importance without breaking the clean aesthetic. We avoid heavy borders; instead, we use 1px strokes in a slightly darker off-white or light navy-tinted grey to define boundaries. High-priority elements, like the Booking Form, may use a subtle backdrop blur when appearing as a modal.

## Shapes
The shape language is **Soft**. A 0.25rem (4px) base radius is applied to buttons and inputs, providing a precise, professional look that isn't too "bubbly." Larger containers, such as route cards and testimonial blocks, use the `rounded-lg` (8px) setting to feel approachable and modern. Circular shapes are reserved exclusively for icon buttons or status indicators to avoid cluttering the geometric precision of the grid.

## Components

### Buttons
- **Primary:** Deep Navy background with Mist White text. On hover, the background shifts slightly lighter with a subtle 4px lift.
- **Secondary (Premium):** Prestige Gold background with Navy text. Reserved for "Book Now" or "Upgrade to Executive" actions.
- **Ghost:** Navy outline with transparent background, used for secondary actions like "View Routes."

### Quote Tool & Form Fields
Fields use a 1px border in a muted navy. Focus states are indicated by a 2px Prestige Gold bottom border, avoiding heavy glows. Typography within fields is `body-md`.

### Cards
Cards for "Popular Routes" use high-quality photography with a Navy-to-transparent gradient overlay at the bottom to house the price and destination in white `title-md` typography.

### Testimonials
Minimalist blocks featuring a quote in `body-lg` (italicized Playfair Display) and the client name in Montserrat `label-sm`. These sit on a Mist White background with a 1px Navy stroke.

### Vehicle Selection
A horizontal list of vehicle types (Standard, Executive, Van) using high-resolution transparent PNGs. Selected state is indicated by a Prestige Gold border and a subtle Navy checkmark icon.