import { defineComponent } from 'vue'
import AppMain from './components/AppMain'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar/index'
import './index.less'

export default defineComponent({
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar,
  },
  setup() {
    return () => {
      return (
        <>
          <section class="app-wrapper">
            <sidebar class="sidebar-container" />
            <div class="main-container">
              <div class="fixed-header">
                <navbar />
              </div>
              <app-main />
            </div>
          </section>
        </>
      )
    }
  },
})
