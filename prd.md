# Product Requirements Document (PRD)

## Harmonia Website

### Overview

Harmonia is a website for a business that rents rooms to therapists ("facilitators") at a dedicated location. The site serves both clients seeking services and therapists interested in joining the space.

---

## 1. Services Page

**Purpose:**  
Showcase all services offered at Harmonia. Services can be individual or group-based.

**Features:**

- Display a list/grid of all services (see: [reference](https://harmoniaworld.org/activities/)).
- Each service card includes name, summary, type (individual/group), and price.
- Clicking a service opens a detail view showing:
  - Full description
  - List of facilitators who provide this service (with links to their profiles)
  - Duration, price, and booking/reservation link

**Data Source:**

- Services are defined in facilitator markdown files (see: `bozitiberiu.md`), aggregated for display.

---

## 2. Facilitators Page

**Purpose:**  
Present all registered facilitators and their offerings.

**Features:**

- Display a list/grid of facilitator cards.
- Each card includes name, tags, featured image, and short bio.
- Clicking a card opens the facilitator's profile page:
  - Full story/bio
  - List of services offered (with details and booking links)
  - Contact information (email, phone, social links)
  - Location (if specified)
  - Images/gallery

**Data Source:**

- Each facilitator is described in a markdown file (see: `bozitiberiu.md`), with structured fields for services, contact, images, etc.

---

## 3. Space Page

**Purpose:**  
Describe the physical location and facilities available for therapists.

**Features:**

- Overview of the house/location and available rooms
- Images/gallery of the space
- Link to a contact form for potential new facilitators
- Link to an external PDF with offer and regulations
- Display contact data (address, phone, email, etc.)
- Display a list of upcoming events fetched from Google Calendar, grouped by day, with collapsible descriptions.

---

## Calendar Events Integration Notes

- The Google Calendar event description can contain special keys for links:
  - `detailsLink:` followed by either an anchor tag, a full URL (https://...), or a www._ URL (e.g. www.example.com). If a www._ URL is used, it will be converted to https:// automatically.
  - `registerLink:` works the same way as above.
- Example formats supported:
  - `detailsLink: <a href="https://example.com">link</a>`
  - `detailsLink: https://example.com`
  - `detailsLink: www.example.com`
  - `registerLink: <a href="https://app.simplymeet.me/harmoniaoptima">link</a>`
  - `registerLink: https://app.simplymeet.me/harmoniaoptima`
  - `registerLink: www.simplymeet.me/harmoniaoptima`
- If a `detailsLink` is present, the event title will be a link to it. If not, the title is plain text.
- If a `registerLink` is present, a "Rezervă" button will be shown, styled as in the facilitator service cards, and linking to the register URL.
- The rest of the description (after removing the links) is shown as the event description.
- All link formats are supported in any order, and extra <br> tags are cleaned up.

---

## Technical Details

- **Framework:** Astro (v4), Typescript
- **Styling:** Tailwind CSS (see `tailwind.config.mjs`)
- **Content:** Facilitator/service data in markdown files
- **Configuration:** Tailwind theme and colors customized for Harmonia branding
- **Deployment:** Static site, optimized for SEO and fast load

---

## Non-Functional Requirements

- Responsive design for mobile and desktop
- Fast page loads and smooth navigation
- Accessibility best practices
- Easy to update/add facilitators and services via markdown files
- Secure contact forms and external links

---

## Out of Scope

- Payment processing (handled externally via reservation links)
- User authentication or login

---

## Success Metrics

- Increased bookings/reservations via service pages
- New facilitator applications via space/contact page
- Positive feedback on usability and design
