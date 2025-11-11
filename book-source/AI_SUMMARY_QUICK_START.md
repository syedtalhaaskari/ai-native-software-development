# Quick Start Guide: AI Heading Summary Feature

## 🚀 Installation & Setup

### Step 1: Dependencies
The OpenAI SDK has been installed. If you need to verify or reinstall:

```bash
cd book-source
pnpm install
```

### Step 2: Configure API Key

Choose one of these methods:

#### Method A: User Configuration (Recommended)
1. Start the development server:
   ```bash
   pnpm start
   ```
2. Open http://localhost:3000
3. Click the settings button (⚙️) in the bottom-right corner
4. Enter your OpenAI API key
5. Click "Save"

#### Method B: Environment Variable (Development)
1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```
2. Edit `.env.local` and add your key:
   ```
   OPENAI_API_KEY=sk-your-actual-key-here
   ```
3. Restart the development server

### Step 3: Test the Feature
1. Navigate to any documentation page
2. Click on any heading (H1, H2, H3, etc.)
3. Wait for the AI-generated summary to appear in a modal
4. Click "Close" or press ESC to dismiss

## 📁 Project Structure

```
book-source/
├── src/
│   ├── components/
│   │   ├── HeadingSummaryModal.tsx       # Modal UI component
│   │   ├── HeadingSummaryModal.module.css # Modal styles
│   │   ├── HeadingSummaryManager.tsx     # Click handler & coordination
│   │   ├── ApiSettings.tsx               # Settings panel
│   │   └── ApiSettings.module.css        # Settings styles
│   ├── utils/
│   │   └── openai-agent.ts               # OpenAI API integration
│   └── theme/
│       └── Root.tsx                      # App wrapper (updated)
├── docs/
│   ├── ai-summary-demo.md                # Demo page
│   └── AI_HEADING_SUMMARY_FEATURE.md     # Full documentation
├── .env.example                          # Environment template
└── package.json                          # Dependencies (openai added)
```

## 🎯 Features

✅ **Click-to-Summarize**: Click any heading to get instant AI summary  
✅ **5-Sentence Limit**: Concise, focused summaries  
✅ **Beautiful Modal UI**: Smooth animations, dark mode support  
✅ **Keyboard Support**: ESC to close  
✅ **Mobile Responsive**: Works on all devices  
✅ **Settings Panel**: Easy API key configuration  
✅ **Error Handling**: Clear error messages  
✅ **Loading States**: Visual feedback during generation  

## 🔧 Customization

### Change Summary Length
Edit `src/components/HeadingSummaryManager.tsx`:

```typescript
// Line ~50
const generatedSummary = await generateSummary(content, headingText, 3); // Change 5 to 3
```

### Change AI Model
Edit `src/utils/openai-agent.ts`:

```typescript
// Line ~45
const response = await client.chat.completions.create({
  model: 'gpt-3.5-turbo', // Change from gpt-4-turbo-preview
  // ...
});
```

### Customize Modal Appearance
Edit `src/components/HeadingSummaryModal.module.css`

### Customize Settings Button Position
Edit `src/components/ApiSettings.module.css`:

```css
.settingsButton {
  bottom: 2rem;  /* Change position */
  right: 2rem;   /* Change position */
}
```

## 📊 API Costs

Based on OpenAI pricing:
- **GPT-4 Turbo**: ~$0.01-0.02 per summary
- **GPT-3.5 Turbo**: ~$0.001-0.002 per summary

Average: 1000 input tokens + 200 output tokens per summary

## 🐛 Troubleshooting

### "OpenAI client not initialized"
→ Configure your API key in the settings panel (⚙️ button)

### "Failed to generate summary"
→ Check your API key is valid  
→ Verify you have OpenAI credits  
→ Ensure you have GPT-4 access (or switch to GPT-3.5)

### Modal doesn't appear
→ Check browser console for errors  
→ Ensure page has fully loaded  
→ Try different heading levels  
→ Clear browser cache and reload

### Summaries are slow
→ Switch to GPT-3.5 Turbo for faster responses  
→ Check your internet connection  
→ Verify you haven't hit rate limits

## 🔒 Security

- ✅ API keys stored in browser localStorage only
- ✅ No backend/server storage
- ✅ Keys never logged or transmitted (except to OpenAI)
- ✅ User has full control to clear key anytime
- ✅ All code is open source and auditable

## 📚 Additional Resources

- **Full Documentation**: See `docs/AI_HEADING_SUMMARY_FEATURE.md`
- **Demo Page**: Visit `/docs/ai-summary-demo` in your local dev server
- **OpenAI Docs**: https://platform.openai.com/docs
- **Get API Key**: https://platform.openai.com/api-keys

## 🎉 Quick Demo

1. Run `pnpm start`
2. Navigate to http://localhost:3000/docs/ai-summary-demo
3. Configure your API key (⚙️ button)
4. Click any heading on the page
5. See the magic! ✨

---

**Need Help?** Check the troubleshooting section or open an issue on GitHub.
