import { createEditor, Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';

const editor = new Editor({
  extensions: [
    StarterKit,
  ],
  content: '<p>Hello World!</p>',
});

export default editor;
