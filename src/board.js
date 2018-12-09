import Avatar from './components/Avatar'
import AppIcon from './components/AppIcon'
import AppItem from './components/AppItem'
import AppList from './components/AppList'
import AppModal from './components/AppModal'
import AppTabs from './components/AppTabs'
import AppTabsItem from './components/AppTabsItem'
import AppCard from './components/AppCard'
import AppDropdown from './components/AppDropdown'
import FullPage from './components/FullPage'

const componentsMixin = {
  components: {
    Avatar,
    AppIcon,
    AppItem,
    AppList,
    AppModal,
    AppTabs,
    AppTabsItem,
    AppCard,
    AppDropdown,
    FullPage
  }
}

export default class Board {
  static install (Vue, opts) {
    // TODO: Install components, directives, and everything, preferably via a mixin for resuability.
    Vue.mixin(componentsMixin)
  }
}
