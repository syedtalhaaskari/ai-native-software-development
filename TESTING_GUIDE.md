# Testing Guide: AI Heading Summary Feature

## Pre-Flight Checklist

Before testing, ensure:
- [ ] Node.js 20+ is installed
- [ ] pnpm is installed
- [ ] OpenAI API key is available
- [ ] Internet connection is active

## Installation Test

### Step 1: Verify Dependencies

```bash
cd book-source
pnpm install
```

**Expected Output:**
```
✓ All dependencies installed
✓ openai@6.8.1 present in node_modules
```

### Step 2: Check Files Exist

```bash
# Windows
dir src\utils\openai-agent.ts
dir src\components\HeadingSummaryManager.tsx
dir src\components\HeadingSummaryModal.tsx
dir src\components\ApiSettings.tsx
```

**Expected Output:**
```
✓ All files exist
✓ No "file not found" errors
```

### Step 3: TypeScript Compilation

```bash
pnpm typecheck
```

**Expected Output:**
```
✓ No TypeScript errors
✓ All types resolve correctly
```

## Development Server Test

### Step 1: Start Server

```bash
pnpm start
```

**Expected Output:**
```
✓ Server starts on http://localhost:3000
✓ No compilation errors
✓ Browser opens automatically
```

### Step 2: Visual Inspection

**Check for Settings Button:**
- [ ] ⚙️ button visible in bottom-right corner
- [ ] Button is circular and styled correctly
- [ ] Hover effect works (scales up)
- [ ] No console errors

**Expected:** Floating gear icon in bottom-right, responsive to hover.

## Settings Panel Test

### Test 1: Open Settings Panel

1. Click the ⚙️ button

**Expected Results:**
- [ ] Panel slides up from bottom
- [ ] Smooth animation
- [ ] Backdrop appears (darkened background)
- [ ] Panel is well-styled and readable

### Test 2: API Key Input

1. Type in the API key field
2. Click the eye icon to toggle visibility

**Expected Results:**
- [ ] Can type in the field
- [ ] Text is hidden by default (password field)
- [ ] Eye icon toggles between hidden/visible
- [ ] No lag or delay

### Test 3: Save API Key

1. Enter a test API key: `sk-test123`
2. Click "Save"

**Expected Results:**
- [ ] Success message appears
- [ ] Green dot appears on ⚙️ button
- [ ] Panel closes after 3 seconds
- [ ] No console errors

### Test 4: Verify Persistence

1. Refresh the page
2. Click ⚙️ button
3. Check the API key field

**Expected Results:**
- [ ] Green dot still visible on ⚙️ button
- [ ] API key field contains saved value
- [ ] localStorage contains key

**Manual Check:**
```javascript
// In browser console:
localStorage.getItem('openai_api_key')
// Should return: "sk-test123"
```

### Test 5: Clear API Key

1. Click "Clear" button

**Expected Results:**
- [ ] "API key cleared" message appears
- [ ] API key field becomes empty
- [ ] Green dot disappears from ⚙️ button
- [ ] localStorage is cleared

### Test 6: Close Settings

1. Click X button
2. Click backdrop
3. Press ESC key

**Expected Results:**
- [ ] All three methods close the panel
- [ ] Smooth close animation
- [ ] No errors

## Heading Click Test (Without Valid API Key)

### Test 1: Click Without Configuration

1. Ensure no API key is saved (clear if needed)
2. Navigate to any docs page
3. Click any heading

**Expected Results:**
- [ ] Modal opens
- [ ] Shows loading state briefly
- [ ] Error message appears
- [ ] Error mentions configuring API key
- [ ] No crash or console errors

## Heading Click Test (With Valid API Key)

### Prerequisites
- Get a real OpenAI API key from https://platform.openai.com/api-keys
- Ensure you have credits in your OpenAI account
- Ensure you have access to GPT-4 Turbo (or change model to gpt-3.5-turbo)

### Test 1: Basic Summary Generation

1. Configure valid API key via ⚙️ panel
2. Navigate to `/docs/ai-summary-demo`
3. Click on "Getting Started with AI Summaries" heading

**Expected Results:**
- [ ] Modal opens immediately
- [ ] Loading spinner appears
- [ ] Heading title displayed: "Getting Started with AI Summaries"
- [ ] After 2-5 seconds, summary appears
- [ ] Summary is ~5 sentences
- [ ] Summary is relevant to content
- [ ] No errors in console

### Test 2: Multiple Headings

Click on these headings in sequence:
1. "How It Works"
2. "Benefits for Learners"
3. "Technical Implementation"

**Expected Results:**
- [ ] Each generates a unique summary
- [ ] Summaries are contextually different
- [ ] No memory leaks or performance issues
- [ ] Each takes 2-5 seconds

### Test 3: Different Heading Levels

Test all heading levels:
- H1 heading
- H2 heading
- H3 heading
- H4 heading

**Expected Results:**
- [ ] All heading levels work
- [ ] Cursor changes to pointer on hover
- [ ] Modal appears for each
- [ ] Summaries are relevant

### Test 4: Close Modal

After opening a summary, test closing:
1. Click the X button in top-right
2. Click "Close" button at bottom
3. Click backdrop (outside modal)
4. Press ESC key

**Expected Results:**
- [ ] All four methods close the modal
- [ ] Smooth close animation
- [ ] Can re-open by clicking heading again

### Test 5: Summary Quality

Read several generated summaries:

**Quality Checklist:**
- [ ] 5 sentences or fewer
- [ ] Captures main concepts
- [ ] Easy to understand
- [ ] No hallucinations (false info)
- [ ] Relevant to heading content
- [ ] Educational tone

### Test 6: Long Content Sections

1. Find a heading with lots of content after it
2. Click the heading

**Expected Results:**
- [ ] Content is truncated to ~3000 chars
- [ ] Summary still makes sense
- [ ] No token limit errors
- [ ] Completes successfully

### Test 7: Code-Heavy Sections

1. Find a heading followed by code examples
2. Click the heading

**Expected Results:**
- [ ] Code blocks simplified to `[Code Example]`
- [ ] Summary focuses on concepts, not code
- [ ] Completes successfully

## Error Handling Tests

### Test 1: Invalid API Key

1. Enter invalid key: `sk-invalid123`
2. Click any heading

**Expected Results:**
- [ ] Error message appears
- [ ] Message mentions invalid API key
- [ ] Suggests checking the key
- [ ] No crash

### Test 2: Network Offline

1. Disconnect from internet
2. Click any heading

**Expected Results:**
- [ ] Error message appears
- [ ] Mentions network/connection issue
- [ ] Graceful failure
- [ ] App still functional

### Test 3: Rate Limit

1. Click many headings rapidly (10+ in quick succession)

**Expected Results:**
- [ ] Some may fail with rate limit error
- [ ] Error message explains rate limiting
- [ ] No crash
- [ ] Can retry after waiting

## Mobile Responsive Tests

### Test on Mobile Viewport

1. Open Chrome DevTools
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select "iPhone 12 Pro" or similar

**Settings Panel:**
- [ ] Button sized appropriately
- [ ] Panel adjusts to screen width
- [ ] Input fields are usable
- [ ] No horizontal scroll

**Summary Modal:**
- [ ] Modal fits on screen
- [ ] Text is readable
- [ ] Close buttons are touchable
- [ ] Scrolls if content is long

### Test on Tablet

Select "iPad" viewport:
- [ ] Layout looks good
- [ ] Touch interactions work
- [ ] No overlap or clipping

## Dark Mode Tests

### Test 1: Toggle Dark Mode

1. Click sun/moon icon in navbar
2. Switch between light and dark

**Expected Results:**
- [ ] Settings button adapts colors
- [ ] Settings panel adapts colors
- [ ] Modal adapts colors
- [ ] All text remains readable
- [ ] No contrast issues

## Performance Tests

### Test 1: Memory Leaks

1. Click 20 different headings
2. Close each modal
3. Check Chrome DevTools > Performance > Memory

**Expected Results:**
- [ ] Memory usage stays stable
- [ ] No continuous memory growth
- [ ] Event listeners are cleaned up

### Test 2: Response Time

Generate 10 summaries and measure:

**Acceptable Times:**
- GPT-4 Turbo: 2-5 seconds
- GPT-3.5 Turbo: 1-2 seconds

**Red Flags:**
- > 10 seconds consistently
- Timeouts
- Freezing UI

### Test 3: Concurrent Requests

1. Open modal for heading A
2. Before summary loads, close and click heading B

**Expected Results:**
- [ ] First request is cancelled or ignored
- [ ] Second request completes
- [ ] No race conditions
- [ ] No duplicate summaries

## Accessibility Tests

### Test 1: Keyboard Navigation

1. Tab through page
2. Settings button should be focusable
3. Press Enter to open settings
4. Tab through settings inputs
5. Press ESC to close

**Expected Results:**
- [ ] All interactive elements focusable
- [ ] Visible focus indicators
- [ ] Logical tab order
- [ ] Keyboard shortcuts work

### Test 2: Screen Reader

Use NVDA (Windows) or VoiceOver (Mac):

**Expected Announcements:**
- [ ] "Settings button"
- [ ] "Open AI settings"
- [ ] "API key input"
- [ ] "Close modal"
- [ ] Heading text read correctly

### Test 3: ARIA Labels

Inspect with DevTools:

**Check for:**
- [ ] `aria-label` on buttons
- [ ] `role="dialog"` on modal
- [ ] Proper heading hierarchy
- [ ] No unlabeled interactive elements

## Browser Compatibility Tests

Test in multiple browsers:

### Chrome
- [ ] All features work
- [ ] Animations smooth
- [ ] No console errors

### Firefox
- [ ] All features work
- [ ] Animations smooth
- [ ] localStorage works

### Safari
- [ ] All features work
- [ ] Animations smooth
- [ ] No webkit-specific issues

### Edge
- [ ] All features work
- [ ] All features work
- [ ] Chromium compatibility

## Production Build Test

### Step 1: Build

```bash
pnpm build
```

**Expected:**
- [ ] Build completes successfully
- [ ] No errors or warnings
- [ ] Static files generated in /build

### Step 2: Serve

```bash
pnpm serve
```

**Expected:**
- [ ] Server starts on http://localhost:3000
- [ ] Site loads correctly
- [ ] All features work as in dev mode

### Step 3: Check Optimizations

**Verify:**
- [ ] JavaScript is minified
- [ ] CSS is minified
- [ ] No source maps in production
- [ ] Lazy loading works

## Security Tests

### Test 1: XSS Prevention

Try entering malicious code in API key field:
```
<script>alert('XSS')</script>
```

**Expected Results:**
- [ ] Code is treated as plain text
- [ ] No script execution
- [ ] Stored safely in localStorage

### Test 2: API Key Visibility

1. Open Chrome DevTools > Network tab
2. Generate a summary
3. Check network requests

**Expected Results:**
- [ ] API key only in Authorization header to api.openai.com
- [ ] API key NOT sent to your domain
- [ ] HTTPS used for OpenAI requests

### Test 3: localStorage Isolation

```javascript
// In console:
localStorage
```

**Expected Results:**
- [ ] API key stored as plain text (necessary for client-side)
- [ ] Only accessible to same origin
- [ ] Not accessible cross-domain

## Load Testing

### Simulate Heavy Usage

1. Open 10 browser tabs
2. In each tab, click headings rapidly
3. Monitor server and API performance

**Acceptable:**
- [ ] All tabs work independently
- [ ] No global state conflicts
- [ ] Rate limits handled gracefully

## Documentation Tests

### Test 1: Quick Start Guide

Follow `AI_SUMMARY_QUICK_START.md` step-by-step:
- [ ] All commands work
- [ ] Instructions are clear
- [ ] Feature works as documented

### Test 2: Full Documentation

Review `docs/AI_HEADING_SUMMARY_FEATURE.md`:
- [ ] Architecture matches implementation
- [ ] Code examples are accurate
- [ ] Customization instructions work

### Test 3: Demo Page

Visit `/docs/ai-summary-demo`:
- [ ] Page loads correctly
- [ ] All sections render properly
- [ ] Test headings work
- [ ] Instructions are helpful

## Final Acceptance Criteria

The feature passes if:

✅ **Functionality**
- [ ] All headings clickable
- [ ] Summaries generate correctly
- [ ] Modal UI works perfectly
- [ ] Settings panel functional
- [ ] API key persistence works

✅ **Performance**
- [ ] Summaries in <5 seconds
- [ ] No memory leaks
- [ ] Smooth animations
- [ ] No lag or freezing

✅ **Quality**
- [ ] Summaries are accurate
- [ ] 5 sentences or fewer
- [ ] Easy to understand
- [ ] Contextually relevant

✅ **User Experience**
- [ ] Intuitive interface
- [ ] Clear error messages
- [ ] Helpful documentation
- [ ] Mobile friendly

✅ **Security**
- [ ] API keys stored safely
- [ ] No XSS vulnerabilities
- [ ] HTTPS for API calls
- [ ] No sensitive data leaks

✅ **Compatibility**
- [ ] Works in all major browsers
- [ ] Works on mobile devices
- [ ] Dark mode support
- [ ] Accessible via keyboard

## Troubleshooting Failed Tests

### If Settings Panel Doesn't Appear
→ Check Root.tsx includes ApiSettings component
→ Verify CSS file imported correctly
→ Check z-index conflicts

### If Summaries Don't Generate
→ Verify valid API key
→ Check OpenAI account has credits
→ Check browser console for errors
→ Verify openai package installed

### If Modal Doesn't Open
→ Check HeadingSummaryManager in Root.tsx
→ Verify click handlers attached
→ Check browser console for errors
→ Ensure page fully loaded

### If Styling Issues
→ Clear browser cache
→ Check CSS modules loading
→ Verify no conflicting styles
→ Test in incognito mode

## Regression Testing

After making changes, re-run:
1. Settings Panel Tests (10 min)
2. Heading Click Tests (15 min)
3. Error Handling Tests (10 min)
4. Mobile Responsive Tests (10 min)

**Total regression time: ~45 minutes**

## Reporting Issues

When reporting bugs, include:
- Browser and version
- Operating system
- Steps to reproduce
- Expected vs actual behavior
- Console errors
- Screenshots if applicable

---

**Testing Status: All tests should pass ✅**

Good luck testing! 🧪✨
