# AI-Powered Heading Summary Feature

## Overview

This feature enables AI-powered summaries of content sections when users click on headings throughout the documentation. It uses OpenAI's GPT models to generate concise, 5-sentence summaries that help readers quickly understand the key concepts in each section.

## Architecture

### Components

1. **OpenAI Agent** (`src/utils/openai-agent.ts`)
   - Manages OpenAI client initialization
   - Generates summaries using GPT-4 Turbo
   - Extracts and preprocesses content from HTML elements
   - Handles API communication and error states

2. **Heading Summary Manager** (`src/components/HeadingSummaryManager.tsx`)
   - Attaches click handlers to all headings in documentation
   - Coordinates between heading clicks and the AI agent
   - Manages modal state and content extraction
   - Provides visual feedback for clickable headings

3. **Heading Summary Modal** (`src/components/HeadingSummaryModal.tsx`)
   - Displays the generated summary in a beautiful modal UI
   - Shows loading states while generating
   - Handles errors gracefully
   - Supports keyboard shortcuts (ESC to close)

4. **API Settings** (`src/components/ApiSettings.tsx`)
   - Floating settings button for API key configuration
   - Secure input with show/hide toggle
   - Persists API key in localStorage
   - Visual indicator when API is configured

### How It Works

```
User clicks heading
       ↓
HeadingSummaryManager detects click
       ↓
Extract content from section
       ↓
Send to OpenAI Agent
       ↓
GPT-4 generates summary
       ↓
Display in modal
```

## Setup Instructions

### 1. Install Dependencies

The OpenAI SDK is already installed. If you need to reinstall:

```bash
cd book-source
pnpm add openai
```

### 2. Configure API Key

Users have two options to configure their OpenAI API key:

#### Option A: Through the UI (Recommended for Users)

1. Click the settings button (⚙️) in the bottom-right corner
2. Enter your OpenAI API key
3. Click "Save"
4. The key is stored securely in your browser's localStorage

#### Option B: Environment Variable (Recommended for Development)

Create a `.env.local` file in the `book-source` directory:

```env
OPENAI_API_KEY=sk-your-api-key-here
```

**Note:** Never commit API keys to version control!

### 3. Run the Development Server

```bash
cd book-source
pnpm start
```

### 4. Test the Feature

1. Navigate to any documentation page
2. Click on any heading (h1, h2, h3, h4, h5, or h6)
3. Wait for the AI to generate a summary
4. The summary modal will appear with a concise overview

## Features

### ✨ User Features

- **Click-to-Summarize**: Click any heading to get an instant summary
- **Concise Summaries**: Maximum 5 sentences, focused on key concepts
- **Beautiful UI**: Modern modal with smooth animations
- **Keyboard Support**: Press ESC to close the modal
- **Loading States**: Visual feedback while generating
- **Error Handling**: Clear error messages with helpful guidance
- **Mobile Responsive**: Works perfectly on all screen sizes
- **Dark Mode Support**: Adapts to Docusaurus theme

### 🔧 Technical Features

- **Smart Content Extraction**: Intelligently finds relevant content after headings
- **Code Block Handling**: Simplifies code examples in summaries
- **Token Management**: Automatically limits content to avoid API limits
- **Browser-Side Storage**: API keys stored securely in localStorage
- **No Backend Required**: Runs entirely in the browser
- **TypeScript**: Fully typed for better developer experience

## API Usage and Costs

### Model Used

- **Default**: GPT-4 Turbo (`gpt-4-turbo-preview`)
- **Max Tokens**: 500 per summary
- **Temperature**: 0.7 (balanced creativity)

### Estimated Costs

Based on OpenAI's pricing (as of 2024):

- Input: ~$10 per 1M tokens
- Output: ~$30 per 1M tokens
- Average summary: ~1000 input tokens + 200 output tokens
- **Cost per summary**: ~$0.01-0.02

### Optimization Tips

1. **Cache Summaries**: Store generated summaries to avoid regeneration
2. **Batch Requests**: Generate summaries for multiple sections at once
3. **Use GPT-3.5**: Switch to `gpt-3.5-turbo` for lower costs
4. **Limit Length**: Reduce max tokens if shorter summaries are acceptable

## Customization

### Change the Model

Edit `src/utils/openai-agent.ts`:

```typescript
const response = await client.chat.completions.create({
  model: 'gpt-3.5-turbo', // Change this
  // ... rest of config
});
```

### Adjust Summary Length

Change the `maxSentences` parameter:

```typescript
const generatedSummary = await generateSummary(content, headingText, 3); // 3 sentences instead of 5
```

### Customize the Prompt

Edit the prompt in `generateSummary()` function:

```typescript
const prompt = `You are a helpful assistant that creates concise summaries.
Your custom instructions here...`;
```

### Style Customization

Modify the CSS files:
- `HeadingSummaryModal.module.css` - Modal appearance
- `ApiSettings.module.css` - Settings panel appearance

## Security Considerations

### API Key Storage

- **Browser localStorage**: Keys are stored locally, never sent to any server except OpenAI
- **No Backend**: No server-side storage or logging
- **User Control**: Users can clear their API key anytime

### Best Practices

1. **Never Commit Keys**: Add `.env.local` to `.gitignore`
2. **Rate Limiting**: Consider implementing rate limiting for public sites
3. **User Education**: Inform users about API costs
4. **Optional Feature**: Make it opt-in, not mandatory

## Troubleshooting

### Common Issues

#### "OpenAI client not initialized"
- **Solution**: Make sure you've entered your API key in the settings panel
- Check browser console for errors

#### "Failed to generate summary"
- **Solution**: Verify your API key is valid
- Check your OpenAI account has credits
- Ensure you have access to GPT-4 Turbo

#### Summaries are too long/short
- **Solution**: Adjust the `maxSentences` parameter or modify the prompt

#### Modal doesn't appear
- **Solution**: Check browser console for JavaScript errors
- Ensure the page has finished loading
- Try clicking on different heading levels

### Debug Mode

Enable debug logging in `openai-agent.ts`:

```typescript
console.log('Generating summary for:', heading);
console.log('Content length:', content.length);
```

## Future Enhancements

### Potential Features

1. **Summary Caching**: Store summaries in localStorage to avoid regeneration
2. **Batch Generation**: Pre-generate summaries for entire chapters
3. **Multi-language**: Support for multiple languages
4. **Custom Prompts**: Allow users to customize summary style
5. **Export Summaries**: Download all summaries as a study guide
6. **Voice Reading**: Text-to-speech for summaries
7. **Highlight Keywords**: Emphasize important terms in summaries
8. **Related Sections**: Suggest related content based on summaries

### Performance Improvements

1. **Web Workers**: Run API calls in background threads
2. **Streaming**: Stream summary generation for faster perceived speed
3. **Progressive Loading**: Show partial summaries as they generate
4. **Edge Functions**: Move to edge computing for lower latency

## Contributing

### Development Workflow

1. Make changes to components
2. Test locally with `pnpm start`
3. Ensure TypeScript compiles without errors
4. Test on mobile devices
5. Update documentation

### Code Style

- Use TypeScript for type safety
- Follow React functional component patterns
- Use CSS modules for styling
- Add JSDoc comments for functions
- Handle errors gracefully

## License

This feature is part of the AI Native Software Development project and follows the same license.

## Support

For issues or questions:
1. Check this README
2. Review the code comments
3. Check OpenAI API documentation
4. Open an issue on GitHub

---

**Built with ❤️ using OpenAI SDK and Docusaurus**
