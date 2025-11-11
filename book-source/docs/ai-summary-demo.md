---
title: AI Summary Demo
description: Test the AI-powered heading summary feature
---

# AI Heading Summary - Demo Page

This page demonstrates the AI-powered heading summary feature. Click on any heading below to see an AI-generated summary of the content in that section.

## Getting Started with AI Summaries

To use the AI summary feature:

1. **Configure Your API Key**: Click the settings button (⚙️) in the bottom-right corner
2. **Enter OpenAI Key**: Paste your OpenAI API key and click Save
3. **Click Any Heading**: Click on any heading on this page or throughout the documentation
4. **Read the Summary**: A modal will appear with a concise 5-sentence summary

The summaries are generated in real-time using OpenAI's GPT-4 Turbo model, providing you with quick insights into each section's content without having to read everything.

## How It Works

When you click on a heading, several things happen behind the scenes:

1. **Content Extraction**: The system identifies all content between the clicked heading and the next heading, extracting relevant text while simplifying code examples
2. **AI Processing**: The extracted content is sent to OpenAI's API with a specialized prompt designed to generate educational summaries
3. **Summary Generation**: GPT-4 analyzes the content and creates a concise summary highlighting the key concepts, main takeaways, and important details
4. **Display**: The generated summary appears in a beautiful modal overlay with loading animations and error handling
5. **Caching**: Future versions will cache summaries to improve performance and reduce API costs

This feature is particularly useful for quickly reviewing material, understanding complex sections, or getting an overview before diving deep into technical content.

## Benefits for Learners

AI-powered summaries provide multiple advantages for students and professionals learning new technologies:

**Quick Review**: Get instant overviews of sections without re-reading entire passages, perfect for exam preparation or quick refreshers before applying concepts.

**Better Understanding**: Sometimes reading a summary helps clarify complex topics by presenting information in a different way, reinforcing learning through varied explanations.

**Time Efficiency**: Save time by quickly determining if a section contains the information you need, allowing you to focus your study efforts on the most relevant content.

**Cognitive Aid**: Summaries help with information retention by providing memorable highlights, acting as mental anchors for more detailed knowledge.

**Accessibility**: Makes content more accessible to readers with different learning styles, reading levels, or those who benefit from multiple presentations of information.

## Technical Implementation

The feature is built using modern web technologies and best practices:

### Frontend Architecture

The implementation consists of four main components working together seamlessly:

1. **OpenAI Agent** (`openai-agent.ts`): Manages API communication, initializes the OpenAI client with user-provided keys, handles token management to stay within limits, and implements error handling with helpful user feedback
2. **Heading Summary Manager** (`HeadingSummaryManager.tsx`): Attaches click handlers to all heading elements in the document, extracts relevant content from the DOM structure, coordinates between user interactions and the AI agent, and manages application state
3. **Summary Modal** (`HeadingSummaryModal.tsx`): Displays generated summaries in a polished UI, provides loading states and error messages, supports keyboard shortcuts like ESC to close, and is fully responsive for mobile devices
4. **API Settings** (`ApiSettings.tsx`): Offers a floating settings panel for API key configuration, securely stores keys in browser localStorage, provides visual feedback about configuration status, and includes helpful setup instructions

### Security and Privacy

We take security seriously with several protective measures:

- **Local Storage Only**: API keys are stored exclusively in your browser's localStorage and never sent to any server except OpenAI's official API endpoints
- **No Backend Required**: The entire feature runs client-side, meaning we never see, store, or log your API keys on any backend infrastructure
- **User Control**: You have complete control over your API key and can clear it at any time through the settings panel
- **Transparent Operation**: All code is open source, allowing you to verify exactly what happens with your credentials
- **Best Practices**: We follow OpenAI's security guidelines and implement rate limiting recommendations to prevent abuse

### Performance Optimization

The system is optimized for speed and efficiency:

- **Smart Content Extraction**: Intelligently identifies relevant content while filtering out noise like navigation elements and footers
- **Token Management**: Automatically limits content to ~3000 characters to avoid API token limits and reduce costs
- **Code Simplification**: Replaces lengthy code blocks with `[Code Example]` markers to focus summaries on concepts rather than implementation
- **Async Loading**: Uses asynchronous operations to keep the UI responsive during API calls, preventing interface freezing
- **Error Recovery**: Gracefully handles API failures with retry logic and clear error messages to guide users

## Use Cases and Examples

Here are some practical scenarios where AI summaries shine:

### For Students

- **Exam Preparation**: Quickly review all chapter sections by clicking through headings and reading summaries, creating a comprehensive overview in minutes
- **Pre-Reading**: Get a preview of what each section covers before diving deep, helping you plan your study time effectively
- **Revision**: After learning, click headings to test your recall against the AI summary, reinforcing what you've learned

### For Developers

- **Documentation Scanning**: Rapidly assess if a documentation section contains the solution to your problem without reading everything line-by-line
- **Learning New Technologies**: Get high-level overviews of concepts before investing time in detailed study, helping you build mental models
- **Reference Checking**: Quickly verify your understanding of a topic by comparing your mental model with the AI summary

### For Content Creators

- **Quality Assurance**: Check if the AI can accurately summarize your content, which validates that your writing is clear and well-structured
- **SEO Metadata**: Use generated summaries as inspiration for meta descriptions and social media snippets
- **Content Improvement**: If the AI summary seems unclear or incomplete, it might indicate areas where your content needs clarification

## Configuration Options

Customize the feature to match your preferences and use cases:

### Model Selection

You can change which OpenAI model generates summaries by editing the `openai-agent.ts` file:

```typescript
// Use GPT-4 Turbo (default, highest quality)
model: 'gpt-4-turbo-preview'

// Use GPT-3.5 Turbo (faster, cheaper)
model: 'gpt-3.5-turbo'

// Use GPT-4 (stable, balanced)
model: 'gpt-4'
```

### Summary Length

Adjust the number of sentences in summaries:

```typescript
// Generate 3-sentence summaries
await generateSummary(content, heading, 3)

// Generate 5-sentence summaries (default)
await generateSummary(content, heading, 5)

// Generate 7-sentence summaries
await generateSummary(content, heading, 7)
```

### Custom Prompts

Modify the system prompt to change the summary style:

```typescript
// More technical summaries
content: 'You are a technical writer creating precise summaries for developers...'

// More beginner-friendly summaries
content: 'You are an educator creating easy-to-understand summaries for beginners...'

// Bullet-point style summaries
content: 'You are creating concise bullet-point summaries highlighting key facts...'
```

## Try It Now!

Click on any heading on this page to see the feature in action! If you haven't configured your OpenAI API key yet, click the settings button (⚙️) in the bottom-right corner to get started.

### Test Heading 1

This is some sample content to demonstrate the summary feature. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Test Heading 2

More sample content here with different information. The AI will analyze this content and create a unique summary that captures the essence of what's written in this section. The summary will be different from the previous one because the content is different.

### Test Heading 3

Yet another section with its own unique content. Each heading click generates a fresh summary based on the actual content below it, providing contextual insights specific to that section.

## Troubleshooting

Having issues? Here are common problems and solutions:

### Problem: "OpenAI client not initialized" error

**Solution**: You haven't configured your API key yet. Click the settings button (⚙️) and enter your OpenAI API key. The key should start with `sk-` and you can get one from [OpenAI's platform](https://platform.openai.com/api-keys).

### Problem: Summaries are taking too long

**Solution**: This could be due to API rate limits or network issues. Check your internet connection and verify you haven't exceeded OpenAI's rate limits. Consider switching to a faster model like `gpt-3.5-turbo` if speed is critical.

### Problem: Summaries are inaccurate or unhelpful

**Solution**: Try adjusting the custom prompt to be more specific about what you want in summaries. You can also try different models - GPT-4 typically provides more accurate summaries than GPT-3.5.

### Problem: Modal doesn't appear when clicking headings

**Solution**: Ensure JavaScript is enabled in your browser, check the browser console for errors, refresh the page, and verify that the page has fully loaded before clicking headings.

## Feedback and Support

We'd love to hear about your experience with this feature! If you encounter bugs, have suggestions, or want to contribute improvements, please open an issue on our GitHub repository.

---

**Happy Learning! 🎓✨**
