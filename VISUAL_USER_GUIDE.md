# Visual User Guide: AI Heading Summary Feature

## 🎯 Complete Walkthrough with Visual Examples

---

## Step 1: Starting the Application

```bash
cd book-source
pnpm start
```

**What you'll see:**
```
Starting the development server...
✔ Client: Compiled successfully
```

**Browser opens to:** `http://localhost:3000`

---

## Step 2: Locate the Settings Button

Look at the **bottom-right corner** of your screen:

```
                                    Your Documentation Page
┌─────────────────────────────────────────────────────────────┐
│  📚 AI Native Development                                    │
│                                                              │
│  # Getting Started                                           │
│                                                              │
│  Welcome to AI-native software development...                │
│  This guide will teach you how to...                         │
│                                                              │
│  ## Prerequisites                                            │
│                                                              │
│  Before you begin, ensure you have...                        │
│                                                              │
│                                                              │
│                                                              │
│                                                              │
│                                                              │
│                                                      ⚙️     │ ← Settings Button
└─────────────────────────────────────────────────────────────┘
```

**Features:**
- Circular button with gear icon (⚙️)
- Floating in bottom-right corner
- Hover to see scale animation
- Always visible while scrolling

---

## Step 3: Open Settings Panel

**Action:** Click the ⚙️ button

**What appears:**

```
                                            Panel slides up ↓

┌──────────────────────────────────────────┐
│  ⚙️ AI Summary Settings            [×]  │  ← Header with close
├──────────────────────────────────────────┤
│                                          │
│  Enter your OpenAI API key to enable     │  ← Description
│  AI-powered summaries when you click     │
│  on headings.                            │
│                                          │
│  OpenAI API Key                          │  ← Label
│  ┌────────────────────────────────┐ 👁️  │  ← Input + toggle
│  │ ●●●●●●●●●●●●●●●●●●●●●●●●●●●● │     │  (hidden by default)
│  └────────────────────────────────┘     │
│                                          │
│  [Save]  [Clear]                         │  ← Action buttons
│                                          │
│  ─────────────────────────────────────── │
│                                          │
│  📖 How to get an API key:               │  ← Help section
│   1. Visit platform.openai.com/api-keys │
│   2. Sign in or create an account        │
│   3. Click "Create new secret key"       │
│   4. Copy and paste the key here         │
│                                          │
│  ℹ️ Your API key is stored locally in   │  ← Security note
│     your browser and never sent to our   │
│     servers.                             │
│                                          │
└──────────────────────────────────────────┘
         ⚙️  ← Settings button (now with backdrop)
```

**Features:**
- Smooth slide-up animation
- Dark backdrop behind
- Clean, modern design
- Helpful instructions included

---

## Step 4: Get Your OpenAI API Key

**Instructions in panel link to:** `https://platform.openai.com/api-keys`

**OpenAI Platform Flow:**

```
1. OpenAI Website
   ┌──────────────────────────────────┐
   │  OpenAI Platform                 │
   │  [Sign in] [Sign up]             │
   └──────────────────────────────────┘
           ↓
2. Dashboard
   ┌──────────────────────────────────┐
   │  API Keys                        │
   │  [+ Create new secret key]       │
   └──────────────────────────────────┘
           ↓
3. Create Key
   ┌──────────────────────────────────┐
   │  Name: My App Key                │
   │  [Create secret key]             │
   └──────────────────────────────────┘
           ↓
4. Copy Key
   ┌──────────────────────────────────┐
   │  sk-proj-abc123...xyz789         │
   │  ⚠️ Save this key! You won't     │
   │     see it again!                │
   │  [Copy] [Done]                   │
   └──────────────────────────────────┘
```

**Your key will look like:**
```
sk-proj-abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJ...
```

---

## Step 5: Enter and Save API Key

**Action:** Paste your key and click "Save"

**Before Save:**
```
┌────────────────────────────────┐
│ sk-proj-abc123...             │  ← Your pasted key
└────────────────────────────────┘
    [Save]  [Clear]
```

**After Save:**
```
┌────────────────────────────────┐
│ ✅ API key saved successfully! │  ← Success message
│    Click any heading to see     │  (appears for 3 seconds)
│    summaries.                   │
└────────────────────────────────┘
    [Save]  [Clear]
                                    Panel auto-closes ↓
```

**Settings button changes:**
```
Before:  ⚙️           After:  ⚙️ 🟢  ← Green dot = configured
```

---

## Step 6: Click a Heading

**Action:** Click any heading in the documentation

**Visual indicator when hovering:**
```
# Getting Started  ← cursor: pointer
  └─ Shows hand cursor icon
```

**Headings that work:**
- H1: `# Large Heading`
- H2: `## Section Heading`
- H3: `### Subsection Heading`
- H4: `#### Detail Heading`
- H5: `##### Small Heading`
- H6: `###### Smallest Heading`

---

## Step 7: Loading State

**Immediately after clicking:**

```
┌──────────────────────────────────────────┐
│  ✨ AI Summary                     [×]  │
├──────────────────────────────────────────┤
│  Getting Started                         │  ← Heading title
│  ───────────────                         │
│                                          │
│         ◐ Generating summary...          │  ← Spinner animation
│                                          │
│                                          │
└──────────────────────────────────────────┘
```

**Animation sequence:**
```
Frame 1:  ◐
Frame 2:  ◓
Frame 3:  ◑
Frame 4:  ◒
(repeats)
```

**Typical wait time:**
- GPT-4 Turbo: 2-5 seconds
- GPT-3.5 Turbo: 1-2 seconds

---

## Step 8: Summary Appears

**After generation:**

```
┌────────────────────────────────────────────────┐
│  ✨ AI Summary                           [×]  │
├────────────────────────────────────────────────┤
│  Getting Started                               │
│  ───────────────                               │
│                                                │
│  ╔════════════════════════════════════════════╗│
│  ║ This section introduces the fundamentals   ║│
│  ║ of AI-native software development. You'll  ║│
│  ║ learn how to set up your development       ║│
│  ║ environment, configure essential tools,    ║│
│  ║ and understand the core principles. The    ║│
│  ║ guide walks you through prerequisites and  ║│
│  ║ provides hands-on examples. By the end,    ║│
│  ║ you'll be ready to build your first        ║│
│  ║ AI-powered application with confidence.    ║│
│  ╚════════════════════════════════════════════╝│
│                                                │
│                              [Close]           │
└────────────────────────────────────────────────┘
```

**Features:**
- Highlighted summary box
- Maximum 5 sentences
- Easy-to-read formatting
- Relevant to heading content

---

## Step 9: Close the Modal

**Four ways to close:**

### Method 1: Click X Button
```
┌──────────────────────────────────────┐
│  ✨ AI Summary               [×] ←─── Click here
├──────────────────────────────────────┤
│  ...                                 │
```

### Method 2: Click Close Button
```
├──────────────────────────────────────┤
│  Summary text here...                │
│                                      │
│                        [Close] ←───── Click here
└──────────────────────────────────────┘
```

### Method 3: Click Backdrop
```
████████████████████████████████████████  ← Click dark area
███████┌──────────────────┐████████████     outside modal
███████│  Modal Content   │████████████
███████└──────────────────┘████████████
████████████████████████████████████████
```

### Method 4: Press ESC Key
```
Keyboard: [ESC] ← Press this key
```

---

## Step 10: Try More Headings!

**Example page with multiple sections:**

```
┌──────────────────────────────────────────────┐
│  # Main Topic                        ← Click!│
│  Introduction to the main topic...           │
│                                              │
│  ## Section A                        ← Click!│
│  Details about section A...                  │
│                                              │
│  ### Subsection A1                   ← Click!│
│  More specific information...                │
│                                              │
│  ### Subsection A2                   ← Click!│
│  Additional details...                       │
│                                              │
│  ## Section B                        ← Click!│
│  Information about section B...              │
│                                              │
│  ### Subsection B1                   ← Click!│
│  Specific examples...                        │
└──────────────────────────────────────────────┘
```

**Each heading generates a unique summary!**

---

## Visual States Reference

### Settings Button States

```
Not Configured:     Configured:        Hover:
     ⚙️                ⚙️ 🟢             ⚙️ (scaled up)
```

### Modal States

```
Loading:                Success:              Error:
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│ ◐ Loading... │      │ ✓ Summary    │      │ ⚠️ Error     │
└──────────────┘      │   content    │      │   message    │
                      └──────────────┘      └──────────────┘
```

### Input Field States

```
Hidden:                 Visible:
[●●●●●●●●●●●] 👁️        [sk-proj-abc...] 👁️‍🗨️
```

---

## Keyboard Shortcuts

```
⚙️ Settings Button:
   [Tab] → Focus button
   [Enter] → Open settings
   [Space] → Open settings

Settings Panel:
   [Tab] → Navigate inputs
   [ESC] → Close panel

Summary Modal:
   [ESC] → Close modal
```

---

## Color Scheme

### Light Mode
```
┌──────────────────────────┐
│ Background: White        │
│ Text: Dark Gray          │
│ Primary: Blue            │
│ Border: Light Gray       │
└──────────────────────────┘
```

### Dark Mode
```
┌──────────────────────────┐
│ Background: Dark Gray    │
│ Text: Light Gray         │
│ Primary: Blue            │
│ Border: Medium Gray      │
└──────────────────────────┘
```

---

## Mobile View

### Portrait Mode (Phone)

```
┌─────────────────┐
│  Documentation  │
│                 │
│  # Heading 1 ←──┼─ Click to summarize
│  Content...     │
│                 │
│  ## Heading 2 ←─┼─ Click to summarize
│  More content...│
│                 │
│                 │
│                 │
│                 │
│             ⚙️  │← Settings button
└─────────────────┘
```

### Modal on Mobile

```
┌─────────────────┐
│ ✨ AI Summary [×]│
├─────────────────┤
│ Heading Title   │
│ ─────────────   │
│                 │
│ Summary text    │
│ appears here... │
│                 │
│ (Scrollable if  │
│  too long)      │
│                 │
│        [Close]  │
└─────────────────┘
```

---

## Troubleshooting Visual Guide

### Problem: No Settings Button

```
Expected:                  Actually:
┌──────────────┐          ┌──────────────┐
│              │          │              │
│          ⚙️  │          │    (empty)   │
└──────────────┘          └──────────────┘

Solution: Check console for errors, rebuild app
```

### Problem: Modal Doesn't Appear

```
User clicks: # Heading
             ↓
Expected: Modal appears
Actually: Nothing happens

Solution: Check browser console, verify API key saved
```

### Problem: Error Message

```
┌──────────────────────────────┐
│ ⚠️ OpenAI client not         │
│    initialized               │
│                              │
│ Make sure you've set the     │
│ OPENAI_API_KEY...            │
└──────────────────────────────┘

Solution: Click ⚙️ and save your API key
```

---

## Success Indicators

**✅ Everything Working:**

1. ⚙️ button visible in corner
2. 🟢 Green dot appears after saving key
3. Cursor changes to pointer over headings
4. Modal opens when clicking headings
5. Summary appears after 2-5 seconds
6. Close buttons work
7. ESC key closes modal

**❌ Something Wrong:**

- Settings button missing
- No green dot after saving
- Headings not clickable
- Modal doesn't open
- Loading spins forever
- Error messages appear
- Close buttons don't work

**If you see ✅ indicators: Perfect! Feature is working!**
**If you see ❌ indicators: Check `TESTING_GUIDE.md` for solutions**

---

## 🎉 Enjoy Your AI Summaries!

**Remember:**
- Click ⚙️ to configure
- Click headings to summarize
- Press ESC to close
- Each summary costs ~$0.01-0.02 (GPT-4) or ~$0.001 (GPT-3.5)

**Questions? Check the full docs:**
- `AI_SUMMARY_QUICK_START.md`
- `docs/AI_HEADING_SUMMARY_FEATURE.md`

---

Made with ❤️ for AI-Native Software Development
