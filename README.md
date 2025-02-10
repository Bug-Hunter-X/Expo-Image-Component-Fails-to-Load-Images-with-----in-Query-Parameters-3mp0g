# Expo Image Component Issue with '+' in Query Parameters

This repository demonstrates a bug in Expo's `Image` component where images with '+' characters in their query parameters fail to load. The issue is reproducible across different Expo SDK versions and platforms.

**Problem:**
The `Image` component from Expo doesn't correctly handle '+' characters within query parameters of image URIs. This leads to images failing to load, even if the URI is otherwise valid.

**Solution:**
The workaround involves URL encoding the '+' character before passing the URI to the `Image` component.  This ensures that the '+' is correctly interpreted by the underlying image loading system.

**Reproduction:**
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run the app using `expo start`.  Observe that the first image (using the raw URI with '+') fails to load, while the second (using the encoded URI) loads successfully.
