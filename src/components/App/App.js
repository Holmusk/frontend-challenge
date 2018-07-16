import '@/store';

import AppDrawer from '@/components/AppDrawer/AppDrawer.vue';
import AppToolbar from '@/components/AppToolbar/AppToolbar.vue';
import AppContent from '@/components/AppContent/AppContent.vue';
import AppFooter from '@/components/AppFooter/AppFooter.vue';

export default {
  name: 'App',

  data: () => ({
    bgColor: 'indigo',
    dark: true,
    drawerVisible: false,
  }),

  methods: {
    toggleDrawer () {
      this.drawerVisible = !this.drawerVisible;
    },
  },

  components: {
    AppDrawer,
    AppToolbar,
    AppContent,
    AppFooter,
  },
};
