```javascript
import React from 'react';
import { Image } from 'expo-image';

const encodedPlusURI = encodeURIComponent('https://example.com/image.jpg?param=this+is+a+test');
const rawPlusURI = 'https://example.com/image.jpg?param=this+is+a+test';

export default function App() {
  return (
    <div>
      {/* Image with '+' fails to load */}
      <Image source={{ uri: rawPlusURI }} style={{ width: 200, height: 200 }} />

      {/* Image with encoded '+' loads successfully */}
      <Image source={{ uri: encodedPlusURI }} style={{ width: 200, height: 200 }} />
    </div>
  );
}
```