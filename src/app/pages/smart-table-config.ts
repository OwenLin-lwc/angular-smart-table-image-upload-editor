import { EditorComponent } from './editor/editor.component';
import { RenderComponent } from './render/render.component';

export const LangList = [
  { value: 'en', title: 'English' },
  { value: 'jp', title: 'Japanese' },
  { value: 'zh', title: 'Chinese' }
];

export const SmartTableConfig = {
  add: {
    confirmCreate: true
  },
  delete: {
    confirmDelete: true
  },
  columns : {
    lang: {
      title: 'Language',
      editor : {
        type: 'list',
        config: {
          list: []
        }
      },
      valuePrepareFunction: {}
    },
    path: {
      title: 'Icon',
      filter: false,
      sort: false,
      editor: {
        type: 'custom',
        component: EditorComponent
      },
      type: 'custom',
      renderComponent: RenderComponent
    }
  }
};
